import React from "react";

import { GameFrame } from "@/components/layouts/GameFrame";
import { MainLayout } from "@/components/layouts/MainLayout";
import ChatBubble from "@/components/ui/domain/ChatBubble";
import { PopButton } from "@/components/ui/domain/PopButton";
import UserBord from "@/components/ui/domain/UserBord";

function ChatPage() {
  return (
    <MainLayout>
      <div className="flex justify-center">
        <div className="w-96 rounded-[6px] border-[2px] border-zinc-900/[.15] mx-5 px-[15px] py-[10px] shadow-[inset_0_1px_0_0,0_2px_0_0] shadow-white/[.15]">
          <div className="text-center">プレイヤー(1)</div>
          <UserBord name="Akira"/>
        </div>
        <div className="rounded-[6px] border-[2px] border-zinc-900/[.15] px-[15px] py-[10px] shadow-[inset_0_1px_0_0,0_2px_0_0] shadow-white/[.15]">
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
        </div>
      </div>
    </MainLayout>
  );
}

export default ChatPage;
