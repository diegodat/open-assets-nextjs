import { Form } from '@/packages/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { EmailConfirm } from './EmailConfirm';
import { EmailVerify } from './EmailVerify';
import { PasswordConfirm } from './PasswordConfirm';
import { NameAndDateOfBirth } from './NameAndDateOfBirth';
import { AvatarUpload } from './AvatarUpload';
import { UserIdForm } from './UserId';
import { Credenza } from '@/components/auth/Credenza';
import { CredentialUserSignUpSchema } from '@/schemas/auth';
import { CredentialUserSignUp } from '@/schemas/auth/types';

type Props = {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
};

const CredentialUserSignUpModal: FC<Props> = (props) => {
  const { open, onOpenChange } = props;
  const [step, setStep] = useState(1);
  const method = useForm<CredentialUserSignUp>({
    defaultValues: {
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
      nickname: '',
      userId: '',
      profileImage: null,
      verificationCode: '',
    },
    resolver: zodResolver(CredentialUserSignUpSchema),
    reValidateMode: 'onBlur',
  });

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

  const steps = useMemo(
    () => [
      {
        title: 1,
        content: <EmailConfirm onNext={handleNext} />,
      },
      {
        title: 2,
        content: <EmailVerify onNext={handleNext} />,
      },
      {
        title: 3,
        content: <PasswordConfirm onNext={handleNext} />,
      },
      {
        title: 4,
        content: <NameAndDateOfBirth onNext={handleNext} />,
      },
      {
        title: 5,
        content: <AvatarUpload onNext={handleNext} />,
      },
      {
        title: 6,
        content: <UserIdForm onSubmit={method.handleSubmit(onSubmit)} />,
      },
    ],
    [],
  );

  function handleNext() {
    setStep((prev) => prev + 1);
  }

  function onSubmit(values: CredentialUserSignUp) {
    console.log(values);
  }
  return (
    <Credenza open={open} onOpenChange={handleOpenChange}>
      <Form {...method}>{steps[step - 1].content}</Form>
    </Credenza>
  );
};

export default CredentialUserSignUpModal;
