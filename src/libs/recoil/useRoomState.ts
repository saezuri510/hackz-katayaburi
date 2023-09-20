import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";

import { Player } from "./types/Player";
import { RoomRecoilProps } from "./types/RoomRecoilProps";

const roomState = atom<RoomRecoilProps>({
  default: {
    gameStarted: false,
    members: [],
    passphrase: "",
  },
  key: "roomState",
});

export const useRoomState = () => {
  const [roomValue, setRoomValue] = useRecoilState(roomState);

  const addMember = useCallback(
    (newMembers: Player[]) => {
      setRoomValue((prev) => ({
        ...prev,
        members: [...prev.members, ...newMembers],
      }));
    },
    [setRoomValue],
  );

  return {
    addMember,
    roomValue,
    setRoomValue,
  } as const;
};
