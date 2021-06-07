import React, { useState } from "react";
import { Button, Select } from "../../container/components";
import { ROLE } from "../../container/constants";
import UserCard from "../UserCard";
import ModalConfirm from "../ModalConfirm";
import "./list-account.scss";

interface IProps {
  type?: "teacher" | "student";
}

const ListAccount: React.FC<IProps> = ({ type }) => {
  const [showConfirmDelete, setShowConfirmDelete] = useState({ userId: "", name: "" });

  const handleDelete = (userId: string, name: string) => {
    setShowConfirmDelete({ userId, name });
  };

  const closeConfirmDelete = () => {
    setShowConfirmDelete({ userId: "", name: "" });
  }

  console.log(type);

  return (
    <div className="list-account">
      <ModalConfirm
        content={`Bạn có muốn xóa tài khoản ${showConfirmDelete.name}`}
        isOpen={!!showConfirmDelete.userId}
        action={closeConfirmDelete}
        closeModal={closeConfirmDelete}
      />
      <div className="list-account__filter">
        <input placeholder="Tìm kiếm" className="input" />
        <Select
          hidden={!!type}
          onChange={(value) => console.log(value)}
          label="Chức vụ"
          option={ROLE}
        />
        <Button size="sm">Tìm kiếm</Button>
      </div>
      <div className="list-account__content">
        <UserCard deleteAccount={handleDelete} />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}

export default ListAccount;