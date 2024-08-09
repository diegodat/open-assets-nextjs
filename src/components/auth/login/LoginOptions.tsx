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
import { GoogleButton } from "../button/GoogleButton";

type Props = {
  onClick: () => void;
};

export const LoginOptions: FC<Props> = (props) => {
  return (
    <CredenzaContent>
      <CredenzaHeader>
        <CredenzaTitle className="text-left text-[#212121] text-[20px] font-[600]">
          Open Threadsにログイン
        </CredenzaTitle>
        {/* <CredenzaDescription className="text-left text-[#212121] text-[12px] leading-[21px]"></CredenzaDescription> */}
      </CredenzaHeader>

      <CredenzaBody>
        <GoogleButton onClick={props.onClick} />
        {/* <GoogleSignInButton /> */}
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
