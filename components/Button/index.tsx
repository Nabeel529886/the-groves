import React from "react";
import RightArrow from "../Icons/RightArrow";
import "./styles.css";

interface ButtonProps {
  children: React.ReactNode;
  icon?: boolean;
  className?: string;
}

const Button = ({ children, icon = false, className }: ButtonProps) => {
  return (
    <button
      className={`button__root ${icon && "button__with_icon"} ${className}`}
    >
      {children}
      {icon && <RightArrow />}
    </button>
  );
};

export default Button;
