import { ComponentProps, forwardRef } from "react";

import { cn } from "@/utils/cn";

export const BaseButton = forwardRef<HTMLButtonElement, ComponentProps<"button">>(
  ({ children, className, type = "button", ...rest }, forwardRef): JSX.Element => {
    return (
      <button
        ref={forwardRef}
        className={cn("flex cursor-pointer items-center justify-center", className)}
        type={type}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

BaseButton.displayName = "BaseButton";
