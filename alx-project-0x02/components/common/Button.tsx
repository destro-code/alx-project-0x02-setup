// components/Button.tsx
import React from "react";
// import { ButtonProps } from "../../interfaces";
import { type ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({
  children,
  shape = "rounded-md",
  size = "medium",
}) => {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button className={`green_btn ${sizeClasses[size]} ${shape} `}>
      {children}
    </button>
  );
};

export default Button;
