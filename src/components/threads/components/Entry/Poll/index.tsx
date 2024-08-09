"use client";

import { TextMedium } from "@/packages/components/ui/text";
import { useState } from "react";
import PollQuestions from "./PollQuestions";
import PollResult from "./PollResult";

function Poll() {
  // todo: the field will get on backend
  const [option, setOption] = useState<boolean>(false);

  const onSelectOption = () => {
    setOption(true);
  };

  const renderOptions = () => {
    if (option) {
      return <PollResult />;
    }
    return <PollQuestions onSelectOption={onSelectOption} />;
  };

  return (
    <div className="flex flex-col border border-main-border rounded-[5px] p-[6px] gap-y-[6px]">
      <TextMedium className="font-semibold">
        アンケート結果（回答後のイメージ）
      </TextMedium>
      <div>{renderOptions()}</div>
      <div className="flex text-[15px] leading-5 text-dark-gray">
        <TextMedium className="text-dark-gray">99,999票</TextMedium>
        <TextMedium className="text-dark-gray">・</TextMedium>
        <TextMedium className="text-dark-gray">残り36時間</TextMedium>
      </div>
    </div>
  );
}

export default Poll;
