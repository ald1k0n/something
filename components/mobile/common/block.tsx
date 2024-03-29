"use client";
import { FC } from "react";

interface IProps {
  number: string;
  owned: boolean;
}

export const Block: FC<IProps> = ({ number, owned = false }) => {
  return (
    <div
      className={`flex h-9 w-9 items-center justify-center rounded-md  ${owned ? "bg-red-400" : "bg-[#D9D9D9]"}`}
    >
      {number}
    </div>
  );
};
