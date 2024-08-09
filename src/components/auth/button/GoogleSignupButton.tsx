import { useLoadScript } from "@/hooks/useCheckScriptLoad";
import { FC, useEffect, useRef } from "react";

type Props = {
  onCredentialResponse: (response: { credential: string }) => void;
};

export const GoogleSignUpButton: FC<Props> = (props) => {
  const buttonRef = useRef(null);
  const isLoaded = useLoadScript();

  useEffect(() => {
    if (isLoaded && buttonRef.current && window.google) {
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
      });
      window.google.accounts.id.prompt();
    }
    return () => {
      // document.body.removeChild(script);
    };
  }, [buttonRef.current, isLoaded]);

  return (
    <>
      <div className="flex justify-center items-center" ref={buttonRef}></div>
    </>
  );
};
