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
import { Input } from "@/packages/components/ui/input";
import { Label } from "@/packages/components/ui/label";

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
        <div className="bg-[#212121] w-[100%] h-[0.33px] my-2"></div>
        <Label>メールアドレス/ID/アカウント名</Label>
        <Input />
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
