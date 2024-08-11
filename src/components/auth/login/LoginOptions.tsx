import {
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
} from '@/components/auth/Credenza';
import { Button } from '@/packages/components/ui/button';
import { FC } from 'react';
import { GoogleSignInButton } from '../button/GoogleSignInButton';
import { useRouter } from 'next/navigation';
import { Input } from '@/packages/components/ui/input';
import { Label } from '@/packages/components/ui/label';
import { GoogleButton } from '../button/GoogleButton';

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
        <div className="flex justify-center items-center gap-[5px] my-[10px]">
          <div className="bg-[#212121] w-full h-[0.33px] my-2"></div>
          <span className="text-[#212121] text-[10px] leading-[12px] whitespace-nowrap">または</span>
          <div className="bg-[#212121] w-full h-[0.33px] my-2"></div>
        </div>
        <Label>メールアドレス/ID/アカウント名</Label>
        <Input />
      </CredenzaBody>
      <CredenzaFooter className="sm:flex-col gap-[10px] items-center ">
        <Button className="bg-[#1976D2] hover:bg-[#1976D2] h-auto sm:w-[140px] py-[14px] font-[600]">ログイン</Button>
        <CredenzaClose asChild>
          <Button variant="link">アカウントをお持ちでない場合は新規登録</Button>
        </CredenzaClose>
      </CredenzaFooter>
    </CredenzaContent>
  );
};
