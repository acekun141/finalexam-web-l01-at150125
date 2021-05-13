import React from "react";
import { Button } from "../../container/components";
import Modal from "../../container/components/Modal";

interface IProps {
  isOpen: boolean;
  content: string;
  closeModal: () => any;
  action: () => any;
}

const ModalEditAccount: React.FC<IProps> = ({ closeModal, action, content="Ban co mua sua tai khoan", isOpen }) => {
  return (
    <Modal closeModal={closeModal} isOpen={isOpen} className="modal-confirm" title="Xác nhận">
      <p>{content}</p>
      <div className="modal__button-wrapper">
        <Button onClick={closeModal} outline={true}>Hủy bỏ</Button>
        <Button onClick={action}>Tiếp tục</Button>
      </div>
    </Modal>
  );
}

export default ModalEditAccount;