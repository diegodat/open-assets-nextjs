import { useCheckScriptLoad } from "@/hooks/useCheckScriptLoad";
import { FC, useEffect, useRef } from "react";

type Props = {
  onCredentialResponse: (response: { credential: string }) => void;
};

export const GoogleSignUpButton: FC<Props> = (props) => {
  const isGoogleScriptLoaded = useCheckScriptLoad();
  const buttonRef = useRef(null);

  useEffect(() => {
    if (isGoogleScriptLoaded && window.google) {
      window.google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        callback: props.onCredentialResponse,
      });
      window.google.accounts.id.renderButton(buttonRef.current, {
        size: "large",
        width: "320",
        locale: "ja",
        logo_alignment: "left",
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        login_uri: process.env.NEXT_PUBLIC_GOOGLE_CALLBACK_URL,
        // text: "signup_with",
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
