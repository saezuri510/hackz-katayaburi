import React from "react";

import { GameFrame } from "@/components/layouts/GameFrame";
import { MainLayout } from "@/components/layouts/MainLayout";
import ChatBubble from "@/components/ui/domain/ChatBubble";
import { PopButton } from "@/components/ui/domain/PopButton";

function ChatPage() {
  return (
    <MainLayout>
      <GameFrame>
        <div className="flex flex-col justify-center">
          <div className="shadow shadow-black">
            <ChatBubble align="left" name="akira">
              akira
            </ChatBubble>
            <ChatBubble align="right" name="kurakke">
              lfdfafadsfasdfsdlk
            </ChatBubble>
          </div>
          <PopButton className="m-5">次へ</PopButton>
        </div>
      </GameFrame>
    </MainLayout>
  );
}

export default ChatPage;
