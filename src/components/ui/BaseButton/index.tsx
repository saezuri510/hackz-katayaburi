import { ComponentProps, forwardRef } from "react";
import { tv } from "tailwind-variants";

export const BaseButton = forwardRef<HTMLButtonElement, ComponentProps<"button">>(
  ({ children, className, type = "button", ...rest }, forwardRef): JSX.Element => {
    return (
      <button
        ref={forwardRef}
        className={tv({
          base: "flex cursor-pointer items-center justify-center",
        })({ className: className })}
        type={type}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

BaseButton.displayName = "BaseButton";
