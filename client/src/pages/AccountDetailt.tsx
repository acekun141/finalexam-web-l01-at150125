import React, { useCallback, useState } from "react";
import AccountInfo from "../components/AccountInfo";
import BaseLayout from "../components/BaseLayout";
import ListClass from "../components/ListClass";
import TabContainer, { TabContent } from "../components/TabContainer";

const fakeTabList = [
  { name: "Các lớp giảng dạy", id: "teacher_class" },
  { name: "Thông tin cá nhân", id: "info" }
];

const AccountDetail = () => {
  const [tabSelected, setTabSelected] = useState(fakeTabList[0].id);

  const handleSelectTab = useCallback((tabId: string) => {
    setTabSelected(tabId);
  }, []);

  return (
    <BaseLayout>
      <div className="page account-detail-page">
        <div className="page__content">
          <AccountInfo />
          <TabContainer handleSelectTab={handleSelectTab} tabList={[...fakeTabList]} tabSelected={tabSelected}>
            <TabContent tabId="teacher_class" tabSelected={tabSelected}>
              <ListClass haveFilter={false} />
            </TabContent>
            <TabContent tabId="info" tabSelected={tabSelected}>
              <div>Thong tin ca nhan</div>
            </TabContent>
          </TabContainer>
        </div>
      </div>
    </BaseLayout>
  )
}

export default AccountDetail;