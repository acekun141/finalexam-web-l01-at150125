import React, { useEffect, useRef } from "react";

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  color?: "danger" | "success" | "warning";
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, color="", className="", ...rest }) => {
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const inputTarget = input.current;
    const handleInputChange = () => {
      if (inputTarget) {
        if (inputTarget.value) {
          inputTarget.classList.add("active");
        } else {
          inputTarget.classList.remove("active");
        }
      }
    }
    if (inputTarget) {
      inputTarget.addEventListener("input", handleInputChange)
    }
    return () => {
      if (inputTarget) {
        inputTarget.removeEventListener("input", handleInputChange);
      }
    }
  }, []);

  return (
    <div className="custom-input">
      <input ref={input} id={label} {...rest} className={`${className} ${color}`} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}