import React, { useEffect, useMemo, useState } from "react";
import { Credenza } from "@/components/auth/Credenza";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DateOfBirthForm } from "./DateOfBirth";
import { UserIdForm } from "./UserId";
import { Form } from "@/packages/components/ui/form";

type Props = {
  open: boolean;
  credential: string | undefined;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
};

const GoogleUserSignUpSchema = z.object({
  birthday: z.object({
    year: z.number().min(1900).max(new Date().getFullYear()),
    month: z.number().min(1).max(12),
    day: z.number().min(1).max(31),
  }),
  userId: z.string().min(3).max(20),
});

export type GoogleUserSignUp = z.infer<typeof GoogleUserSignUpSchema>;

export const GoogleUserSignUpModal = (props: Props) => {
  const { open, credential, onOpenChange } = props;
  const [step, setStep] = useState(1);
  const method = useForm<GoogleUserSignUp>({
    defaultValues: {
      userId: "",
    },
    resolver: zodResolver(GoogleUserSignUpSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

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

  function onSubmit(values: GoogleUserSignUp) {
    if (!credential) return;
    const payload = { ...values, credential };
    console.log(payload);
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
