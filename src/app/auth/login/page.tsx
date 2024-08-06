"use client";

import { GoogleButton } from "@/components/auth/GoogleButton";
import { useRenderGoogleButton } from "@/hooks/auth/google/useRenderGoogleButton";

export default function Login() {
  useRenderGoogleButton();
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <GoogleButton />
    </div>
  );
}
