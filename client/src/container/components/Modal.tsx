import React from "react";
import { BiX } from "react-icons/bi";

interface IProps extends React.ComponentPropsWithoutRef<"div"> {
  isOpen: boolean;
  title: string;
  children: JSX.Element | JSX.Element[];
  closeModal: () => any;
}

const Modal: React.FC<IProps> = ({ isOpen, closeModal, title, children, className="", ...rest }) => {
  return (
    <div className={`modal ${className} ${isOpen ? "active" : ""}`} {...rest}>
      <div className="modal-wrapper" />
      <div className="modal-content">
        <button onClick={closeModal} className="modal__close">
          <BiX size="32px" />
        </button>
        <p className="modal__title">{title}</p>
        {children}
      </div>
    </div>
  );
}

export default Modal;