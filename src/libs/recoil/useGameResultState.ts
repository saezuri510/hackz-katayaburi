import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";

import { Answer } from "./types/Answer";
import { GameResultRecoilProps } from "./types/GameResultRecoilProps";

const gameResultState = atom<GameResultRecoilProps>({
  default: {
    answers: [],
    theme: "",
  },
  key: "gameResultState",
});

export const useGameResultState = () => {
  const [gameResultValue, setGameResultValue] = useRecoilState(gameResultState);

  const addAnswer = useCallback(
    (newAnswers: Answer[]) => {
      setGameResultValue((prev) => ({
        ...prev,
        answers: [...prev.answers, ...newAnswers],
      }));
    },
    [setGameResultValue],
  );

  return {
    addAnswer,
    gameResultValue,
    setGameResultValue,
  } as const;
};
