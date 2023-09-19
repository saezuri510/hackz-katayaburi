import { NextPage } from "next";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { FrameText } from "@/components/icons/FrameText";
import CircularProgress from "@/components/icons/Timer";
import { GameFrame } from "@/components/layouts/GameFrame";
import { MainLayout } from "@/components/layouts/MainLayout";
import NumberPeople from "@/components/layouts/NumberPeople";
import { PopButton } from "@/components/ui/domain/PopButton";
import { PopInput } from "@/components/ui/domain/PopInput";

export const ThemePage: NextPage = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (count <= 60) {
          return prev + 1;
        }
        return prev;
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <MainLayout>
      <GameFrame>
        <>
          <div className="flex w-[768px] justify-between">
            <NumberPeople />
            <CircularProgress count={count} />
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
