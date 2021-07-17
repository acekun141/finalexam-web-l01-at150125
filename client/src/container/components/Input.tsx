import React, { useEffect, useRef } from "react";

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  color?: "danger" | "success" | "warning";
  label: string;
  block?: boolean;
  inputSize?: "lg" | "";
}

export const Input: React.FC<InputProps> = ({ label, color="", className="", block=false, inputSize="", ...rest }) => {
  const input = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   const inputTarget = input.current;
  //   const handleInputChange = () => {
  //     if (inputTarget) {
  //       if (inputTarget.value) {
  //         inputTarget.classList.add("active");
  //       } else {
  //         inputTarget.classList.remove("active");
  //       }
  //     }
  //   }
  //   if (inputTarget) {
  //     inputTarget.addEventListener("input", handleInputChange)
  //   }
  //   return () => {
  //     if (inputTarget) {
  //       inputTarget.removeEventListener("input", handleInputChange);
  //     }
  //   }
  // }, []);

  useEffect(() => {
    const inputTarget = input.current;
    if (inputTarget) {
        if (rest.value) {
          inputTarget.classList.add("active");
        } else {
          inputTarget.classList.remove("active");
        }
    }
  }, [rest.value]);

  return (
    <div className={`custom-input ${inputSize} ${block ? "block" : ""}`}>
      <input ref={input} id={label} {...rest} className={`${className} ${color}`} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}