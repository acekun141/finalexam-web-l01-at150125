import React from "react";
import { BiLoaderAlt } from "react-icons/bi";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  disabled?: boolean;
  loading?: boolean;
  size?: "sm" | "lg";
  color?: "danger" | "success" | "warning";
  outline?: boolean;
  icon?: React.ElementType;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  className = "",
  color = "",
  size = "",
  icon: Icon,
  outline = false,
  disabled = false,
  ...rest
}) => {
  return (
    <button
      disabled={disabled || loading}
      {...rest}
      className={`${className} ${color} ${size} ${
        outline ? "outline" : ""
      } btn`}
    >
      {Icon && (
        <div className="icon">
          <Icon size="18px" />
        </div>
      )}
      {children}
      {loading && (
        <div className="icon-wrapper">
          <BiLoaderAlt />
        </div>
      )}
    </button>
  );
};
