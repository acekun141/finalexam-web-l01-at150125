import React from "react";
import { useState } from "react";
import BaseLayout from "../components/BaseLayout";
import CreateUserForm from "../container/forms/CreateUser";
import ListAccount from "../components/ListAccount";
import Modal from "../container/components/Modal";
import { Button } from "../container/components";
import { useCallback } from "react";
import { useRef } from "react";

const ListAccountPage = () => {
  const [showCreateUserModal, setShowCreateUserModal] = useState(false);
  const inputFile = useRef<HTMLInputElement>(null);

  const closeCreateUser = useCallback(() => {
    setShowCreateUserModal(false);
  }, []);
  const openCreateUser = useCallback(() => {
    setShowCreateUserModal(true);
  }, []);
  const handleUploadFile = useCallback(() => {
    if (inputFile.current) {
      inputFile.current.click();
    }
  }, [inputFile]);

  return (
    <BaseLayout>
      <div className="page list-account-page">
        <Modal isOpen={showCreateUserModal} closeModal={closeCreateUser} title="Create User" >
          <CreateUserForm />
        </Modal>
        <p className="page__title">Danh sách tài khoản</p>
        <div className="card d-flex" style={{ marginBottom: 15 }}>
          <Button onClick={openCreateUser} style={{ marginRight: 15 }}>Create User</Button>
          <Button outline={true} onClick={handleUploadFile}>Import CSV</Button>
          <input ref={inputFile} style={{ display: "none" }} type="file" />
        </div>
        <div className="page__content">
          <div className="card">
            <ListAccount />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default ListAccountPage;