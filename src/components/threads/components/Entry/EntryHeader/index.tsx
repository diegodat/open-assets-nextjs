import Avatar from "@/components/avatar";
import AccountKYC from "@/components/svgs/AccountKYC";
import { Flex } from "@radix-ui/themes";
import MenuOptions from "./MenuOptions";

function EntryHeader() {
  return (
    <Flex justify="between" align="center">
      <Flex align="center" className="gap-2">
        <Avatar />
        <Flex className="gap-2" align="center">
          <Flex align="center">
            <span className="text-[15px] text-main-black leading-5 font-semibold mr-[2px]">
              ハナコ
            </span>
            <AccountKYC />
          </Flex>
          <span className="text-[13px] text-dark-gray leading-5">
            @accountID
          </span>
        </Flex>
      </Flex>
      <MenuOptions type="owner" />
    </Flex>
  );
}

export default EntryHeader;
