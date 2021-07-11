import React from "react";
import { useSelector } from "react-redux";
import { BiUser } from "react-icons/bi"

import BaseLayout from "../components/BaseLayout";
import { CardInfo } from "../container/components";
import Modal from "../container/components/Modal";
import UserInfoForm from "../container/forms/UserInfo";

const AdminDashboard = () => {
  const user = useSelector((state: any) => state.user);
  return (
    <BaseLayout>
      <div className="page">
        <Modal isOpen={!user.first_name} title="User Info" closeModal={() => {}}>
          <UserInfoForm />
        </Modal>
        <p className="page__title">Trang chủ</p>
        <div className="page__content">
          <div className="dashboard-card-info">
            <CardInfo name="Tai khoan" number={430} icon={BiUser} />
            <CardInfo name="Giao vien" number={200} icon={BiUser} />
            <CardInfo name="Hoc Sinh" number={230} icon={BiUser} />
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

export default AdminDashboard;