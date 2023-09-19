import { NextPage } from "next";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import CircularProgress from "@/components/icons/Timer";
import NumberPeople from "@/components/ui/NumberPeople";
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
    <div className="flex h-screen w-screen justify-center bg-gradient-to-b from-sky-600 to-purple-400">
      <div className="m-auto h-5/6 w-5/6 p-5 shadow-inner shadow-black">
        <div className="flex justify-between">
          <NumberPeople />
          <CircularProgress count={count} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            alt="image"
            className="m-auto my-6"
            height={200}
            src="/image/clock.png"
            width={200}
          />
          <div className="flex justify-center">
            <PopInput
              className="h-[40px] w-[400px]"
              placeholder="ビーチでくつろぐハリーポッター"
              type="text"
            />
            <PopButton className="ml-[8px] w-32 drop-shadow-lg">完了！</PopButton>
          </div>
        </div>
      </div>
    </div>
  );
};
