import clsx from "clsx";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BsPlayFill } from "react-icons/bs";

import ProgrammingPhone from "@/components/icons/ProgrammingPhone";
import { GameFrame } from "@/components/layouts/GameFrame";
import { MainLayout } from "@/components/layouts/MainLayout";
import { PopButton } from "@/components/ui/domain/PopButton";
import { PopInput } from "@/components/ui/domain/PopInput";
import Slideshow from "@/components/ui/domain/SlideShow";
import { Player } from "@/libs/recoil/types/Player";
import { useRoomState } from "@/libs/recoil/useRoomState";
import { socket } from "@/libs/socket";

type Inputs = {
  nickname: string;
  passphrase: string;
};

export const IndexPage: NextPage = () => {
  const { addMember, setRoomValue } = useRoomState();

  const router = useRouter();

  useEffect(() => {
    const onRoomMembers = (members: Player[]) => {
      addMember(members);
      router.push("/member");
    };

    socket.on("roomMembers", onRoomMembers);

    return () => {
      socket.off("roomMembers", onRoomMembers);
    };
  }, [addMember, router]);

  const {
    formState: { isValid },
    handleSubmit,
    register,
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    socket.emit("joinOrCreateRoom", data.passphrase, data.nickname);
    setRoomValue((prev) => ({
      ...prev,
      passphrase: data.passphrase,
    }));
    reset();
  };

  return (
    <MainLayout>
      <GameFrame>
        <div className="flex flex-col items-center">
          <ProgrammingPhone />
          <div className="flex justify-center">
            <div className="mt-[24px] flex flex-col items-center justify-center space-y-[12px] rounded-[5px] bg-fuchsia-925/[.25] p-[16px]">
              <div className="flex items-center justify-center text-white">
                ニックネームと合言葉を決める
              </div>
              <form
                className="flex flex-col items-center justify-center space-y-[16px]"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-col items-center justify-center space-y-[4px]">
                  <PopInput
                    placeholder="ニックネームを入力"
                    {...register("nickname", {
                      required: true,
                    })}
                  />
                  <PopInput
                    placeholder="合言葉を入力"
                    {...register("passphrase", {
                      required: true,
                    })}
                  />
                </div>
                <div className="flex space-x-[16px]">
                  <PopButton onClick={() => reset()} type="button">
                    リセット
                  </PopButton>
                  <PopButton
                    className={clsx({
                      "cursor-no-drop bg-gray-400 hover:bg-gray-400": !isValid,
                    })}
                    type="submit"
                  >
                    <BsPlayFill />
                    <div className="flex w-[60px] items-center justify-center">開始</div>
                  </PopButton>
                </div>
              </form>
            </div>
            <div className="ml-5 mt-[24px] flex h-[200px] w-[400px] items-center rounded-[6px] border-[2px] border-zinc-900/[.15] px-[15px] py-[10px] shadow-[inset_0_1px_0_0,0_2px_0_0] shadow-white/[.15]">
              <Slideshow />
            </div>
          </div>
        </div>
      </GameFrame>
    </MainLayout>
  );
};
