import React from "react";

interface IProps {
  icon: React.ElementType;
  name: string;
  action: any;
  isActive?: boolean;
}

const SidebarRow: React.FC<IProps> = ({ icon: Icon, name, action, isActive=false }) => {
  return (
    <button className={`sidebar__row ${isActive ? "active" : ""}`} onClick={action}>
      <div className="sidebar__icon">
        <Icon size="26px" />
      </div>
      <div className="sidebar__row-name">{name}</div>
    </button>
  );
}

export default SidebarRow;