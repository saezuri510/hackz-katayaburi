import clsx from "clsx";
import { NextPage } from "next";
import { SubmitHandler, useForm } from "react-hook-form";
import { BsPlayFill } from "react-icons/bs";

import { Button } from "@/features/index/components/Button";
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
            className="flex flex-col items-center justify-center space-y-[16px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col items-center justify-center space-y-[4px]">
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
            </div>
            <div className="flex space-x-[16px]">
              <Button onClick={() => reset()} type="button">
                リセット
              </Button>
              <Button
                className={clsx({
                  "cursor-no-drop bg-gray-400 hover:bg-gray-400": !isValid,
                })}
                type="submit"
              >
                <BsPlayFill />
                <div className="flex w-[60px] items-center justify-center">開始</div>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
