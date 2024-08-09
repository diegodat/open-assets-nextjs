import { cn } from "@/packages/lib/utils";
import React from "react";

type TextMediumProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLSpanElement>;

const TextMedium: React.FC<TextMediumProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span
      className={cn("text-[15px] leading-5 text-main-black", className)}
      {...props}
    >
      {children}
    </span>
  );
};

export default TextMedium;
