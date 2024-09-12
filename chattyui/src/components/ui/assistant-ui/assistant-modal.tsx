"use client";

import { BotIcon, ChevronDownIcon } from "lucide-react";

import { AssistantModalPrimitive } from "@assistant-ui/react";
import { type FC, forwardRef } from "react";

import { MyThread } from "@/components/ui/assistant-ui/thread";
import { TooltipIconButton } from "@/components/ui/assistant-ui/tooltip-icon-button";

export const MyAssistantModal: FC = () => {
  return (
    <AssistantModalPrimitive.Root>
      <AssistantModalPrimitive.Anchor className="stb-fixed stb-bottom-4 stb-right-4 stb-size-11">
        <AssistantModalPrimitive.Trigger asChild>
          <FloatingAssistantButton />
        </AssistantModalPrimitive.Trigger>
      </AssistantModalPrimitive.Anchor>
      <AssistantModalPrimitive.Content
        sideOffset={16}
        className="stb-z-50 stb-h-[500px] stb-w-[400px] stb-overflow-clip stb-rounded-xl stb-border stb-border-neutral-200 stb-bg-white stb-p-0 stb-text-neutral-950 stb-shadow-md stb-outline-none data-[state=open]:stb-animate-in data-[state=closed]:stb-animate-out data-[state=closed]:stb-fade-out-0 data-[state=open]:stb-fade-in-0 data-[state=closed]:stb-zoom-out data-[state=open]:stb-zoom-in data-[state=closed]:stb-slide-out-to-bottom-1/2 data-[state=closed]:stb-slide-out-to-right-1/2 data-[state=open]:stb-slide-in-from-bottom-1/2 data-[state=open]:stb-slide-in-from-right-1/2 dark:stb-border-neutral-800 dark:stb-bg-neutral-950 dark:stb-text-neutral-50 [&>div]:stb-bg-inherit"
      >
        <MyThread />
      </AssistantModalPrimitive.Content>
    </AssistantModalPrimitive.Root>
  );
};

type FloatingAssistantButtonProps = { "data-state"?: "open" | "closed" };

const FloatingAssistantButton = forwardRef<
  HTMLButtonElement,
  FloatingAssistantButtonProps
>(({ "data-state": state, ...rest }, ref) => {
  const tooltip = state === "open" ? "Close Assistant" : "Open Assistant";

  return (
    <TooltipIconButton
      variant="default"
      tooltip={tooltip}
      side="left"
      {...rest}
      className="stb-size-full stb-rounded-full stb-shadow stb-transition-transform hover:stb-scale-110 active:stb-scale-90"
      ref={ref}
    >
      <BotIcon
        data-state={state}
        className="stb-absolute stb-size-6 stb-transition-all data-[state=closed]:stb-rotate-0 data-[state=open]:stb-rotate-90 data-[state=closed]:stb-scale-100 data-[state=open]:stb-scale-0"
      />

      <ChevronDownIcon
        data-state={state}
        className="stb-absolute stb-size-6 stb-transition-all data-[state=closed]:stb--rotate-90 data-[state=open]:stb-rotate-0 data-[state=closed]:stb-scale-0 data-[state=open]:stb-scale-100"
      />
      <span className="stb-sr-only">{tooltip}</span>
    </TooltipIconButton>
  );
});

FloatingAssistantButton.displayName = "FloatingAssistantButton";
