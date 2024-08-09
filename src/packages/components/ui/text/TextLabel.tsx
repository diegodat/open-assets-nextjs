import { cn } from "@/packages/lib/utils";
import React from "react";

type TextLabelProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLSpanElement>;

const TextLabel: React.FC<TextLabelProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span
      className={cn("text-[10px] leading-3 text-main-black", className)}
      {...props}
    >
      {children}
    </span>
  );
};

export default TextLabel;
