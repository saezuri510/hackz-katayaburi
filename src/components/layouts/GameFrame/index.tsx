import { ReactElement } from "react";

type Props = {
  children: ReactElement;
};

export const GameFrame = ({ children }: Props) => {
  return (
    <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[6px] border-[2px] border-zinc-900/[.15] px-[15px] py-[10px] shadow-[inset_0_1px_0_0,0_2px_0_0] shadow-white/[.15]">
      {children}
    </div>
  );
};
