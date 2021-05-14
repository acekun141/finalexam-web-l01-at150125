import React from "react";
import BaseLayout from "../components/BaseLayout";
import ListClass from "../components/ListClass";

const ListAccountPage = () => {
  return (
    <BaseLayout>
      <div className="page list-account-page">
        <p className="page__title">Danh sách lớp</p>
        <div className="page__content">
          <ListClass />
        </div>
      </div>
    </BaseLayout>
  );
}

export default ListAccountPage;