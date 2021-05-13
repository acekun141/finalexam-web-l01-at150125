import React, { useEffect, useState } from "react";

interface IProps extends React.ComponentPropsWithoutRef<"input"> {
  option: { text: string, value: any, checked?: boolean }[];
  label: string;
  value?: string;
  getValue?: (value: string) => any;
}

export const Select: React.FC<IProps> = ({ label, option, value="", getValue, ...rest }) => {

  return (
    <div className="custom-select">
      <select id={label}>
        {option.map(item => (
          <option key={item.value} value={item.value}>{item.text}</option>
        ))}
      </select>
      <label htmlFor={label}>{label}</label>
    </div>
  );
}