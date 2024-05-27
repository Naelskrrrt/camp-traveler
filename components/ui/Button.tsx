import Image from "next/image";
import { title } from "process";
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  leftIcon?: string;
  variant: string;
};

const Button = ({ type, title, leftIcon, variant }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant}`}
      type={type}
    >
      {leftIcon && <Image src={leftIcon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
