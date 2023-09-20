import React from "react";

import { GameFrame } from "@/components/layouts/GameFrame";
import { MainLayout } from "@/components/layouts/MainLayout";
import { PopButton } from "@/components/ui/domain/PopButton";
import UserBord from "@/components/ui/domain/UserBord";

const MemberPage = () => {
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
            <PopButton className="">開始</PopButton>
          </div>
        </GameFrame>
      </div>
    </MainLayout>
  );
};

export default MemberPage;
