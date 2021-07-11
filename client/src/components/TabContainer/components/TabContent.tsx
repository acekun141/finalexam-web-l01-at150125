import React from "react";

interface IProps {
  children: React.ReactNode;
  tabId: string;
  tabSelected: string;
}

export const TabContent: React.FC<IProps> = ({ children, tabId, tabSelected }) => {
  if (!(tabId === tabSelected)) return null;
  return (
    <div className="tab-content">
      {children}
    </div>
  );
}