import React from "react";
import BaseLayout from "../components/BaseLayout";
import { CardInfo } from "../container/components";
import { BiUser } from "react-icons/bi"

const AdminDashboard = () => {
  console.log('render');
  return (
    <BaseLayout>
      <div className="page">
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