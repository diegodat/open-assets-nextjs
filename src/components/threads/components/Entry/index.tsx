import { Flex, Section } from "@radix-ui/themes";
import React from "react";
import EntryHeader from "./EntryHeader";
import EntryContent from "./EntryContent";

type EntryProps = {
  asChild?: boolean;
};

const Entry: React.FC<EntryProps> = ({ asChild }) => {
  return (
    <Section className="bg-white">
      <Flex direction="column" className="gap-2 px-5 pb-3">
        <EntryHeader />
        <EntryContent />
        {asChild && <div className="h-[1px] bg-main-border my-3" />}
      </Flex>
    </Section>
  );
};

export default Entry;
