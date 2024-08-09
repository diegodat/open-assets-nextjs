import { useLoadScript } from "@/hooks/useCheckScriptLoad";
import React, { FC, useEffect } from "react";

type Props = object;

export const GoogleButton: FC<Props> = (props) => {
  const isLoaded = useLoadScript();

  useEffect(() => {
    // if (window["google"] && !user) {
    if (window["google"] && isLoaded) {
      window.google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        login_uri: process.env.NEXT_PUBLIC_GOOGLE_CALLBACK_URL,
        // callback: handleCredentialResponse,
      });
      window.google.accounts.id.prompt();
      const googleLoginDiv: HTMLElement | null =
        document.getElementById("g_id_onload");
      window.google.accounts.id.renderButton(googleLoginDiv, {
        size: "large",
        width: "320",
        locale: "ja",
        logo_alignment: "left",
        // client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        // login_uri: process.env.NEXT_PUBLIC_GOOGLE_CALLBACK_URL,
        text: "signup_with",
      });
    }
  }, [isLoaded]);
  return (
    <div
      {...props}
      id="g_id_onload"
      className="g_id_signin"
      data-client_id={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
      data-login_uri={process.env.NEXT_PUBLIC_GOOGLE_CALLBACK_URL}
    />
  );
};
