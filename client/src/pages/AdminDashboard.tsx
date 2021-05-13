import React from "react";
import BaseLayout from "../components/BaseLayout";

const AdminDashboard = () => {
  console.log('render');
  return (
    <BaseLayout>
      <div className="page">
        <p className="page__title">Trang chủ</p>
      </div>
    </BaseLayout>
  )
}

export default AdminDashboard;