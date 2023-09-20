import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { GameFrame } from "@/components/layouts/GameFrame";
import { MainLayout } from "@/components/layouts/MainLayout";
import { PopButton } from "@/components/ui/domain/PopButton";
import UserBord from "@/components/ui/domain/UserBord";
import { socket } from "@/libs/socket";

const MemberPage = () => {
  const router = useRouter();

  useEffect(() => {
    const onGamestart = () => {
      // router.push("theme");
    };

    const onYourTurn = (msgToSend: string) => {
      console.log("member page question", msgToSend);
    };

    // TODO: 他のユーザーが入ったことを検知するlistenerの登録

    socket.on("gamestart", onGamestart);
    socket.on("yourTurn", onYourTurn);

    return () => {
      socket.off("gamestart", onGamestart);
      socket.off("yourTurn", onYourTurn);
    };
  }, [router]);

  const handleStart = () => {
    console.log("push");
    socket.emit("gamestart", "fish");
  };

  return (
    <MainLayout>
      <div className="flex justify-center">
        <GameFrame>
          <div className="flex flex-col items-center justify-center space-y-[16px]">
            <div className="mt-[24px] flex w-96 flex-col items-center justify-center space-y-[12px] rounded-[5px] bg-fuchsia-925/[.25] p-[16px]">
              <div className="text-center">プレイヤー(1)</div>
              <UserBord name="Akira" />
              <UserBord name="空" />
              <UserBord name="空" />
              <UserBord name="空" />
              <UserBord name="空" />
              <UserBord name="空" />
            </div>
            <PopButton className="" onClick={handleStart}>
              開始
            </PopButton>
          </div>
        </GameFrame>
      </div>
    </MainLayout>
  );
};

export default MemberPage;
