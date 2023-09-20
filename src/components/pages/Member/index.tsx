import React from "react";
import { BsPlayFill } from "react-icons/bs";

import { FrameText } from "@/components/icons/FrameText";
import { GameFrame } from "@/components/layouts/GameFrame";
import { MainLayout } from "@/components/layouts/MainLayout";
import { PopButton } from "@/components/ui/domain/PopButton";
import UserBord from "@/components/ui/domain/UserBord";

const MemberPage = () => {
  return (
    <MainLayout>
      <div className="flex justify-center">
        <GameFrame>
          <div className="flex w-96 flex-col items-center">
            <FrameText fillColor="#73EECD" fontSize={100} text="プレイヤー" width={200} />
            <UserBord name="Akira" {...{status: true}} />
            <UserBord name="空" {...{status: false}} />
            <UserBord name="空" {...{status: false}} />
            <UserBord name="空" {...{status: false}} />
            <UserBord name="空" {...{status: false}} />
            <UserBord name="空" {...{status: false}} />
            <div className="pt-3">
              <PopButton>
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
