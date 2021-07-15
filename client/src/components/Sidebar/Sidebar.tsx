import React, { useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
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
import { useSelector } from "react-redux";

import { convertRole } from "../../container/constants";
import SidebarRow from "./components/SidebarRow";
import { IUserInfo } from "../../utils/user/userInterface";
import { useMemo } from "react";

const Sidebar = () => {
  const history = useHistory();
  const location = useLocation();
  const user: IUserInfo = useSelector((state: any) => state.user);

  const rowAction = (url: string) => {
    history.push(url);
  };

  const handleLogout = useCallback(() => {
    localStorage.clear();
    window.location.reload();
  }, []);

  const userShortName = useMemo(() => {
    if (user.first_name && user.last_name) {
      return user.first_name[0] + user.last_name[0];
    }
    return "";
  }, [user.first_name, user.last_name]);

  return (
    <div className="sidebar">
      <button className="sidebar__account">
        {user.avatar ? 
        <img
          alt="avatar"
          src={user.avatar}
        />
        : (
          <div className="user-short-name">{userShortName}</div>
        )}
        <div className="detail">
          <p className="name">{`${user.first_name} ${user.last_name}`}</p>
          <p className="role">{convertRole[user.role]}</p>
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
          action={handleLogout}
        />
      </div>
    </div>
  );
};

export default Sidebar;
