export interface CalendlyConfig {
  apiKey: string;
  baseUrl: string;
  eventTypes: {
    mentorship: string;
  };
  analytics: {
    eventCategory: string;
    eventLabel: string;
    eventValue: number;
  };
  email: {
    enabled: boolean;
    retryAttempts: number;
    retryDelay: number;
  };
  redirects: {
    confirmation: string;
    error: string;
  };
}

export const calendlyConfig: CalendlyConfig = {
  apiKey: process.env.CALENDLY_API_KEY || "",
  baseUrl: "https://api.calendly.com",
  eventTypes: {
    mentorship: "https://calendly.com/simeon-cover-io/1-1-ai-agent-mentorship",
  },
  analytics: {
    eventCategory: "mentorship",
    eventLabel: "1-1-ai-agent-mentorship",
    eventValue: 1,
  },
  email: {
    enabled: true,
    retryAttempts: 3,
    retryDelay: 1000,
  },
  redirects: {
    confirmation: "/mentorship-application/confirmation",
    error: "/mentorship-application/error",
  },
};

export function validateCalendlyConfig(): void {
  if (!calendlyConfig.apiKey) {
    throw new Error("CALENDLY_API_KEY environment variable is required");
  }
}
