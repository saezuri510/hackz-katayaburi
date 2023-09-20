import { Player } from "./Player";

export type RoomRecoilProps = {
  passphrase: string;
  members: Player[];
  gameStarted: boolean;
};
