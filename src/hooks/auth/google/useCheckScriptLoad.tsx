"use client";

import { useState, useEffect } from "react";

export function useCheckScriptLoad() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.google) {
      setIsLoaded(true);
    } else {
      const checkGoogleScript = setInterval(() => {
        if (typeof window !== "undefined" && window.google) {
          setIsLoaded(true);
          clearInterval(checkGoogleScript);
        }
      }, 100);

      return () => {
        clearInterval(checkGoogleScript);
      };
    }
  }, []);

  return isLoaded;
}
