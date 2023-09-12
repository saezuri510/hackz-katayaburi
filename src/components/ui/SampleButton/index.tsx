import { ComponentProps, forwardRef } from "react";
import { tv } from "tailwind-variants";

export const SampleButton = forwardRef<HTMLButtonElement, ComponentProps<"button">>(
  ({ children, className, type = "button", ...rest }, forwardRef): JSX.Element => {
    return (
      <button
        ref={forwardRef}
        className={tv({
          base: "flex h-[32px] cursor-pointer items-center justify-center rounded border bg-white font-medium",
        })({ className: className })}
        type={type}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

SampleButton.displayName = "Button";
