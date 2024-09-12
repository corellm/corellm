import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "stb-z-50 stb-overflow-hidden stb-rounded-md stb-bg-neutral-900 stb-px-3 stb-py-1.5 stb-text-xs stb-text-neutral-50 stb-animate-in stb-fade-in-0 stb-zoom-in-95 data-[state=closed]:stb-animate-out data-[state=closed]:stb-fade-out-0 data-[state=closed]:stb-zoom-out-95 data-[side=bottom]:stb-slide-in-from-top-2 data-[side=left]:stb-slide-in-from-right-2 data-[side=right]:stb-slide-in-from-left-2 data-[side=top]:stb-slide-in-from-bottom-2 dark:stb-bg-neutral-50 dark:stb-text-neutral-900",
      className,
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
