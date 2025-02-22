import { useState } from "react";

const URL = "/api/contactme";

export const useContactMe = () => {
  const [response, setResponse] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleContactMe = async (data: unknown) => {
    try {
      setIsLoading(true);
      const newResponse = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(data),
      });
      setResponse(newResponse);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return { response, isLoading, error, handleContactMe };
};
