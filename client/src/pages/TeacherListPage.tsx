import React from "react";
import BaseLayout from "../components/BaseLayout";
import ListAccount from "../components/ListAccount";

const TeacherListPage = () => {
  return (
    <BaseLayout>
      <div className="page list-account-page">
        <p className="page__title">Danh sách giáo viên</p>
        <div className="page__content">
          <div className="card">
            <ListAccount type="teacher" />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default TeacherListPage;