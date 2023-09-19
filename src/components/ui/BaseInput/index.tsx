import { ComponentProps, forwardRef } from "react";
import { tv } from "tailwind-variants";

export const BaseInput = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className, type = "text", ...rest }, forwardRef): JSX.Element => {
    return (
      <input
        ref={forwardRef}
        className={tv({
          base: "cursor-text px-[4px] outline-none",
        })({ className: className })}
        type={type}
        {...rest}
      />
    );
  },
);

BaseInput.displayName = "BaseInput";
