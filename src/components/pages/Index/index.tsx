import clsx from "clsx";
import { NextPage } from "next";
import { SubmitHandler, useForm } from "react-hook-form";

import { BaseButton } from "@/components/ui/BaseButton";
import { Input } from "@/features/index/components/Input";

type Inputs = {
  nickname: string;
  password: string;
};

export const IndexPage: NextPage = () => {
  const {
    formState: { isValid },
    handleSubmit,
    register,
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-sky-600 to-purple-400 p-[32px]">
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[6px] border-[2px] border-zinc-900/[.15] p-[4px] shadow-[inset_0_1px_0_0,0_2px_0_0] shadow-white/[.15]">
        <div className="flex items-center justify-center text-[20px] text-red-500">
          Programming Phone
        </div>
        <div className="mt-[24px] flex flex-col items-center justify-center space-y-[12px] rounded-[5px] bg-fuchsia-925/[.25] p-[16px]">
          <div className="flex items-center justify-center text-white">
            ニックネームと合言葉を決める
          </div>
          <form
            className="flex flex-col items-center justify-center space-y-[4px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              placeholder="ニックネームを入力"
              {...register("nickname", {
                required: true,
              })}
            />
            <Input
              placeholder="合言葉を入力"
              {...register("password", {
                required: true,
              })}
            />
            <div className="flex space-x-[16px]">
              <BaseButton
                className="rounded-[4px] bg-white px-[10px] text-violet-950 shadow-[0_3px_0_0] shadow-violet-950 hover:bg-purple-300"
                onClick={() => reset()}
                type="button"
              >
                リセット
              </BaseButton>
              <BaseButton
                className={clsx(
                  "rounded-[4px] bg-white px-[10px] text-violet-950 shadow-[0_3px_0_0] shadow-violet-950 hover:bg-purple-300",
                  {
                    "cursor-no-drop bg-gray-400 hover:bg-gray-400": !isValid,
                  },
                )}
                type="submit"
              >
                開始
              </BaseButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
