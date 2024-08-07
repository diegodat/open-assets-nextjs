"use client";
import { useStore } from "@/stores/store";
import React from "react";

type Props = {};

const SettingContent = (props: Props) => {
  const user = useStore((state) => state.user);
  return <div>{JSON.stringify(user)}</div>;
};

export default SettingContent;
