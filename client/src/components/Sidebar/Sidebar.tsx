import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import SidebarRow from "./components/SidebarRow";
import {
  BiGridAlt,
  BiUser,
  BiUserCircle,
  BiBook,
  BiDollarCircle,
  BiHelpCircle,
  BiLogInCircle,
  BiFace,
  BiMessageSquareDetail,
  BiCalendarStar,
} from "react-icons/bi";

const Sidebar = () => {
  const history = useHistory();
  const location = useLocation();

  const rowAction = (url: string) => {
    history.push(url);
  };

  return (
    <div className="sidebar">
      <button className="sidebar__account">
        <img
          alt="avatar"
          src="https://i.pinimg.com/originals/5d/16/97/5d1697f5aa5c3adcd8b0ba94d8f8d030.jpg"
        />
        <div className="detail">
          <p className="name">Lê Viết Hưng</p>
          <p className="role">Quản trị viên</p>
        </div>
      </button>
      <SidebarRow
        isActive={location.pathname === "/"}
        icon={BiGridAlt}
        name="Trang chủ"
        action={() => rowAction("/")}
      />
      <SidebarRow
        isActive={location.pathname.startsWith("/schedule")}
        icon={BiCalendarStar}
        name="Lịch học"
        action={() => rowAction("/schedule")}
      />
      <SidebarRow
        isActive={location.pathname.startsWith("/message")}
        icon={BiMessageSquareDetail}
        name="Tin nhắn"
        action={() => rowAction("/message")}
      />
      <SidebarRow
        isActive={location.pathname.startsWith("/account-list")}
        icon={BiUser}
        name="Tài khoản"
        action={() => rowAction("/account-list")}
      />
      <SidebarRow
        isActive={location.pathname.startsWith("/teacher-list")}
        icon={BiUserCircle}
        name="Giáo viên"
        action={() => rowAction("/teacher-list")}
      />
      <SidebarRow
        isActive={location.pathname.startsWith("/student-list")}
        icon={BiFace}
        name="Học sinh"
        action={() => rowAction("/student-list")}
      />
      <SidebarRow
        isActive={location.pathname.startsWith("/classes")}
        icon={BiBook}
        name="Lớp"
        action={() => rowAction("/classes")}
      />
      <SidebarRow
        isActive={location.pathname.startsWith("/payment")}
        icon={BiDollarCircle}
        name="Thanh toán"
        action={() => rowAction("/payment")}
      />
      <div className="sidebar__bottom">
        <SidebarRow
          isActive={location.pathname.startsWith("/help")}
          icon={BiHelpCircle}
          name="Trợ giúp"
          action={() => rowAction("/help")}
        />
        <SidebarRow
          icon={BiLogInCircle}
          name="Đăng xuất"
          action={() => rowAction("/logout")}
        />
      </div>
    </div>
  );
};

export default Sidebar;
