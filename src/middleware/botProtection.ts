// Middleware for bot protection (for SSR routes)
import type { APIRoute } from 'astro';

interface BotProtectionConfig {
  maxRequestsPerMinute: number;
  blockSuspiciousUserAgents: boolean;
  requireReferer: boolean;
  enableHoneypot: boolean;
}

const DEFAULT_CONFIG: BotProtectionConfig = {
  maxRequestsPerMinute: 10,
  blockSuspiciousUserAgents: true,
  requireReferer: true,
  enableHoneypot: true
};

// In-memory rate limiting (use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

export function createBotProtectionMiddleware(config: Partial<BotProtectionConfig> = {}) {
  const finalConfig = { ...DEFAULT_CONFIG, ...config };

  return function botProtectionMiddleware(request: Request): Response | null {
    const url = new URL(request.url);
    const clientIP = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown';
    
    // 1. Rate limiting
    if (!checkRateLimit(clientIP, finalConfig.maxRequestsPerMinute)) {
      return new Response('Rate limit exceeded', { 
        status: 429,
        headers: { 'Retry-After': '60' }
      });
    }

    // 2. User agent filtering
    if (finalConfig.blockSuspiciousUserAgents) {
      const userAgent = request.headers.get('user-agent') || '';
      if (isSuspiciousUserAgent(userAgent)) {
        return new Response('Forbidden', { status: 403 });
      }
    }

    // 3. Referer checking for form submissions
    if (finalConfig.requireReferer && request.method === 'POST') {
      const referer = request.headers.get('referer');
      if (!referer || !isValidReferer(referer, url.origin)) {
        return new Response('Invalid referer', { status: 403 });
      }
    }

    // 4. Check for required security headers
    const securityToken = request.headers.get('x-security-token');
    const requestedWith = request.headers.get('x-requested-with');
    
    if (request.method === 'POST' && (!securityToken || requestedWith !== 'XMLHttpRequest')) {
      return new Response('Missing security headers', { status: 403 });
    }

    return null; // Allow request to proceed
  };
}

function checkRateLimit(identifier: string, maxRequests: number): boolean {
  const now = Date.now();
  const windowStart = now - 60000; // 1 minute window
  
  const current = rateLimitStore.get(identifier);
  
  if (!current || current.resetTime < windowStart) {
    rateLimitStore.set(identifier, { count: 1, resetTime: now });
    return true;
  }
  
  if (current.count >= maxRequests) {
    return false;
  }
  
  current.count++;
  return true;
}

function isSuspiciousUserAgent(userAgent: string): boolean {
  const suspiciousPatterns = [
    /bot|crawler|spider|scraper/i,
    /headless|phantom|selenium/i,
    /curl|wget|python|java|go-http/i,
    /^$/,  // Empty user agent
    /test|automation|script/i
  ];

  const legitimateBots = [
    /googlebot|bingbot|slurp|duckduckbot/i,
    /facebookexternalhit|twitterbot|linkedinbot/i,
    /whatsapp|telegram/i
  ];

  // Allow legitimate bots
  if (legitimateBots.some(pattern => pattern.test(userAgent))) {
    return false;
  }

  return suspiciousPatterns.some(pattern => pattern.test(userAgent));
}

function isValidReferer(referer: string, origin: string): boolean {
  try {
    const refererUrl = new URL(referer);
    return refererUrl.origin === origin;
  } catch {
    return false;
  }
}

// Cleanup old rate limit entries periodically
setInterval(() => {
  const now = Date.now();
  const cutoff = now - 300000; // 5 minutes ago
  
  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetTime < cutoff) {
      rateLimitStore.delete(key);
    }
  }
}, 60000); // Run every minute