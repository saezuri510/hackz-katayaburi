import { ComponentProps, forwardRef } from "react";

import { cn } from "@/utils/cn";

export const PopButton = forwardRef<HTMLButtonElement, ComponentProps<"button">>(
  ({ children, className, type = "button", ...rest }, forwardRef): JSX.Element => {
    return (
      <button
        ref={forwardRef}
        className={cn(
          "flex cursor-pointer items-center justify-center rounded-[4px] bg-white px-[10px] py-[2px] font-mono text-[16px] text-violet-950 shadow-[0_3px_0_0] shadow-violet-950 hover:bg-purple-300",
          className,
        )}
        type={type}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

PopButton.displayName = "PopButton";
