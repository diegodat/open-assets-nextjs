import { TextMedium, TextSmall } from "@/packages/components/ui/text";
import React from "react";

type ProposedConditionsProps = {};

const ProposedConditions: React.FC<ProposedConditionsProps> = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <TextMedium className="font-semibold">提案された条件</TextMedium>
      <div className="border border-main-border">
        <div className="flex gap-x-2 border-b border-main-border">
          <div className="flex max-w-[40%] w-[30%] bg-main-background items-center py-2 pl-2">
            <TextSmall>初期費用</TextSmall>
          </div>
          <div className="flex w-[80%] py-2 pr-2">
            <TextSmall>20万円</TextSmall>
          </div>
        </div>
        <div className="flex gap-x-2 border-b border-main-border">
          <div className="flex max-w-[40%] w-[30%] bg-main-background items-center py-2 pl-2">
            <TextSmall>敷金</TextSmall>
          </div>
          <div className="flex w-[80%] py-2 pr-2">
            <TextSmall>5万円</TextSmall>
          </div>
        </div>
        <div className="flex gap-x-2 border-b border-main-border">
          <div className="flex max-w-[40%] w-[30%] bg-main-background items-center py-2 pl-2">
            <TextSmall>礼金</TextSmall>
          </div>
          <div className="flex w-[80%] py-2 pr-2">
            <TextSmall>18万円</TextSmall>
          </div>
        </div>
        <div className="flex gap-x-2">
          <div className="flex max-w-[40%] w-[30%] bg-main-background items-center py-2 pl-2">
            <TextSmall>タイトル</TextSmall>
          </div>
          <div className="flex w-[80%] py-2 pr-2">
            <TextSmall>
              複数行の場合。複数行の場合。複数行の場合。複数行の場合。複数行の場合。複数行の場合。
            </TextSmall>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <TextMedium className="text-dark-gray">午後1:29</TextMedium>
        <TextMedium className="text-dark-gray">2024年7月6日</TextMedium>
        <TextMedium className="text-dark-gray">3.1万件の表示</TextMedium>
      </div>
    </div>
  );
};

export default ProposedConditions;
