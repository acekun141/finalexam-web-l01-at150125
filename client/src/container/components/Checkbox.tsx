import React from "react";

interface IProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
}

export const Checkbox: React.FC<IProps> = ({ label, ...rest }) => {
  return (
    <div className="custom-checkbox">
      <input id={label} type="checkbox" {...rest} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}