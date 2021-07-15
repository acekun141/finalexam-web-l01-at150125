import React from "react";
import { BiX } from "react-icons/bi";
import { Button } from "./Button";

interface IProps extends React.ComponentPropsWithoutRef<"div"> {
  isOpen: boolean;
  title: string;
  children: JSX.Element | JSX.Element[];
  closeModal: () => any;
	actionName?: string;
	action: () => any;
}

const ConfirmModal: React.FC<IProps> = ({ isOpen, action, actionName, closeModal, title, children, className="", ...rest }) => {
  return (
    <div className={`modal confirm-modal ${className} ${isOpen ? "active" : ""}`} {...rest}>
      <div className="modal-wrapper" />
      <div className="modal-content">
        <button onClick={closeModal} className="modal__close">
          <BiX size="32px" />
        </button>
        <p className="modal__title">{title}</p>
        {children}
				<div className="confirm-modal__button">
					<Button onClick={closeModal} outline={true}>Cancel</Button>
					<Button onClick={action} color="danger">{ actionName || "Sure" }</Button>
				</div>
      </div>
    </div>
  );
}

export default ConfirmModal;