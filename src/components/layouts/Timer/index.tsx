import Image from "next/image";

import CircularProgress from "@/components/icons/CircularProgress";

type Props = {
  count: number;
};

export const Timer = ({ count }: Props) => {
  return (
    <div className="relative h-[150px] w-[150px]">
      <CircularProgress count={count} />
      <Image
        alt="lap-timer"
        className="absolute"
        height={150}
        src="/svgs/lap-timer-frame.svg"
        width={150}
      />
    </div>
  );
};
