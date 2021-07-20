import React from "react";
import { FormEvent } from "react";

interface IProps extends React.ComponentPropsWithoutRef<"input"> {
  option: { text: string, value: any, checked?: boolean }[];
  label: string;
  value?: any;
  onChange: (value: any) => any;
  hidden?: boolean;
  outline?: boolean;
	size?: "lg";
}

export const Select: React.FC<IProps> = ({ label, option, value, hidden, onChange, size, outline=false, ...rest }) => {

  const handleSelectChange = (event: FormEvent<HTMLSelectElement>) => {
    onChange(event.currentTarget.value);
  };

  if (hidden) return null;

  return (
    <div className={`custom-select ${outline ? "outline" : ""} ${size ? `custom-select--${size}` : "" }`}>
      <select {...rest} value={value} id={label} onChange={handleSelectChange}>
        {option.map(item => (
          <option key={item.value} value={item.value}>{item.text}</option>
        ))}
      </select>
      <label htmlFor={label}>{label}</label>
    </div>
  );
}
