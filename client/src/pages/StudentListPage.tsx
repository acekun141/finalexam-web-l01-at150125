import React from "react";
import BaseLayout from "../components/BaseLayout";
import ListAccount from "../components/ListAccount";

const StudentListPage = () => {
  return (
    <BaseLayout>
      <div className="page list-account-page">
        <p className="page__title">Danh sách học sinh</p>
        <div className="page__content">
          <div className="card">
            <ListAccount type="student" />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default StudentListPage;