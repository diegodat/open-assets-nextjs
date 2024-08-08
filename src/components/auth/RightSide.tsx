"use client";

import React, { useState } from "react";
import { GoogleSignUpButton } from "./button/GoogleSignupButton";
import * as jwt from "jsonwebtoken";
import { Button } from "@/packages/components/ui/button";
import { GoogleUserSignUpModal } from "./google/GoogleUserSignUpModal";
import CredentialUserSignUpModal from "./credential/CredentialUserSignUpModal";
import { LoginModal } from "./login/LoginModal";
import { useToast } from "@/packages/components/ui/use-toast";
import Link from "next/link";

type Props = {};

const RightSide = (props: Props) => {
  const [credentialGoogle, setCredentialGoogle] = useState<string | undefined>(
    undefined
  );
  const { toast } = useToast();
  const [googleUserSignUpModalOpen, setGoogleUserSignUpModalOpen] =
    useState(false);
  const [credentialUserSignUpModalOpen, setCredentialUserSignUpModalOpen] =
    useState(false);

  const [loginModalOpen, setLoginModalOpen] = useState(false);

  function handleCredentialResponse(response: { credential: string }) {
    setCredentialGoogle(response.credential);
    setGoogleUserSignUpModalOpen(true);
  }

  return (
    <>
      <div className="sm:pt-[135px] sm:w-[50%] sm:pl-[60px] sm:bg-white">
        <div className="mb-[60px]">
          <h2 className="text-[20px] leading-[24.2px] font-[600] mb-[10px]">
            Open Threadsをはじめましょう
          </h2>
          <p className="text-[15px] leading-[21px]">
            すべての機能を利用するには、公式Open
            Assetsアカウントを作成しましょう。
          </p>
        </div>
        <div className="sm:max-w-[320px]">
          <div className="flex flex-col gap-[10px] mb-[60px]">
            <GoogleSignUpButton
              onCredentialResponse={handleCredentialResponse}
            />
            <div className="bg-[#212121] w-[100%] h-[0.33px]"></div>
            <Button
              className="text-[#FFFFFF] text-[15px] leading-[21px] w-[100%] max-w-[320px] mx-auto py-[14px] h-auto bg-[#1976D2] hover:bg-[#1976D2]"
              onClick={() => setCredentialUserSignUpModalOpen(true)}
            >
              メールアドレスで登録
            </Button>
            <p className="text-[12px] leading-[18px]">
              アカウントを登録することにより、利用規約とプライバシーポリシー（Cookieの使用を含む）に同意したとみなされます。
            </p>
          </div>
          <div className="flex flex-col gap-[5px]">
            <p className="text-[13px] leading-[19.5px]">
              アカウントをお持ちの場合
            </p>
            <Button
              className="text-[#212121] bg-[#FFFFFF] text-[15px] leading-[21px] w-[100%] max-w-[320px] mx-auto py-[14px] h-auto hover:bg-white"
              onClick={() => setLoginModalOpen(true)}
            >
              ログイン
            </Button>
          </div>
        </div>
      </div>
      {credentialGoogle && (
        <GoogleUserSignUpModal
          credential={credentialGoogle}
          open={googleUserSignUpModalOpen}
          onOpenChange={setGoogleUserSignUpModalOpen}
        />
      )}
      <CredentialUserSignUpModal
        open={credentialUserSignUpModalOpen}
        onOpenChange={setCredentialUserSignUpModalOpen}
      />
      <LoginModal open={loginModalOpen} onOpenChange={setLoginModalOpen} />
    </>
  );
};

export default RightSide;
