import * as ScrollArea from "@radix-ui/react-scroll-area";
import { useRouter } from "next/router";
import React, { ReactNode, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { BsPlayFill } from "react-icons/bs";

import { FrameText } from "@/components/icons/FrameText";
import { MainLayout } from "@/components/layouts/MainLayout";
import ChatBubble from "@/components/ui/domain/ChatBubble";
import { PopButton } from "@/components/ui/domain/PopButton";
import UserBord from "@/components/ui/domain/UserBord";

function ChatPage() {
  const [chatList, setChatList] = useState<ReactNode[]>([]);
  const [count, setCount] = useState(0);
  const router = useRouter();

  const scrollableElementRef = useRef<HTMLDivElement>(null);

  const handleAddComponent = () => {
    if (count < 11) {
      flushSync(() => {
        setChatList((prevList) => [
          ...prevList,
          <ChatBubble key={prevList.length} align={count % 2 == 0 ? "right" : "left"} name="akira">
            adfasdfa
          </ChatBubble>,
        ]);
      });

      setCount((prev) => prev + 1);

      if (scrollableElementRef.current) {
        const element = scrollableElementRef.current;
        element.scrollTop = element.scrollHeight;
      }
    }
  };

  const handler = () => {
    router.push("/member");
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
            <ScrollArea.Root className="my-[24px] h-full justify-center overflow-hidden rounded-[5px] bg-fuchsia-925/[.25] p-[16px] shadow-[inset_0_4px_0_0] shadow-black/[.2]">
              <ScrollArea.Viewport
                ref={scrollableElementRef}
                className="h-full w-full scroll-smooth"
              >
                {chatList.map((component, index) => (
                  <div key={index}>{component}</div>
                ))}
              </ScrollArea.Viewport>
              <ScrollArea.Scrollbar
                className="flex touch-none select-none p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
                orientation="vertical"
              >
                <ScrollArea.Thumb className="relative flex-1 rounded-[10px] bg-white/[.3] transition-colors duration-300 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] hover:bg-white/[.6]" />
              </ScrollArea.Scrollbar>
            </ScrollArea.Root>
            <div className="flex justify-center">
              {chatList.length > 9 ? (
                <PopButton onClick={handler}>
                  <BsPlayFill />
                  <div className="flex h-[30px] w-[60px] items-center justify-center">終了</div>
                </PopButton>
              ) : (
                <PopButton onClick={handleAddComponent}>
                  <BsPlayFill />
                  <div className="flex h-[30px] w-[60px] items-center justify-center">次へ</div>
                </PopButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ChatPage;
