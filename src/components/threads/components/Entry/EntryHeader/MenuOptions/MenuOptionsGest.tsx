"use client";

import IcAI from "@/components/svgs/IcAI";
import IcAddAuthor from "@/components/svgs/IcAddAuthor";
import IcBlock from "@/components/svgs/IcBlock";
import IcFollowAuthor from "@/components/svgs/IcFollowAuthor";
import IcReport from "@/components/svgs/IcReport";
import IcThreeDot from "@/components/svgs/IcThreeDot";
import IcTurnOffNotification from "@/components/svgs/IcTurnOffNotification";
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
import { useState } from "react";

const MenuOptionsGest = () => {
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
            <DropdownMenuItem className="flex gap-2 items-center">
              <IcAI />
              <span>AIで要約</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-2 items-center">
              <IcFollowAuthor />
              <span>投稿者をフォロー</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-2 items-center">
              <IcAddAuthor />
              <span>投稿者をリストに追加</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-2 items-center">
              <IcTurnOffNotification />
              <span>投稿者をミュート</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-2 items-center">
              <IcBlock />
              <span>投稿者をブロック</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-2 items-center">
              <IcReport />
              <span>ポストを報告</span>
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
          <div className="flex gap-2 items-center">
            <IcAI />
            <span>AIで要約</span>
          </div>
          <div className="flex gap-2 items-center">
            <IcFollowAuthor />
            <span>投稿者をフォロー</span>
          </div>
          <div className="flex gap-2 items-center">
            <IcAddAuthor />
            <span>投稿者をリストに追加</span>
          </div>
          <div className="flex gap-2 items-center">
            <IcTurnOffNotification />
            <span>投稿者をミュート</span>
          </div>
          <div className="flex gap-2 items-center">
            <IcBlock />
            <span>投稿者をブロック</span>
          </div>
          <div className="flex gap-2 items-center">
            <IcReport />
            <span>ポストを報告</span>
          </div>
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

export default MenuOptionsGest;
