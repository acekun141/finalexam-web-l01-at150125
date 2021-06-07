import React from "react";
import TabHeader from "./components/TabHeader";
import "./tab-container.scss";

interface IProps {
  handleSelectTab: (tabId: string) => any;
  children: React.ReactNode;
  tabList: { name: string, id: string }[];
  tabSelected: string;
}

const TabContainer: React.FC<IProps> = ({ children, tabList, tabSelected, handleSelectTab }) => {
  return (
    <div className="tab-container">
      <TabHeader handleSelectTab={handleSelectTab} tabList={tabList} tabSelected={tabSelected} />
      <div className="tab-container__content">
        {children}
      </div>
    </div>
  );
}

export default TabContainer;