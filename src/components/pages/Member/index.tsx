import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { BsPlayFill } from "react-icons/bs";

import { FrameText } from "@/components/icons/FrameText";
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
          <div className="flex w-96 flex-col items-center">
            <FrameText fillColor="#73EECD" fontSize={100} text="プレイヤー" width={200} />
            <UserBord status name="Akira" />
            <UserBord name="空" status={false} />
            <UserBord name="空" status={false} />
            <UserBord name="空" status={false} />
            <UserBord name="空" status={false} />
            <UserBord name="空" status={false} />
            <div className="pt-3">
              <PopButton onClick={handleStart}>
                <BsPlayFill />
                <div className="flex h-[30px] w-[60px] items-center justify-center">開始</div>
              </PopButton>
            </div>
          </div>
        </GameFrame>
      </div>
    </MainLayout>
  );
};

export default MemberPage;
