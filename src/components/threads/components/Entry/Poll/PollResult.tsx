import React from "react";

const options = [
  { text: "ここにアンケート内容が入ります...", percentage: 50 },
  { text: "ここにアンケート内容が入ります...", percentage: 35 },
  { text: "ここにアンケート内容が入ります...", percentage: 75 },
];

const PollResult = () => {
  return (
    <ul className="list-none p-0 m-0">
      {options.map((option, index) => (
        <li key={index} className="mb-2">
          <div className="w-full h-10 bg-white rounded relative">
            <div
              className={`h-10 bg-main-background absolute ${
                option.percentage === 100 ? "rounded-[8px]" : "rounded-l-[8px]"
              } `}
              style={{ width: `${option.percentage}%` }}
            />
            <div className="w-full flex items-center mb-1 absolute top-2 px-3">
              <div className="flex-1 line-clamp-1">{option.text}</div>
              <div className="ml-2">{option.percentage}%</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PollResult;
