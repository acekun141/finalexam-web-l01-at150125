import React from "react";
import Sidebar from "../Sidebar";

interface IProps {
  children: JSX.Element;
}

const BaseLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="base-layout">
      <div className="base-layout__left-side">
        <Sidebar />
      </div>
      <div className="base-layout__content">{children}</div>
    </div>
  );
}

export default BaseLayout;