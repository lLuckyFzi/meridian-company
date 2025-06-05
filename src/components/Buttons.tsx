import { Button, ButtonProps } from "antd";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type PrimaryButtonProps = ButtonProps & {
  children: ReactNode;
};

type SecondaryButtonProps = ButtonProps & {
  children: ReactNode;
  className: string;
};

function PrimaryButton(props: PrimaryButtonProps) {
  const { children, className, ...otherProps } = props;

  return (
    <Button
      type="primary"
      className={twMerge(
        "!rounded-none !h-16 !bg-teal-accent !font-medium !text-[16px] !text-white relative overflow-hidden group hover:bg-transparent !p-0",
        className
      )}
      onClick={() => {}}
      {...otherProps}
    >
      <span className="relative z-10 px-6 h-full flex items-center justify-center duration-300 ease-in-out group-hover:text-gray-700">
        {children || "Button"}
      </span>
      <span
        className="absolute inset-0 bg-white transform translate-x-full
                   transition-transform duration-300 ease-in-out group-hover:-translate-x-0"
      />
    </Button>
  );
}

export function SecondaryButton(props: SecondaryButtonProps) {
  const { children, className, ...otherProps } = props;

  return (
    <Button
      type="text"
      className={twMerge("!px-5 !py-5 !flex !items-center", className)}
      iconPosition="end"
      {...otherProps}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;
