import { NextPage } from "next";
import Image from "next/image";

import { FrameText } from "@/components/icons/FrameText";
import { GameFrame } from "@/components/layouts/GameFrame";
import { MainLayout } from "@/components/layouts/MainLayout";
import NumberPeople from "@/components/layouts/NumberPeople";
import { Timer } from "@/components/layouts/Timer";
import { PopButton } from "@/components/ui/domain/PopButton";
import { PopInput } from "@/components/ui/domain/PopInput";

export const ThemePage: NextPage = () => {
  return (
    <MainLayout>
      <GameFrame>
        <>
          <div className="flex w-[768px] justify-between">
            <NumberPeople />
            <Timer />
          </div>
          <div className="flex flex-col items-center justify-center space-y-[16px] pb-[64px]">
            <Image alt="image" height={136} src="/image/clock.png" width={136} />
            <FrameText text="動的型付け言語といえば？" />
            <div className="flex justify-center">
              <PopInput
                className="h-[40px] w-[400px]"
                placeholder="ビーチでくつろぐハリーポッター"
                type="text"
              />
              <PopButton className="ml-[8px] w-32 drop-shadow-lg">完了！</PopButton>
            </div>
          </div>
        </>
      </GameFrame>
    </MainLayout>
  );
};
