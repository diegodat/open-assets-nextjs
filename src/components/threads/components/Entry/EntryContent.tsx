import { TextMedium, TextSmall } from "@/packages/components/ui/text";
import { Box, Flex } from "@radix-ui/themes";
import Image from "next/image";
import EntryImages from "./EntryImages";
import Poll from "./Poll";
import ProposedConditions from "./ProposedConditions";
import SocialActions from "./SocialActions";

function EntryContent() {
  return (
    <Flex className="flex-1 gap-2">
      <div className="w-8 h-8" />
      <Box className="flex flex-col gap-y-3">
        {/* list section */}
        <TextMedium className="text-main-black text-[15px] leading-5">
          ここに投稿本文が入ります。ここに投稿本文が入ります。ここに投稿本文が入ります。ここに投稿本文が入ります。
        </TextMedium>
        <EntryImages />

        <div className="flex flex-col gap-y-3">
          <span className="text-main-black text-[20px] leading-6 font-semibold">
            ここに見出しが入ります。ここに見出しが入ります。
          </span>
          <div className="flex gap-[6px] items-center border-[1.5px] border-link p-2 rounded-[8px]">
            <Image
              src={require("@/components/svgs/pause.svg")}
              width={24}
              height={24}
              alt="icon"
            />
            <TextSmall className="text-main-black text-[13px] leading-4 line-clamp-3">
              ここに音声の書きおこしが入ります。ここに音声の書きおこしが入ります。ここに音声の書きおこしが入ります。ここに音声の書きおこしが入ります。
            </TextSmall>
          </div>
        </div>

        <TextMedium>
          ここに投稿本文が入ります。ここに投稿本文が入ります。ここに投稿本文が入ります。ここに投稿本文が入ります。
        </TextMedium>

        <Poll />
        <ProposedConditions />
        <SocialActions />
      </Box>
    </Flex>
  );
}

export default EntryContent;
