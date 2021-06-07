import React from "react";

interface IProps {
  handleSelectTab: (tabId: string) => any;
  tabList: { name: string, id: string }[];
  tabSelected: string;
}

const TabHeader: React.FC<IProps> = ({ tabList, tabSelected, handleSelectTab }) => {
  return (
    <div className="tab-header">
      {tabList.map((item) => (
        <button
          onClick={() => handleSelectTab(item.id)}
          className={`tab-header__button ${
            item.id === tabSelected ? "active" : ""
          }`}
          key={item.id}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default TabHeader;