import Avatar from "@/components/avatar";
import IcAddThreadSection from "@/components/svgs/IcAddThreadSection";
import IcMoveSection from "@/components/svgs/IcMoveSection";
import { TextLabel, TextMedium } from "@/packages/components/ui/text";
import { Button } from "@/packages/components/ui/button";
import { Flex, Section } from "@radix-ui/themes";

const PostPage = () => {
  return (
    <Section className="flex flex-col px-[15px] py-5 gap-y-2">
      <Flex className="gap-2" align="center">
        <Avatar />
        <Flex className="gap-1" align="center">
          <TextLabel>閲覧</TextLabel>
          <div className="flex py-[7px] px-3 border border-link rounded-[30px]">
            <TextLabel className="text-link">全員</TextLabel>
          </div>
        </Flex>
        <Flex className="gap-1" align="center">
          <TextLabel>返信</TextLabel>
          <div className="flex py-[7px] px-3 border border-link rounded-[30px]">
            <TextLabel className="text-link">
              フォローしているアカウント
            </TextLabel>
          </div>
        </Flex>
      </Flex>
      <Flex className="gap-2 flex-col">
        <Flex align="start" className="gap-2">
          <Flex align="center" className="gap-2">
            <Button variant="link" className="cursor-grab m-0 p-0 h-auto">
              <IcAddThreadSection />
            </Button>
            {/* todo: handle event move to change class cursor-grab -> cursor-grabbing */}
            <Button variant="link" className="cursor-grab m-0 p-0 h-auto">
              <IcMoveSection />
            </Button>
          </Flex>
          <div
            contentEditable
            spellCheck
            className="text-[15px] leading-5 text-main-black border-0 outline-none cursor-text w-full max-w-full min-h-[1em] whitespace-pre-wrap break-words caret-main-black"
          >
            {`Write something, or press 'space' for AI, ' / ' for commands…`}
          </div>
        </Flex>
      </Flex>
    </Section>
  );
};

export default PostPage;
