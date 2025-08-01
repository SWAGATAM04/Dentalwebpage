// Analytics and monitoring utilities for bot detection
export class BotAnalytics {
  private static readonly ANALYTICS_ENDPOINT = '/api/analytics';
  
  /**
   * Track suspicious activity
   */
  static trackSuspiciousActivity(type: string, details: Record<string, any>): void {
    if (typeof window === 'undefined') return;

    const event = {
      type: 'suspicious_activity',
      subtype: type,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      fingerprint: this.generateFingerprint(),
      details
    };

    this.sendAnalytics(event);
  }

  /**
   * Track form submissions
   */
  static trackFormSubmission(formType: string, success: boolean, error?: string): void {
    const event = {
      type: 'form_submission',
      formType,
      success,
      error,
      timestamp: Date.now(),
      url: window.location.href,
      fingerprint: this.generateFingerprint()
    };

    this.sendAnalytics(event);
  }

  /**
   * Track bot detection events
   */
  static trackBotDetection(reason: string, confidence: number): void {
    const event = {
      type: 'bot_detection',
      reason,
      confidence,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      fingerprint: this.generateFingerprint()
    };

    this.sendAnalytics(event);
  }

  /**
   * Generate visitor fingerprint
   */
  private static generateFingerprint(): string {
    if (typeof window === 'undefined') return 'server';

    const fingerprint = {
      screen: `${screen.width}x${screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: navigator.language,
      platform: navigator.platform,
      cookieEnabled: navigator.cookieEnabled,
      doNotTrack: navigator.doNotTrack
    };

    return btoa(JSON.stringify(fingerprint)).slice(0, 16);
  }

  /**
   * Send analytics data
   */
  private static sendAnalytics(event: Record<string, any>): void {
    // Send to your analytics service
    fetch(this.ANALYTICS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event)
    }).catch(error => {
      console.warn('Analytics tracking failed:', error);
    });
  }

  /**
   * Initialize monitoring
   */
  static initializeMonitoring(): void {
    if (typeof window === 'undefined') return;

    // Monitor for rapid form submissions
    this.monitorRapidSubmissions();
    
    // Monitor for suspicious navigation patterns
    this.monitorNavigationPatterns();
    
    // Monitor for automated interactions
    this.monitorAutomatedInteractions();
  }

  private static monitorRapidSubmissions(): void {
    let lastSubmission = 0;
    
    document.addEventListener('submit', (event) => {
      const now = Date.now();
      const timeSinceLastSubmission = now - lastSubmission;
      
      if (timeSinceLastSubmission < 2000 && lastSubmission > 0) {
        this.trackSuspiciousActivity('rapid_submission', {
          timeBetween: timeSinceLastSubmission,
          formId: (event.target as HTMLFormElement).id
        });
      }
      
      lastSubmission = now;
    });
  }

  private static monitorNavigationPatterns(): void {
    let pageViews = 0;
    let startTime = Date.now();
    
    // Track page views
    pageViews++;
    
    window.addEventListener('beforeunload', () => {
      const sessionDuration = Date.now() - startTime;
      const avgTimePerPage = sessionDuration / pageViews;
      
      // Very short time per page might indicate bot behavior
      if (avgTimePerPage < 1000 && pageViews > 3) {
        this.trackSuspiciousActivity('rapid_navigation', {
          pageViews,
          sessionDuration,
          avgTimePerPage
        });
      }
    });
  }

  private static monitorAutomatedInteractions(): void {
    let clickCount = 0;
    let mouseMovements = 0;
    let keystrokes = 0;
    
    document.addEventListener('click', () => clickCount++);
    document.addEventListener('mousemove', () => mouseMovements++);
    document.addEventListener('keydown', () => keystrokes++);
    
    // Check interaction patterns after 30 seconds
    setTimeout(() => {
      const totalInteractions = clickCount + mouseMovements + keystrokes;
      
      if (clickCount > 0 && mouseMovements === 0) {
        this.trackSuspiciousActivity('clicks_without_mouse', {
          clickCount,
          mouseMovements,
          keystrokes
        });
      }
      
      if (totalInteractions === 0) {
        this.trackSuspiciousActivity('no_interactions', {
          sessionDuration: 30000
        });
      }
    }, 30000);
  }
}

/**
 * Real-time monitoring dashboard data
 */
export class MonitoringDashboard {
  static async getBotStatistics(): Promise<any> {
    try {
      const response = await fetch('/api/bot-statistics');
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch bot statistics:', error);
      return null;
    }
  }

  static async getRecentSuspiciousActivity(): Promise<any[]> {
    try {
      const response = await fetch('/api/suspicious-activity');
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch suspicious activity:', error);
      return [];
    }
  }
}