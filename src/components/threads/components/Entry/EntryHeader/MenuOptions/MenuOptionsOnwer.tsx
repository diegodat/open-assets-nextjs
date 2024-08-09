"use client";

import IcAddAuthor from "@/components/svgs/IcAddAuthor";
import IcChange from "@/components/svgs/IcChange";
import IcPencil from "@/components/svgs/IcPencil";
import IcRepost from "@/components/svgs/IcRepost";
import IcSeenEntry from "@/components/svgs/IcSeenEntry";
import IcThreeDot from "@/components/svgs/IcThreeDot";
import IcTrash from "@/components/svgs/IcTrash";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Button } from "@/packages/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/packages/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/packages/components/ui/dropdown-menu";
import { TextMedium } from "@/packages/components/ui/text";
import { Flex } from "@radix-ui/themes";
import { useState } from "react";

const MenuOptionsOnwer = () => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="link">
            <IcThreeDot />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Flex align="center" className="gap-2">
                <IcTrash />
                <TextMedium className="text-error">ポストを削除</TextMedium>
              </Flex>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Flex align="center" className="gap-2">
                <IcPencil />
                <TextMedium>ポストを編集</TextMedium>
              </Flex>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Flex align="center" className="gap-2">
                <IcAddAuthor />
                <TextMedium>自分のスレッドリストに追加</TextMedium>
              </Flex>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Flex align="center" className="gap-2">
                <IcSeenEntry width={20} height={20} />
                <TextMedium>閲覧できるユーザーを変更</TextMedium>
              </Flex>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Flex align="center" className="gap-2">
                <IcRepost width={20} height={20} />
                <TextMedium>返信できるユーザーを変更</TextMedium>
              </Flex>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Flex align="center" className="gap-2">
                <IcChange />
                <TextMedium>匿名設定を変更</TextMedium>
              </Flex>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="link">
          <IcThreeDot />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="gap-y-4">
          <Flex align="center" className="gap-2">
            <IcTrash />
            <TextMedium className="text-error">ポストを削除</TextMedium>
          </Flex>
          <Flex align="center" className="gap-2">
            <IcPencil />
            <TextMedium>ポストを編集</TextMedium>
          </Flex>
          <Flex align="center" className="gap-2">
            <IcAddAuthor />
            <TextMedium>自分のスレッドリストに追加</TextMedium>
          </Flex>
          <Flex align="center" className="gap-2">
            <IcSeenEntry width={20} height={20} />
            <TextMedium>閲覧できるユーザーを変更</TextMedium>
          </Flex>
          <Flex align="center" className="gap-2">
            <IcRepost width={20} height={20} />
            <TextMedium>返信できるユーザーを変更</TextMedium>
          </Flex>
          <Flex align="center" className="gap-2">
            <IcChange />
            <TextMedium>匿名設定を変更</TextMedium>
          </Flex>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuOptionsOnwer;
