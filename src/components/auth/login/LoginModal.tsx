import { Form } from "@/packages/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Credenza } from "@/components/auth/Credenza";
import { LoginOptions } from "./LoginOptions";
import { LoginParametersSchema } from "@/schemas/auth";
import { LoginForm } from "./LoginForm";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoginModal: FC<Props> = (props) => {
  const { open, onOpenChange } = props;
  const [step, setStep] = useState(2);
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const redirect = useRouter();
  // useEffect(() => {
  //   if (open === true) {
  //     setStep(1);
  //     method.clearErrors();
  //     method.reset();
  //   }
  // }, [open]);

  useEffect(() => {
    if (code) {
      // Send the code to your backend
      fetch("/api/auth/google/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // Handle successful authentication
          // redirect.push('/dashboard')
        })
        .catch((error) => {
          // console.error('Authentication error:', error)
          // redirect.push('/auth-error')
        });
    } else {
      // redirect.push('/auth-error')
    }
  }, [code]);

  const steps = useMemo(
    () => [
      {
        id: 1,
        content: <LoginOptions onClick={handleLogin} />,
      },
      {
        id: 2,
        content: <LoginForm />,
      },
    ],
    [],
  );

  function handleNext() {
    setStep((prev) => prev + 1);
  }

  function onSubmit(values: any) {
    console.log(values);
  }

  const handleOpenChange = (isOpen: boolean) => {
    onOpenChange(isOpen);
  };

  function handleLogin() {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID_SERVER;
    // const redirectUri = encodeURIComponent(
    //   "http://localhost:3000/api/auth/google/callback"
    // );
    // const scope = encodeURIComponent("email profile");

    // const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?redirect_uri=http://localhost:3000/auth&prompt=consent&response_type=code&client_id=${clientId}&access_type=offline&service=lso&o2v=2&theme=mn&ddm=0&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&flowName=GeneralOAuthFlow`;
    redirect.push(authUrl);
  }
  return (
    <Credenza open={open} onOpenChange={handleOpenChange}>
      {steps[step - 1].content}
    </Credenza>
  );
};
