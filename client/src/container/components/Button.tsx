import React from "react";
import { BiLoaderAlt } from "react-icons/bi"

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  disabled?: boolean;
  loading?: boolean;
  size?: "sm" | "lg"
  color?: "danger" | "success" | "warning";
}

export const Button: React.FC<ButtonProps> = ({ children, loading, className="", color="", size="", disabled=false, ...rest }) => {
  return (
    <button disabled={disabled || loading} {...rest} className={`${className} ${color} ${size} btn`}>
      {children}
      {loading &&  <div className="icon-wrapper"><BiLoaderAlt /></div>}
    </button>
  );
}