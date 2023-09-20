import React from "react";

import { GameFrame } from "@/components/layouts/GameFrame";
import { MainLayout } from "@/components/layouts/MainLayout";
import { PopButton } from "@/components/ui/domain/PopButton";
import ChatBubble from "@/components/ui/domain/ChatBubble";

function ChatPage() {
  return (
    <MainLayout>
      <GameFrame>
        <div className="flex flex-col justify-center">
          <div className="shadow shadow-black h-96 w-96">
            <ChatBubble name="akira" align="left">akira</ChatBubble>
            <ChatBubble name="kurakke" align="right">lfdfafadsfasdfsdlk</ChatBubble>
          </div>
          <div className="flex justify-center">
            <PopButton className="m-5">次へ</PopButton>
          </div>
        </div>
      </GameFrame>
    </MainLayout>
  );
}

export default ChatPage;
