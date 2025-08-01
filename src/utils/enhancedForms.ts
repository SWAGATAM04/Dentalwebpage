import { getRecaptchaToken } from './recaptcha';
import { BotDetector, RateLimiter, HoneypotValidator } from './botPrevention';

// Enhanced form submission with bot prevention
const LAMBDA_ENDPOINT = import.meta.env.PUBLIC_LAMBDA_ENDPOINT;

if (!LAMBDA_ENDPOINT) {
  throw new Error("FATAL: PUBLIC_LAMBDA_ENDPOINT environment variable is not set.");
}

interface FormData {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  email: string;
  phone: string;
  message?: string;
  preferredDate?: string;
  preferredTime?: string;
  reasonForVisit?: string;
  smsConsent: boolean;
  formType: 'appointment' | 'contact' | 'booking';
}

interface SecurityValidation {
  isBot: boolean;
  rateLimited: boolean;
  honeypotFailed: boolean;
  hasInteractions: boolean;
  fingerprint: string;
}

/**
 * Enhanced form submission with comprehensive bot prevention
 */
export async function submitEnhancedForm(data: FormData, formElement: HTMLFormElement): Promise<any> {
  try {
    // 1. Perform security validations
    const security = await performSecurityValidations(formElement);
    
    if (security.isBot) {
      throw new Error('Automated submissions are not allowed. Please try again.');
    }
    
    if (security.rateLimited) {
      throw new Error('Too many requests. Please wait a moment before trying again.');
    }
    
    if (security.honeypotFailed) {
      throw new Error('Invalid form submission detected.');
    }
    
    if (!security.hasInteractions) {
      throw new Error('Please interact with the page before submitting the form.');
    }

    // 2. Add delay for human-like behavior
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    // 3. Get reCAPTCHA token
    const recaptchaToken = await getRecaptchaToken(`submit_${data.formType}`);

    // 4. Prepare enhanced payload
    const payload = {
      ...data,
      fullName: data.fullName || `${data.firstName || ''} ${data.lastName || ''}`.trim(),
      recaptchaToken,
      securityFingerprint: security.fingerprint,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      pageUrl: window.location.href
    };

    // 5. Submit with enhanced headers
    const response = await fetch(LAMBDA_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-Security-Token': security.fingerprint
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      let errorMessage = 'Form submission failed. Please try again.';
      try {
        const errorData = await response.json();
        if (errorData && errorData.message) {
          errorMessage = errorData.message;
        }
      } catch (e) {
        errorMessage = `Server error: ${response.statusText} (${response.status})`;
      }
      throw new Error(errorMessage);
    }

    return await response.json();

  } catch (error) {
    console.error('Enhanced form submission error:', error);
    throw error;
  }
}

/**
 * Perform comprehensive security validations
 */
async function performSecurityValidations(formElement: HTMLFormElement): Promise<SecurityValidation> {
  const formData = new FormData(formElement);
  const fingerprint = BotDetector.generateFingerprint();
  
  return {
    isBot: BotDetector.detectBot(),
    rateLimited: !RateLimiter.checkRateLimit(fingerprint),
    honeypotFailed: !HoneypotValidator.validateHoneypot(formData),
    hasInteractions: BotDetector.hasValidInteractions(),
    fingerprint
  };
}

/**
 * Initialize bot prevention measures
 */
export function initializeBotPrevention(): void {
  if (typeof window === 'undefined') return;

  // Start tracking user interactions
  BotDetector.trackInteractions();

  // Add honeypot fields to all forms
  document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      const honeypot = HoneypotValidator.createHoneypotField();
      form.appendChild(honeypot);
    });
  });

  // Monitor for suspicious behavior
  monitorSuspiciousBehavior();
}

/**
 * Monitor for suspicious automated behavior
 */
function monitorSuspiciousBehavior(): void {
  let rapidClicks = 0;
  let lastClickTime = 0;

  document.addEventListener('click', (event) => {
    const now = Date.now();
    
    // Detect rapid clicking (potential bot behavior)
    if (now - lastClickTime < 100) {
      rapidClicks++;
      if (rapidClicks > 5) {
        console.warn('Suspicious rapid clicking detected');
        // Could implement additional measures here
      }
    } else {
      rapidClicks = 0;
    }
    
    lastClickTime = now;
  });

  // Detect if user never moves mouse (potential headless browser)
  let mouseMoved = false;
  document.addEventListener('mousemove', () => {
    mouseMoved = true;
  });

  setTimeout(() => {
    if (!mouseMoved) {
      console.warn('No mouse movement detected - potential bot');
    }
  }, 10000);
}