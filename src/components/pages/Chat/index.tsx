import React, { ReactNode, useState } from "react";
import { BsPlayFill } from "react-icons/bs";

import { FrameText } from "@/components/icons/FrameText";
import { MainLayout } from "@/components/layouts/MainLayout";
import ChatBubble from "@/components/ui/domain/ChatBubble";
import { PopButton } from "@/components/ui/domain/PopButton";
import UserBord from "@/components/ui/domain/UserBord";

function ChatPage() {
  const [chatList, setChatList] = useState<ReactNode[]>([]);

  const handleAddComponent = () => {
    setChatList((prevList) => [
      ...prevList,
      <ChatBubble key={prevList.length} align="left" name="akira">
        adfasdfa
      </ChatBubble>,
    ]);
  };

  return (
    <MainLayout>
      <div className="flex h-full justify-center">
        <div className="mx-5 flex w-96 flex-col items-center rounded-[6px] border-[2px] border-zinc-900/[.15] px-[15px] py-[10px] shadow-[inset_0_1px_0_0,0_2px_0_0] shadow-white/[.15]">
          <FrameText fillColor="#73EECD" fontSize={100} text="プレイヤー" width={200} />
          <UserBord status name="Akira" />
        </div>
        <div className="h-full w-5/6 rounded-[6px] border-[2px] border-zinc-900/[.15] px-[15px] py-[10px] shadow-[inset_0_1px_0_0,0_2px_0_0] shadow-white/[.15]">
          <div className="flex h-full flex-col justify-center">
            <div className="my-[24px] h-full justify-center rounded-[5px] bg-fuchsia-925/[.25] p-[16px] shadow-[inset_0_4px_0_0] shadow-black/[.2]">
              {chatList.map((component, index) => (
                <div key={index}>{component}</div>
              ))}
            </div>
            <div className="flex justify-center">
              <PopButton onClick={handleAddComponent}>
                <BsPlayFill />
                <div className="flex h-[30px] w-[60px] items-center justify-center">次へ</div>
              </PopButton>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ChatPage;
