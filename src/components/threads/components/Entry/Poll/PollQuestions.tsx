import React from "react";

type PollQuestionsProps = {
  onSelectOption: () => void;
};

const PollQuestions: React.FC<PollQuestionsProps> = ({ onSelectOption }) => {
  return (
    <div className="flex flex-col gap-y-[6px]">
      <div
        className="px-3 py-[10px] border-[1.5px] border-link rounded-lg cursor-pointer"
        onClick={onSelectOption}
      >
        <span className="text-[15px] leading-5 text-main-black line-clamp-1">
          ここにアンケート内容が入ります。ここにアンケート内容が入ります。
        </span>
      </div>
      <div
        className="px-3 py-[10px] border-[1.5px] border-link rounded-lg cursor-pointer"
        onClick={onSelectOption}
      >
        <span className="text-[15px] leading-5 text-main-black line-clamp-1">
          ここにアンケート内容が入ります。ここにアンケート内容が入ります。
        </span>
      </div>
      <div
        className="px-3 py-[10px] border-[1.5px] border-link rounded-lg cursor-pointer"
        onClick={onSelectOption}
      >
        <span className="text-[15px] leading-5 text-main-black line-clamp-1">
          ここにアンケート内容が入ります。ここにアンケート内容が入ります。
        </span>
      </div>
      <div
        className="px-3 py-[10px] border-[1.5px] border-link rounded-lg cursor-pointer"
        onClick={onSelectOption}
      >
        <span className="text-[15px] leading-5 text-main-black line-clamp-1">
          ここにアンケート内容が入ります。ここにアンケート内容が入ります。
        </span>
      </div>
    </div>
  );
};

export default PollQuestions;
