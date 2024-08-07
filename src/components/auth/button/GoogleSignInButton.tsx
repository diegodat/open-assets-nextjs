"use client";

import { useCheckScriptLoad } from "@/hooks/auth/google/useCheckScriptLoad";
import { FC, useEffect, useRef } from "react";

type Props = {};

export const GoogleSignInButton: FC<Props> = (props) => {
  const isGoogleScriptLoaded = useCheckScriptLoad();
  const buttonRef = useRef(null);

  useEffect(() => {
    if (isGoogleScriptLoaded && window.google) {
      console.log("render google signin button");
      window.google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      });
      window.google.accounts.id.renderButton(buttonRef.current, {
        size: "large",
        width: "320",
        locale: "ja",
        logo_alignment: "left",
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        login_uri: process.env.NEXT_PUBLIC_GOOGLE_CALLBACK_URL,
        // text: "signin_with",
      });
      window.google.accounts.id.prompt();
    }
  }, [isGoogleScriptLoaded]);

  return (
    <>
      <div className="flex justify-center items-center" ref={buttonRef}></div>
    </>
  );
};
