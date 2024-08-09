import IcUnseen from "@/components/svgs/IcUnseen";
import Image from "next/image";
import React from "react";

type EntryImageProps = {
  isSensitive?: boolean;
};

const EntryImage: React.FC<EntryImageProps> = ({ isSensitive }) => {
  return (
    <div className="relative">
      <Image
        src={require("@/assets/images/home-default.jpeg")}
        alt="entry image"
        className={`rounded-lg ${isSensitive ? "blur-sm transition-all" : ""}`}
      />
      {isSensitive && (
        <div className="absolute top-0 flex flex-col justify-center w-full h-full items-center">
          <IcUnseen />
          <span className="font-semibold text-[8px] leading-3 text-white">
            センシティブな内容
          </span>
          <span className="text-white leading-[6px] text-[4px] mt-[2px]">
            作成者がこのポストをセンシティブな内容として設定しました
          </span>
          <div>
            <button className="text-[4px] text-white font-semibold leading-[6px] border border-white px-1 py-[3px] rounded-sm">
              表示する
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EntryImage;
