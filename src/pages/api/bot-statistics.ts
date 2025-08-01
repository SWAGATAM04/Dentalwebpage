// API endpoint for bot statistics
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  // This would typically connect to your database or analytics service
  // For now, returning mock data structure
  
  const statistics = {
    totalRequests: 1250,
    blockedBots: 89,
    suspiciousActivity: 23,
    legitimateUsers: 1138,
    topBotUserAgents: [
      { userAgent: 'python-requests/2.28.1', count: 15 },
      { userAgent: 'curl/7.68.0', count: 12 },
      { userAgent: 'Go-http-client/1.1', count: 8 }
    ],
    hourlyStats: [
      { hour: '00:00', requests: 45, blocked: 3 },
      { hour: '01:00', requests: 32, blocked: 2 },
      { hour: '02:00', requests: 28, blocked: 1 },
      // ... more hourly data
    ],
    blockReasons: {
      'suspicious_user_agent': 34,
      'rate_limit_exceeded': 28,
      'honeypot_triggered': 15,
      'missing_interactions': 12
    }
  };

  return new Response(JSON.stringify(statistics), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    }
  });
};