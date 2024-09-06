"use client";

import { AssistantRuntimeProvider, useEdgeRuntime } from "@assistant-ui/react";

export function MyRuntimeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const runtime = useEdgeRuntime({
    // @ts-expect-error - globalThis is not defined in the type definitions
    api: globalThis.stb?.chatApi || "https://localhost:3000/api/chat",
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {children}
    </AssistantRuntimeProvider>
  );
}
