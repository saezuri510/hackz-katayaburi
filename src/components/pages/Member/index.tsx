import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { BsPlayFill } from "react-icons/bs";

import { FrameText } from "@/components/icons/FrameText";
import { GameFrame } from "@/components/layouts/GameFrame";
import { MainLayout } from "@/components/layouts/MainLayout";
import { PopButton } from "@/components/ui/domain/PopButton";
import UserBord from "@/components/ui/domain/UserBord";
import { useRoomState } from "@/libs/recoil/useRoomState";
import { socket } from "@/libs/socket";

const MemberPage = () => {
  const { roomValue } = useRoomState();

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
    socket.emit("gamestart", roomValue.passphrase);
  };

  return (
    <MainLayout>
      <div className="flex justify-center">
        <GameFrame>
          <div className="flex w-96 flex-col items-center">
            <FrameText fillColor="#73EECD" fontSize={100} text="プレイヤー" width={200} />
            {(() => {
              const elm = [];

              for (let i = 0; i < 6; i++) {
                if (roomValue.members[i]) {
                  elm.push(<UserBord key={i} status name={roomValue.members[i].nickname} />);
                } else {
                  elm.push(<UserBord key={i} name="空" status={false} />);
                }
              }

              return elm;
            })()}
            <div className="pt-3">
              <PopButton
                className="disabled:cursor-no-drop disabled:bg-gray-400"
                disabled={roomValue.members.length < 2}
                onClick={handleStart}
              >
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
