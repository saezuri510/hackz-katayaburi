import { AiFillCheckCircle } from "react-icons/ai";

import { FrameText } from "@/components/icons/FrameText";
import { GameFrame } from "@/components/layouts/GameFrame";
import { MainLayout } from "@/components/layouts/MainLayout";
import NumberPeople from "@/components/layouts/NumberPeople";
import { Timer } from "@/components/layouts/Timer";
import { PopButton } from "@/components/ui/domain/PopButton";
import { PopInput } from "@/components/ui/domain/PopInput";

export const AnswerPage = () => {
  return (
    <MainLayout>
      <GameFrame>
        <>
          <div className="flex w-[768px] justify-between">
            <NumberPeople />
            <Timer />
          </div>
          <div className="mb-[64px] mt-[24px] flex flex-col items-center justify-center space-y-[16px] rounded-[5px] bg-fuchsia-925/[.25] p-[16px]">
            <FrameText fillColor="#db2777" fontSize={34} text="お題をあてる" />
            <FrameText fillColor="rgb(34 197 94)" fontSize={20} text="python javascript" />
            <div className="flex justify-center">
              <PopInput className="h-[40px] w-[400px]" type="text" />
              <PopButton className="ml-[8px] w-32 drop-shadow-lg">
                <AiFillCheckCircle size={24} />
                <div className="w-[96px]">完了！</div>
              </PopButton>
            </div>
          </div>
        </>
      </GameFrame>
    </MainLayout>
  );
};
