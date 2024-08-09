"use client";

import { GoogleButton } from "@/components/auth/GoogleButton";
import { useStore } from "@/stores/store";

export default function Login() {
  // useRenderGoogleButton();
  const user = useStore((state) => state.user);
  console.log(user);
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
