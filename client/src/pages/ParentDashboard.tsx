import React from "react";
import BaseLayout from "../components/BaseLayout";
import { useSelector } from "react-redux";
import ListChildren from "../components/ListChildren";

const ParentDashboard = () => {
  const user = useSelector((state: any) => state.user);
  return (
    <BaseLayout>
      <div className="page">
        {/* <p className="page__title">Trang chủ</p> */}
        <div className="page__content">
					<ListChildren />
        </div>
      </div>
    </BaseLayout>
  )
}

export default ParentDashboard;