import React, { useEffect, useState } from "react";

import CircularProgress from "@/components/icons/Timer";
import { GameFrame } from "@/components/layouts/GameFrame";
import { MainLayout } from "@/components/layouts/MainLayout";
import NumberPeople from "@/components/ui/NumberPeople";

export function AnswerPage() {
  const [count, SetCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      SetCount((prev) => {
        if (prev <= 60) {
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
        <div>
          <div className="m-5 flex justify-between">
            <NumberPeople />
            <CircularProgress count={count} />
          </div>
          <div className="m-5 flex h-2/3 flex-col items-center">
            <div className="text-center font-mono text-2xl">お題</div>
            <textarea className="m-5 h-full w-full rounded-md outline-none" />
            <button className="ms-1 h-20 w-32 rounded-md border-2 bg-white drop-shadow-lg">
              完了！
            </button>
          </div>
        </div>
      </GameFrame>
    </MainLayout>
  );
}

export default AnswerPage;
