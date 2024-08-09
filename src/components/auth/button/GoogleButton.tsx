import React from "react";
import Image from "next/image";
import googleIcon from "@/assets/icons/google_icon.svg";
import { Button } from "@/packages/components/ui/button";

type Props = {
  onClick: () => void;
};

export const GoogleButton = (props: Props) => {
  return (
    <Button
      onClick={props.onClick}
      className="w-full flex justify-center items-center py-[14px] gap-[10px] h-auto bg-[#FFFFFF] hover:bg-[#FFFFFF]"
    >
      <Image src={googleIcon} alt="google_icon" />
      <span className="text-[#1976D2] text-[15px] leading-[21px] font-[600]">
        Googleで登録
      </span>
    </Button>
  );
};
