import { NextPage } from "next";
// import { useForm } from "react-hook-form";

// type Inputs = {
//   nickname: string;
//   password: string;
// };

const IndexPage: NextPage = () => {
  // const {register, handleSubmit, reset} = useForm<Inputs>

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
          <form className="flex flex-col items-center justify-center space-y-[4px]">
            <input
              className="cursor-pointer rounded-[3px] border-[1px] border-white/[.7] bg-white/[.3] px-[4px] text-white/[.8] placeholder-white/[.8] outline-none focus:border-white focus:bg-white/[.1] focus:text-white"
              placeholder="ニックネームを入力"
              type="text"
            />
            <input placeholder="合言葉を入力" type="text" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
