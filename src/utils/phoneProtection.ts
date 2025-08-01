// Phone Number Protection Utilities
export class PhoneProtection {
  /**
   * Obfuscate phone numbers to prevent scraping
   */
  static obfuscatePhoneNumber(phone: string): string {
    // Convert to clickable but harder to scrape format
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }

  /**
   * Generate dynamic phone number display
   */
  static createDynamicPhoneDisplay(phone: string): HTMLElement {
    const container = document.createElement('span');
    const parts = phone.match(/(\d{3})(\d{3})(\d{4})/);
    
    if (parts) {
      // Split phone number into parts with delays
      container.innerHTML = `
        <span data-phone-part="1">(${parts[1]})</span>
        <span data-phone-part="2"> ${parts[2]}-</span>
        <span data-phone-part="3">${parts[3]}</span>
      `;
    }
    
    return container;
  }

  /**
   * Create click-to-reveal phone number
   */
  static createClickToReveal(phone: string, buttonText: string = 'Click to Show Phone'): HTMLElement {
    const container = document.createElement('div');
    container.className = 'phone-reveal-container';
    
    const button = document.createElement('button');
    button.textContent = buttonText;
    button.className = 'bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors';
    
    button.addEventListener('click', () => {
      container.innerHTML = `<a href="tel:${phone}" class="text-primary-600 hover:text-primary-700 font-medium">${this.obfuscatePhoneNumber(phone)}</a>`;
    });
    
    container.appendChild(button);
    return container;
  }

  /**
   * Implement CAPTCHA-protected phone reveal
   */
  static async createCaptchaProtectedPhone(phone: string): Promise<HTMLElement> {
    const container = document.createElement('div');
    container.className = 'captcha-phone-container';
    
    // Simple math CAPTCHA
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const answer = num1 + num2;
    
    container.innerHTML = `
      <div class="bg-gray-50 p-4 rounded-lg">
        <p class="text-sm text-gray-600 mb-2">To view our phone number, please solve:</p>
        <div class="flex items-center gap-2 mb-3">
          <span class="font-medium">${num1} + ${num2} = </span>
          <input type="number" class="w-16 px-2 py-1 border rounded" id="captcha-answer" />
          <button class="bg-primary-600 text-white px-3 py-1 rounded text-sm hover:bg-primary-700" id="reveal-phone">
            Show Phone
          </button>
        </div>
        <div id="phone-result" class="hidden"></div>
      </div>
    `;
    
    const revealBtn = container.querySelector('#reveal-phone') as HTMLButtonElement;
    const answerInput = container.querySelector('#captcha-answer') as HTMLInputElement;
    const resultDiv = container.querySelector('#phone-result') as HTMLDivElement;
    
    revealBtn.addEventListener('click', () => {
      if (parseInt(answerInput.value) === answer) {
        resultDiv.innerHTML = `
          <div class="text-green-600 font-medium">
            <a href="tel:${phone}" class="text-primary-600 hover:text-primary-700">
              📞 ${this.obfuscatePhoneNumber(phone)}
            </a>
          </div>
        `;
        resultDiv.classList.remove('hidden');
        container.querySelector('.bg-gray-50')?.classList.add('hidden');
      } else {
        resultDiv.innerHTML = '<div class="text-red-600 text-sm">Incorrect answer. Please try again.</div>';
        resultDiv.classList.remove('hidden');
      }
    });
    
    return container;
  }
}

/**
 * Advanced phone number protection strategies
 */
export class AdvancedPhoneProtection {
  /**
   * Create image-based phone number (harder for bots to scrape)
   */
  static createPhoneImage(phone: string): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      canvas.width = 200;
      canvas.height = 30;
      
      // Style the text
      ctx.font = '16px Arial';
      ctx.fillStyle = '#2C7A7B'; // Primary color
      ctx.textAlign = 'center';
      
      // Add the phone number
      ctx.fillText(phone, canvas.width / 2, 20);
      
      // Add some noise to make OCR harder
      for (let i = 0; i < 10; i++) {
        ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.1)`;
        ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 2, 2);
      }
    }
    
    canvas.style.cursor = 'pointer';
    canvas.addEventListener('click', () => {
      window.location.href = `tel:${phone}`;
    });
    
    return canvas;
  }

  /**
   * Implement time-delayed phone reveal
   */
  static createTimeDelayedReveal(phone: string, delaySeconds: number = 3): HTMLElement {
    const container = document.createElement('div');
    let countdown = delaySeconds;
    
    const updateDisplay = () => {
      if (countdown > 0) {
        container.innerHTML = `
          <div class="bg-blue-50 p-3 rounded-lg text-center">
            <p class="text-sm text-blue-600">Phone number available in ${countdown} seconds...</p>
            <div class="w-full bg-blue-200 rounded-full h-2 mt-2">
              <div class="bg-blue-600 h-2 rounded-full transition-all duration-1000" style="width: ${((delaySeconds - countdown) / delaySeconds) * 100}%"></div>
            </div>
          </div>
        `;
        countdown--;
        setTimeout(updateDisplay, 1000);
      } else {
        container.innerHTML = `
          <a href="tel:${phone}" class="text-primary-600 hover:text-primary-700 font-medium text-lg">
            📞 ${PhoneProtection.obfuscatePhoneNumber(phone)}
          </a>
        `;
      }
    };
    
    updateDisplay();
    return container;
  }

  /**
   * Create session-based phone reveal (one per session)
   */
  static createSessionProtectedPhone(phone: string): HTMLElement {
    const container = document.createElement('div');
    const sessionKey = 'phone_revealed';
    
    if (sessionStorage.getItem(sessionKey)) {
      // Already revealed in this session
      container.innerHTML = `
        <a href="tel:${phone}" class="text-primary-600 hover:text-primary-700 font-medium">
          📞 ${PhoneProtection.obfuscatePhoneNumber(phone)}
        </a>
      `;
    } else {
      // Require interaction to reveal
      container.innerHTML = `
        <button class="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors" id="reveal-phone-btn">
          📞 Click to Show Phone Number
        </button>
      `;
      
      const button = container.querySelector('#reveal-phone-btn') as HTMLButtonElement;
      button.addEventListener('click', () => {
        sessionStorage.setItem(sessionKey, 'true');
        container.innerHTML = `
          <a href="tel:${phone}" class="text-primary-600 hover:text-primary-700 font-medium">
            📞 ${PhoneProtection.obfuscatePhoneNumber(phone)}
          </a>
        `;
      });
    }
    
    return container;
  }
}

/**
 * Phone call analytics and monitoring
 */
export class PhoneCallAnalytics {
  private static readonly CALL_TRACKING_KEY = 'call_tracking';
  
  /**
   * Track phone number clicks
   */
  static trackPhoneClick(phone: string): void {
    const event = {
      type: 'phone_click',
      phone: phone.replace(/\d/g, 'X'), // Anonymize for privacy
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      sessionId: this.getSessionId()
    };
    
    this.logCallEvent(event);
  }

  /**
   * Monitor for suspicious call patterns
   */
  static monitorCallPatterns(): void {
    const calls = this.getCallHistory();
    const recentCalls = calls.filter(call => Date.now() - call.timestamp < 300000); // 5 minutes
    
    if (recentCalls.length > 3) {
      console.warn('Suspicious call pattern detected');
      // Could implement additional measures here
    }
  }

  private static getSessionId(): string {
    let sessionId = sessionStorage.getItem('session_id');
    if (!sessionId) {
      sessionId = Math.random().toString(36).substring(2, 15);
      sessionStorage.setItem('session_id', sessionId);
    }
    return sessionId;
  }

  private static logCallEvent(event: any): void {
    const history = this.getCallHistory();
    history.push(event);
    
    // Keep only last 50 events
    if (history.length > 50) {
      history.splice(0, history.length - 50);
    }
    
    localStorage.setItem(this.CALL_TRACKING_KEY, JSON.stringify(history));
  }

  private static getCallHistory(): any[] {
    try {
      const stored = localStorage.getItem(this.CALL_TRACKING_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }
}