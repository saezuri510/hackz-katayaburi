import Image from "next/image";

import { CircularProgress } from "@/components/icons/CircularProgress";

export const Timer = () => {
  return (
    <div className="relative h-[150px] w-[150px]">
      <CircularProgress />
      <Image
        alt="lap-timer-frame"
        className="absolute"
        height={150}
        src="/svgs/lap-timer-frame.svg"
        width={150}
      />
    </div>
  );
};
