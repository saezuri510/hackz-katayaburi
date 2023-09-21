import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

import { FrameText } from "@/components/icons/FrameText";
import { GameFrame } from "@/components/layouts/GameFrame";
import { MainLayout } from "@/components/layouts/MainLayout";
import NumberPeople from "@/components/layouts/NumberPeople";
import { Timer } from "@/components/layouts/Timer";
import { PopButton } from "@/components/ui/domain/PopButton";
import { PopInput } from "@/components/ui/domain/PopInput";
import { socket } from "@/libs/socket";

// function play() {
//   const audio = new Audio("/sound/bell.mp3");
//   audio.play();
// }

export const ThemePage: NextPage = () => {
  const [question, setQuestion] = useState("");

  useEffect(() => {
    const onYourTurn = (msgToSend: string) => {
      setQuestion(msgToSend);
    };

    socket.on("yourTurn", onYourTurn);

    return () => {
      socket.off("yourTurn", onYourTurn);
    };
  }, []);

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCount((prev: number) => {
  //       if (count <= 1199) {
  //         const remainingTime = 1200 - prev;
  //         if (remainingTime <= 300) {
  //           play();
  //         }
  //         return prev + 1;
  //       }
  //       return prev;
  //     });
  //   }, 1);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [count]);

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
            <FrameText fillColor="#db2777" fontSize={34} text={question} />
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
