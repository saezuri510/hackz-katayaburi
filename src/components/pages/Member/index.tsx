import { GameFrame } from "@/components/layouts/GameFrame";
import { MainLayout } from "@/components/layouts/MainLayout";
import { PopButton } from "@/components/ui/domain/PopButton";
import UserBord from "@/components/ui/domain/UserBord";
import React from "react";

const MemberPage = () => {
  return (
    <MainLayout>
      <div className="flex justify-center">
        <GameFrame>
          <div className="w-96">
            <div className="text-center">プレイヤー(1)</div>
            <UserBord name={"Akira"} />
            <UserBord name={"空"} />
						<UserBord name={"空"} />
						<UserBord name={"空"} />
						<UserBord name={"空"} />
						<UserBord name={"空"} />
          </div>
        </GameFrame>
      </div>
    </MainLayout>
  );
};

export default MemberPage;
