"use client";

import { ReactNode, FC, ButtonHTMLAttributes } from "react";

type IProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<IProps> = ({ children, ...props }) => {
  return (
    <button
      className="rounded-3xl bg-primary px-2 py-2.5 text-white disabled:bg-gray-400"
      {...props}
    >
      {children}
    </button>
  );
};
