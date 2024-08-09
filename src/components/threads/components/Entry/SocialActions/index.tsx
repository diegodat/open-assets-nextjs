import React from "react";
import IcComment from "@/components/svgs/IcComment";
import IcRepost from "@/components/svgs/IcRepost";
import IcLike from "@/components/svgs/IcLike";
import IcShare from "@/components/svgs/IcShare";
import IcSeenEntry from "@/components/svgs/IcSeenEntry";
import { TextMedium } from "@/packages/components/ui/text";
import IcBookmark from "@/components/svgs/IcBookmark";

const SocialActions = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="h-[1px] bg-main-border" />
      {/* todo: root entry */}

      {/* <div className="flex justify-between">
        <div className="flex gap-3">
          <div className="flex gap-[2px] items-center">
            <IcComment />
            <TextMedium>4</TextMedium>
          </div>
          <div className="flex gap-[2px] items-center">
            <IcRepost />
            <TextMedium>29</TextMedium>
          </div>
          <div className="flex gap-[2px] items-center">
            <IcLike />
            <TextMedium>23</TextMedium>
          </div>
          <div className="flex gap-[2px] items-center">
            <IcBookmark />
            <TextMedium>199</TextMedium>
          </div>
          <div className="flex gap-[2px] items-center">
            <IcSeenEntry />
            <TextMedium>199</TextMedium>
          </div>
        </div>
        <div>
          <IcShare />
        </div>
      </div> */}

      {/* todo: child entry */}

      <div className="flex flex-wrap gap-2">
        <div className="flex gap-1">
          <TextMedium className="font-semibold">4</TextMedium>
          <TextMedium className="text-dark-gray">件のリポスト</TextMedium>
        </div>
        <div className="flex gap-1">
          <TextMedium className="font-semibold">29</TextMedium>
          <TextMedium className="text-dark-gray">件の引用</TextMedium>
        </div>
        <div className="flex gap-1">
          <TextMedium className="font-semibold">23</TextMedium>
          <TextMedium className="text-dark-gray">件のいいね</TextMedium>
        </div>
        <div className="flex gap-1">
          <TextMedium className="font-semibold">199</TextMedium>
          <TextMedium className="text-dark-gray">件のブックマーク</TextMedium>
        </div>
      </div>
      <div className="h-[1px] bg-main-border" />
      <div className="flex justify-between items-center">
        <IcComment />
        <IcRepost />
        <IcLike />
        <IcBookmark />
        <IcShare />
      </div>
    </div>
  );
};

export default SocialActions;
