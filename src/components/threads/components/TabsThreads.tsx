"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/packages/lib/utils";

const TabsTriggerThreads = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex items-center justify-center whitespace-nowrap px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground flex-1 bg-transparent data-[state=active]:bg-white rounded-none border-b-2 border-main-border data-[state=active]:border-link text-main-black text-[13px] leading-5",
      className,
    )}
    {...props}
  />
));
TabsTriggerThreads.displayName = TabsPrimitive.Trigger.displayName;

export { TabsTriggerThreads };
