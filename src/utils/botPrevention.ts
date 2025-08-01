// Bot Prevention Utilities
export class BotDetector {
  private static readonly SUSPICIOUS_PATTERNS = [
    /bot|crawler|spider|scraper/i,
    /headless|phantom|selenium/i,
    /curl|wget|python|java/i
  ];

  private static readonly LEGITIMATE_BOTS = [
    /googlebot|bingbot|slurp|duckduckbot/i,
    /facebookexternalhit|twitterbot|linkedinbot/i
  ];

  /**
   * Detect if the current visitor is likely a bot
   */
  static detectBot(): boolean {
    if (typeof window === 'undefined') return false;

    const userAgent = navigator.userAgent;
    const isLegitimateBot = this.LEGITIMATE_BOTS.some(pattern => pattern.test(userAgent));
    
    if (isLegitimateBot) return false;

    // Check for suspicious user agents
    const isSuspiciousUA = this.SUSPICIOUS_PATTERNS.some(pattern => pattern.test(userAgent));
    
    // Check for missing features that real browsers have
    const missingFeatures = !window.navigator.languages || 
                           !window.screen || 
                           !window.history ||
                           navigator.webdriver === true;

    // Check for automated behavior patterns
    const suspiciousTimings = this.checkTimingPatterns();
    
    return isSuspiciousUA || missingFeatures || suspiciousTimings;
  }

  /**
   * Check for automated timing patterns
   */
  private static checkTimingPatterns(): boolean {
    const now = Date.now();
    const pageLoadTime = now - performance.timing.navigationStart;
    
    // Bots often load pages very quickly
    return pageLoadTime < 100;
  }

  /**
   * Generate a unique fingerprint for the visitor
   */
  static generateFingerprint(): string {
    if (typeof window === 'undefined') return 'server';

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.textBaseline = 'top';
      ctx.font = '14px Arial';
      ctx.fillText('Bot detection test', 2, 2);
    }

    const fingerprint = {
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      screen: `${screen.width}x${screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      canvas: canvas.toDataURL(),
      plugins: Array.from(navigator.plugins).map(p => p.name).join(',')
    };

    return btoa(JSON.stringify(fingerprint)).slice(0, 32);
  }

  /**
   * Track user interaction patterns
   */
  static trackInteractions(): void {
    if (typeof window === 'undefined') return;

    let interactionCount = 0;
    let mouseMovements = 0;
    let keystrokes = 0;

    const trackInteraction = () => {
      interactionCount++;
      sessionStorage.setItem('userInteractions', interactionCount.toString());
    };

    // Track mouse movements
    document.addEventListener('mousemove', () => {
      mouseMovements++;
      if (mouseMovements % 10 === 0) trackInteraction();
    });

    // Track keystrokes
    document.addEventListener('keydown', () => {
      keystrokes++;
      trackInteraction();
    });

    // Track clicks
    document.addEventListener('click', trackInteraction);

    // Track scroll
    document.addEventListener('scroll', trackInteraction);
  }

  /**
   * Check if user has sufficient interactions
   */
  static hasValidInteractions(): boolean {
    if (typeof window === 'undefined') return true;
    
    const interactions = parseInt(sessionStorage.getItem('userInteractions') || '0');
    return interactions >= 3; // Require at least 3 interactions
  }
}

/**
 * Rate limiting utility
 */
export class RateLimiter {
  private static readonly STORAGE_KEY = 'rateLimitData';
  private static readonly MAX_REQUESTS = 5; // Max requests per window
  private static readonly TIME_WINDOW = 60000; // 1 minute

  static checkRateLimit(identifier: string): boolean {
    if (typeof window === 'undefined') return true;

    const now = Date.now();
    const data = this.getRateLimitData();
    
    if (!data[identifier]) {
      data[identifier] = { count: 1, firstRequest: now };
    } else {
      // Reset if time window has passed
      if (now - data[identifier].firstRequest > this.TIME_WINDOW) {
        data[identifier] = { count: 1, firstRequest: now };
      } else {
        data[identifier].count++;
      }
    }

    this.saveRateLimitData(data);
    
    return data[identifier].count <= this.MAX_REQUESTS;
  }

  private static getRateLimitData(): Record<string, { count: number; firstRequest: number }> {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  }

  private static saveRateLimitData(data: Record<string, { count: number; firstRequest: number }>): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch {
      // Handle storage errors gracefully
    }
  }
}

/**
 * Honeypot field utility
 */
export class HoneypotValidator {
  static createHoneypotField(): HTMLInputElement {
    const honeypot = document.createElement('input');
    honeypot.type = 'text';
    honeypot.name = 'website'; // Common bot target
    honeypot.style.position = 'absolute';
    honeypot.style.left = '-9999px';
    honeypot.style.opacity = '0';
    honeypot.style.pointerEvents = 'none';
    honeypot.tabIndex = -1;
    honeypot.setAttribute('autocomplete', 'off');
    return honeypot;
  }

  static validateHoneypot(formData: FormData): boolean {
    const honeypotValue = formData.get('website');
    return !honeypotValue || honeypotValue === '';
  }
}