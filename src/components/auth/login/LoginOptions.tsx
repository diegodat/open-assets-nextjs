import {
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
} from "@/components/auth/Credenza";
import { Button } from "@/packages/components/ui/button";
import { FC } from "react";
import { GoogleSignInButton } from "../button/GoogleSignInButton";
import { useRouter } from "next/navigation";

type Props = {};

export const LoginOptions: FC<Props> = (props) => {
  const router = useRouter();
  const handleCredentialResponse = async (response: { credential: string }) => {
    try {
      const res = await fetch("/api/auth/google/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ credential: response.credential }),
      });
      if (res.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CredenzaContent>
      <CredenzaHeader>
        <CredenzaTitle className="text-left text-[#212121] text-[20px] font-[600]">
          Open Threadsにログイン
        </CredenzaTitle>
        {/* <CredenzaDescription className="text-left text-[#212121] text-[12px] leading-[21px]"></CredenzaDescription> */}
      </CredenzaHeader>

      <CredenzaBody>
        <GoogleSignInButton onCredentialResponse={handleCredentialResponse} />
      </CredenzaBody>
      <CredenzaFooter>
        <Button className="bg-[#1976D2] hover:bg-[#1976D2]">ログイン</Button>
        <CredenzaClose asChild>
          <Button variant="link">アカウントをお持ちでない場合は新規登録</Button>
        </CredenzaClose>
      </CredenzaFooter>
    </CredenzaContent>
  );
};
