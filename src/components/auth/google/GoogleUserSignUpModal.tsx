import React, { useEffect, useMemo, useState } from "react";
import { Credenza } from "@/components/auth/Credenza";
import { date, z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DateOfBirthForm } from "./DateOfBirth";
import { UserIdForm } from "./UserId";
import { Form } from "@/packages/components/ui/form";
import * as jwt from "jsonwebtoken";
import { useRegisterUser } from "@/hooks/apis/user/useRegisterUser";
import { useToast } from "@/packages/components/ui/use-toast";
import { Button } from "@/packages/components/ui/button";
import { GoogleUserSignUp } from "@/schemas/auth/types";
import { GoogleUserSignUpSchema } from "@/schemas/auth";

type Props = {
  open: boolean;
  credential: string | undefined;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GoogleUserSignUpModal = (props: Props) => {
  const { open, credential, onOpenChange } = props;
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  const method = useForm<GoogleUserSignUp>({
    defaultValues: {
      accountId: "",
    },
    resolver: zodResolver(GoogleUserSignUpSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const registerUserMutation = useRegisterUser();

  function handleNext() {
    setStep((prev) => prev + 1);
  }

  const steps = useMemo(
    () => [
      {
        id: 1,
        content: <DateOfBirthForm onNext={handleNext} />,
      },
      {
        id: 2,
        content: <UserIdForm onSubmit={method.handleSubmit(onSubmit)} />,
      },
    ],
    [],
  );

  useEffect(() => {
    if (open === true) {
      setStep(1);
      method.clearErrors();
      method.reset();
    }
  }, [open]);

  const handleOpenChange = (isOpen: boolean) => {
    onOpenChange(isOpen);
  };

  async function onSubmit(values: GoogleUserSignUp) {
    if (!credential) return;
    console.log("submit", credential);

    try {
      const dataDecoded = jwt.decode(credential) as any;
      const googleId = dataDecoded?.sub;
      const email = dataDecoded?.email;
      const payload = {
        ...values,
        googleId,
        email,
        dateOfBirth: `${values.dateOfBirth.year}-${values.dateOfBirth.month}-${values.dateOfBirth.day}`,
      };
      const response = await registerUserMutation.mutateAsync(payload);
      onOpenChange(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Credenza open={open} onOpenChange={handleOpenChange}>
      <Form {...method}>
        <form onSubmit={method.handleSubmit(onSubmit)}>
          {steps[step - 1].content}
        </form>
      </Form>
    </Credenza>
  );
};
