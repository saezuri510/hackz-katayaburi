import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { BsPlayFill } from "react-icons/bs";

import { FrameText } from "@/components/icons/FrameText";
import { GameFrame } from "@/components/layouts/GameFrame";
import { MainLayout } from "@/components/layouts/MainLayout";
import { PopButton } from "@/components/ui/domain/PopButton";
import UserBord from "@/components/ui/domain/UserBord";
import { Player } from "@/libs/recoil/types/Player";
import { RoomRecoilProps } from "@/libs/recoil/types/RoomRecoilProps";
import { useGameResultState } from "@/libs/recoil/useGameResultState";
import { useRoomState } from "@/libs/recoil/useRoomState";
import { socket } from "@/libs/socket";

const MemberPage = () => {
  const { addMember, roomValue } = useRoomState();
  const { setGameResultValue } = useGameResultState();

  const router = useRouter();

  const mockRoomValue: RoomRecoilProps = {
    gameStarted: false,
    members: [
      {
        id: "1",
        nickname: "akira",
      },
      {
        id: "2",
        nickname: "kurakke",
      },
      {
        id: "3",
        nickname: "hayata",
      },
    ],
    passphrase: "",
  };

  useEffect(() => {
    const onGamestart = () => {
      router.push("theme");
    };

    const onYourTurn = (msgToSend: string) => {
      setGameResultValue((prev) => ({
        ...prev,
        theme: msgToSend,
      }));
    };

    const onRoomMembers = (members: Player[]) => {
      addMember(members);
    };

    socket.on("gamestart", onGamestart);
    socket.on("yourTurn", onYourTurn);
    socket.on("roomMembers", onRoomMembers);

    return () => {
      socket.off("gamestart", onGamestart);
      socket.off("yourTurn", onYourTurn);
      socket.off("roomMembers", onRoomMembers);
    };
  }, [router, setGameResultValue, addMember]);

  const handleStart = () => {
    socket.emit("gamestart", roomValue.passphrase);
    router.push("/theme");
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
                if (mockRoomValue.members[i]) {
                  elm.push(<UserBord key={i} status name={mockRoomValue.members[i].nickname} />);
                } else {
                  elm.push(<UserBord key={i} name="空" status={false} />);
                }
              }

              return elm;
            })()}
            <div className="pt-3">
              <PopButton
                className="disabled:cursor-no-drop disabled:bg-gray-400"
                // disabled={roomValue.members.length < 2}
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
