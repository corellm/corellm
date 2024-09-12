"use client";

import {
  ComposerPrimitive,
  MessagePrimitive,
  ThreadPrimitive,
} from "@assistant-ui/react";
import { SendHorizontalIcon } from "lucide-react";
import type { FC } from "react";

import { TooltipIconButton } from "@/components/ui/assistant-ui/tooltip-icon-button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const MyThread: FC = () => {
  return (
    <ThreadPrimitive.Root className="stb-h-full stb-bg-white dark:stb-bg-neutral-950">
      <ThreadPrimitive.Viewport className="stb-flex stb-h-full stb-flex-col stb-items-center stb-overflow-y-scroll stb-scroll-smooth stb-bg-inherit stb-px-4 stb-pt-8">
        <MyThreadWelcome />

        <ThreadPrimitive.Messages
          components={{
            UserMessage: MyUserMessage,
            AssistantMessage: MyAssistantMessage,
          }}
        />

        <div className="stb-sticky stb-bottom-0 stb-mt-4 stb-flex stb-w-full stb-max-w-2xl stb-flex-grow stb-flex-col stb-items-center stb-justify-end stb-rounded-t-lg stb-bg-inherit stb-pb-4">
          <MyComposer />
        </div>
      </ThreadPrimitive.Viewport>
    </ThreadPrimitive.Root>
  );
};

const MyThreadWelcome: FC = () => {
  // @ts-expect-error - globalThis is not defined in the type definitions
  const greeting = globalThis.stb?.greeting || "How can I help you today?";
  return (
    <ThreadPrimitive.Empty>
      <div className="stb-flex stb-flex-grow stb-basis-full stb-flex-col stb-items-center stb-justify-center">
        <Avatar>
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <p className="stb-mt-4 stb-font-medium">{greeting}</p>
      </div>
    </ThreadPrimitive.Empty>
  );
};

const MyComposer: FC = () => {
  return (
    <ComposerPrimitive.Root className="focus-within:stb-border-aui-ring/20 stb-flex stb-w-full stb-items-end stb-rounded-lg stb-border stb-border-neutral-200 stb-px-2.5 stb-shadow-sm stb-transition-colors stb-ease-in dark:stb-border-neutral-800">
      <ComposerPrimitive.Input
        autoFocus
        placeholder="Write a message..."
        rows={1}
        className="stb-size-full stb-max-h-40 stb-resize-none stb-border-none stb-bg-transparent stb-p-4 stb-pr-12 stb-text-sm stb-outline-none placeholder:stb-text-neutral-500 focus:stb-ring-0 disabled:stb-cursor-not-allowed dark:placeholder:stb-text-neutral-400"
      />
      <ComposerPrimitive.Send asChild>
        <TooltipIconButton
          tooltip="Send"
          variant="default"
          className="stb-my-2.5 stb-size-8 stb-p-2 stb-transition-opacity stb-ease-in"
        >
          <SendHorizontalIcon />
        </TooltipIconButton>
      </ComposerPrimitive.Send>
    </ComposerPrimitive.Root>
  );
};

const MyUserMessage: FC = () => {
  return (
    <MessagePrimitive.Root className="stb-grid stb-w-full stb-max-w-2xl stb-auto-rows-auto stb-grid-cols-[minmax(72px,1fr)_auto] stb-gap-y-2 stb-py-4">
      <div className="stb-col-start-2 stb-row-start-1 stb-max-w-xl stb-break-words stb-rounded-3xl stb-bg-neutral-100 stb-px-5 stb-py-2.5 stb-text-neutral-950 dark:stb-bg-neutral-800 dark:stb-text-neutral-50">
        <MessagePrimitive.Content />
      </div>
    </MessagePrimitive.Root>
  );
};

const MyAssistantMessage: FC = () => {
  return (
    <MessagePrimitive.Root className="stb-relative stb-grid stb-w-full stb-max-w-2xl stb-grid-cols-[auto_1fr] stb-grid-rows-[auto_1fr] stb-py-4">
      <Avatar className="stb-col-start-1 stb-row-span-full stb-row-start-1 stb-mr-4">
        <AvatarFallback>A</AvatarFallback>
      </Avatar>

      <div className="stb-col-start-2 stb-row-start-1 stb-my-1.5 stb-max-w-xl stb-break-words stb-leading-7 stb-text-neutral-950 dark:stb-text-neutral-50">
        <MessagePrimitive.Content />
      </div>
    </MessagePrimitive.Root>
  );
};
