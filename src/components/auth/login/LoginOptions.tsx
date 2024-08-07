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

type Props = {};

export const LoginOptions: FC<Props> = (props) => {
  // console.log("isModalOpen", isModalOpen);

  return (
    <CredenzaContent>
      <CredenzaHeader>
        <CredenzaTitle className="text-left text-[#212121] text-[20px] font-[600]">
          Open Threadsにログイン
        </CredenzaTitle>
        {/* <CredenzaDescription className="text-left text-[#212121] text-[12px] leading-[21px]"></CredenzaDescription> */}
      </CredenzaHeader>

      <CredenzaBody>
        <GoogleSignInButton />
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
