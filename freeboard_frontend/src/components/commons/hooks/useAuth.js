import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function useAuth() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return {
    isLoading,
  };
}
