import React from "react";

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  color: "danger" | "success" | "warning";
}

export const Button: React.FC<InputProps> = ({ color, className, ...rest }) => {
  return (
    <input {...rest} className={`${className} ${color} btn`} />
  );
}