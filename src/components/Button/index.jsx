import React from "react";
import "./index.css";

const Button = ({
  type = "button",
  onClick,
  disabled = false,
  size = "md",
  variant = "primary",
  children,
}) => {
  return (
    <button
      type={type}
      className={`myButton myButton--${size} myButton--${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
