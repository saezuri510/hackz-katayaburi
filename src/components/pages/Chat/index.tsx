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
          <div className="my-[24px] justify-center rounded-[5px] bg-fuchsia-925/[.25] p-[16px] shadow-[inset_0_4px_0_0] shadow-black/[.2]">
            <ChatBubble align="left" name="akira">
              akira
            </ChatBubble>
            <ChatBubble align="right" name="kurakke">
              lfdfafadsfasdfsdlk
            </ChatBubble>
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
