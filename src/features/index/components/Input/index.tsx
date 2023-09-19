import { ComponentProps, forwardRef } from "react";

import { cn } from "@/utils/cn";

type Props = {
  placeholder: string;
} & Omit<ComponentProps<"input">, "placeholder">;

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, placeholder, type = "text", ...rest }, forwardRef): JSX.Element => {
    return (
      <input
        ref={forwardRef}
        className={cn(
          "cursor-text rounded-[3px] border-[1px] border-white/[.7] bg-white/[.3] px-[4px] text-[20px] text-white/[.8] placeholder-white/[.8] outline-none focus:border-white focus:bg-white/[.1] focus:text-white",
          className,
        )}
        placeholder={placeholder}
        type={type}
        {...rest}
      />
    );
  },
);

Input.displayName = "IndexInput";
