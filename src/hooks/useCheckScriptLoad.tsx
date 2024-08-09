"use client";

import { useState, useEffect } from "react";

export function useLoadScript() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client?hl=ja";
    script.async = true;
    script.defer = true;
    script.onload = () => setIsLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return isLoaded;
}
