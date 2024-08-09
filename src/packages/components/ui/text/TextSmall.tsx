import { cn } from "@/packages/lib/utils";
import React from "react";

type TextSmallProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLSpanElement>;

const TextSmall: React.FC<TextSmallProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span
      className={cn("text-[13px] leading-[18px] text-main-black", className)}
      {...props}
    >
      {children}
    </span>
  );
};

export default TextSmall;
