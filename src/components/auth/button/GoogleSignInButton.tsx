"use client";

import { FC, useEffect } from "react";

type Props = {
  // onCredentialResponse: (response: { credential: string }) => void;
};

export const GoogleSignInButton: FC<Props> = (props) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client?hl=ja";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // if (window.google) {
    //   window.google.accounts.id.initialize({
    //     client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    //     login_uri: process.env.NEXT_PUBLIC_GOOGLE_CALLBACK_URL,
    //     width: "320px",
    //     // callback: props.onCredentialResponse,
    //   });
    //   window.google.accounts.id.prompt();
    //   const googleLoginDiv: HTMLElement | null =
    //     document.getElementById("g_id_onload");
    //   window.google.accounts.id.renderButton(googleLoginDiv, {
    //     size: "large",
    //     width: "320",
    //     locale: "ja",
    //     logo_alignment: "left",
    //     client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    //     login_uri: process.env.NEXT_PUBLIC_GOOGLE_CALLBACK_URL,
    //   });
    // }
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div
        {...props}
        id="g_id_onload"
        data-client_id={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
        data-login_uri={process.env.NEXT_PUBLIC_GOOGLE_CALLBACK_URL}
      />
      <div
        className="g_id_signin w-[320px]"
        // data-type="standard"
        // data-size="large"
        // data-theme="outline"
        // data-text="sign_in_with"
        // data-shape="rectangular"
        // data-logo_alignment="left"
      />
    </>
  );
};
