import React from "react";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, loading, className, ...rest }) => {
  return (
    <button {...rest} className={`${className} btn`}>
      {children}
      {loading ? <p>Loading</p> : null}
    </button>
  );
}