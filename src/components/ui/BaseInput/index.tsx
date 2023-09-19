import { ComponentProps, forwardRef } from "react";

import { cn } from "@/utils/cn";

export const BaseInput = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className, type = "text", ...rest }, forwardRef): JSX.Element => {
    return (
      <input
        ref={forwardRef}
        className={cn("cursor-text px-[4px] outline-none", className)}
        type={type}
        {...rest}
      />
    );
  },
);

BaseInput.displayName = "BaseInput";
