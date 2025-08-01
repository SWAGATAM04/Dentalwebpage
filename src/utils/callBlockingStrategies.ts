// Advanced strategies to reduce unwanted phone calls
export class CallBlockingStrategies {
  
  /**
   * Phone number obfuscation techniques
   */
  static obfuscationMethods = {
    
    // Method 1: CSS-based hiding with pseudo-elements
    cssObfuscation: `
      .phone-hidden::before {
        content: "(737) ";
      }
      .phone-hidden::after {
        content: "910-3739";
      }
      .phone-hidden {
        font-size: 0; /* Hide the actual text */
      }
    `,
    
    // Method 2: JavaScript-assembled phone number
    jsAssembly: () => {
      const parts = ['737', '910', '3739'];
      return `(${parts[0]}) ${parts[1]}-${parts[2]}`;
    },
    
    // Method 3: Base64 encoded phone number
    base64Phone: () => {
      const encoded = btoa('+17379103739');
      return atob(encoded);
    },
    
    // Method 4: ROT13 simple cipher
    rot13Phone: (phone: string) => {
      return phone.replace(/[0-9]/g, (char) => {
        return String.fromCharCode(((parseInt(char) + 5) % 10) + 48);
      });
    }
  };

  /**
   * Implement geographic restrictions
   */
  static async checkGeographicAccess(): Promise<boolean> {
    try {
      // Get user's approximate location
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      
      // Allow access from Texas and surrounding states
      const allowedRegions = ['TX', 'OK', 'LA', 'AR', 'NM'];
      
      return allowedRegions.includes(data.region_code);
    } catch {
      // If geolocation fails, allow access (don't block legitimate users)
      return true;
    }
  }

  /**
   * Implement business hours restrictions
   */
  static isBusinessHours(): boolean {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const hour = now.getHours();
    
    // Define business hours (adjust based on your schedule)
    const businessHours = {
      1: { start: 9, end: 17 },   // Monday
      2: { start: 0, end: 0 },    // Tuesday - Closed
      3: { start: 9, end: 17 },   // Wednesday
      4: { start: 9, end: 17 },   // Thursday
      5: { start: 10, end: 14 },  // Friday
      6: { start: 9, end: 14 },   // Saturday
      0: { start: 0, end: 0 }     // Sunday - Closed
    };
    
    const todayHours = businessHours[day as keyof typeof businessHours];
    
    if (todayHours.start === 0 && todayHours.end === 0) {
      return false; // Closed today
    }
    
    return hour >= todayHours.start && hour < todayHours.end;
  }

  /**
   * Create business hours aware phone display
   */
  static createBusinessHoursPhone(phone: string): HTMLElement {
    const container = document.createElement('div');
    
    if (this.isBusinessHours()) {
      container.innerHTML = `
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
          <a href="tel:${phone}" class="text-primary-600 hover:text-primary-700 font-medium">
            📞 ${phone} <span class="text-sm text-green-600">(Open Now)</span>
          </a>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 bg-gray-400 rounded-full"></span>
          <span class="text-gray-600">
            📞 ${phone} <span class="text-sm text-gray-500">(Currently Closed)</span>
          </span>
          <button class="ml-2 text-primary-600 hover:text-primary-700 text-sm underline" onclick="showBusinessHours()">
            View Hours
          </button>
        </div>
      `;
    }
    
    return container;
  }

  /**
   * Implement call-back request system instead of direct calls
   */
  static createCallbackRequest(): HTMLElement {
    const container = document.createElement('div');
    
    container.innerHTML = `
      <div class="bg-primary-50 p-4 rounded-lg">
        <h3 class="font-bold text-gray-800 mb-2">Request a Call Back</h3>
        <p class="text-sm text-gray-600 mb-3">We'll call you back during business hours</p>
        <form id="callback-form" class="space-y-3">
          <input 
            type="tel" 
            placeholder="Your phone number" 
            required 
            class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary-500"
            name="callbackPhone"
          />
          <select 
            name="preferredTime" 
            class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary-500"
            required
          >
            <option value="">Preferred time to call</option>
            <option value="morning">Morning (9 AM - 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
          </select>
          <button 
            type="submit" 
            class="w-full bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 transition-colors"
          >
            Request Call Back
          </button>
        </form>
      </div>
    `;
    
    return container;
  }
}

/**
 * Telecom-level protection recommendations
 */
export class TelecomProtection {
  
  /**
   * Generate recommendations for telecom-level blocking
   */
  static getTelecomRecommendations(): string[] {
    return [
      "Contact your phone provider about robocall blocking services",
      "Enable 'Silence Unknown Callers' on your business phone",
      "Use a call screening service like Google Voice or similar",
      "Implement a phone tree system that requires human interaction",
      "Consider using a separate number for online listings",
      "Register with the National Do Not Call Registry",
      "Use call analytics to identify patterns in unwanted calls",
      "Implement caller ID verification requirements"
    ];
  }

  /**
   * Alternative contact methods to reduce phone dependency
   */
  static getAlternativeContactMethods(): any[] {
    return [
      {
        method: "Online Booking",
        description: "Direct appointment scheduling without phone calls",
        implementation: "Integrated booking widget with form validation"
      },
      {
        method: "Live Chat",
        description: "Real-time chat during business hours",
        implementation: "Chat widget with human verification"
      },
      {
        method: "Contact Forms",
        description: "Detailed inquiry forms with bot protection",
        implementation: "Multi-step forms with CAPTCHA"
      },
      {
        method: "Email Communication",
        description: "Professional email responses",
        implementation: "Automated email routing with spam filters"
      },
      {
        method: "Text Messaging",
        description: "SMS-based appointment confirmations",
        implementation: "Two-way SMS with opt-in verification"
      }
    ];
  }
}

// Export utility functions for easy use
export const phoneUtils = {
  obfuscate: CallBlockingStrategies.obfuscationMethods.jsAssembly,
  isBusinessHours: CallBlockingStrategies.isBusinessHours,
  trackClick: PhoneCallAnalytics.trackPhoneClick,
  checkGeo: CallBlockingStrategies.checkGeographicAccess
};