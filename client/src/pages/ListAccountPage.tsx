import React from "react";
import BaseLayout from "../components/BaseLayout";
import ListAccount from "../components/ListAccount";

const ListAccountPage = () => {
  return (
    <BaseLayout>
      <div className="page list-account-page">
        <p className="page__title">Danh sách tài khoản</p>
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