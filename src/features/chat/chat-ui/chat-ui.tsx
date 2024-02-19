"use client";

import { FC } from "react";
import { useChatContext } from "./chat-context";
import { ChatMessageEmptyState } from "./chat-empty-state/chat-message-empty-state";
import ChatInput from "./chat-input/chat-input";
import { ChatMessageContainer } from "./chat-message-container";

interface Prop {}

export const ChatUI: FC<Prop> = () => {
  const { messages } = useChatContext();

  return (
    <div className="h-full relative overflow-hidden flex-1 bg-card rounded-md shadow-md">
      <img src="/icon.jpg" className="object-contain w-40 h-50 relative top-0 left-0" />
      {messages.length !== 0 ? (
        <ChatMessageContainer />
      ) : (
        <ChatMessageEmptyState />
      )}

      <ChatInput />
    </div>
  );
};
