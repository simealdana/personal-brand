import { useState } from "react";

interface LeadFormData {
  name: string;
  email: string;
  hasIdea: string;
  budget: string;
}

interface ApplyResponse {
  success: boolean;
  message: string;
  data?: LeadFormData;
  error?: string;
}

export const useApply = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitApplication = async (
    formData: LeadFormData
  ): Promise<ApplyResponse> => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data: ApplyResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit application");
      }

      setSuccess(true);
      return data;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setError(null);
    setSuccess(false);
  };

  return {
    submitApplication,
    isLoading,
    error,
    success,
    reset,
  };
};
