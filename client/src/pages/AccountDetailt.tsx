import React from "react";
import AccountInfo from "../components/AccountInfo";
import BaseLayout from "../components/BaseLayout";

const AccountDetail = () => {
  return (
    <BaseLayout>
      <div className="page account-detail-page">
        <div className="page__content">
          <AccountInfo />
        </div>
      </div>
    </BaseLayout>
  )
}

export default AccountDetail;