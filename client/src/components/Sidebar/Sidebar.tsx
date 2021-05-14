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
          src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/174420944_1459448700892553_2602018160453476742_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=SKxgHPk6VAEAX90aTuJ&_nc_ht=scontent-hkg4-1.xx&oh=3f854f300bafd5aa54c6cbf65206916a&oe=60C052AF"
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
        isActive={location.pathname.startsWith("/accounts")}
        icon={BiUser}
        name="Tài khoản"
        action={() => rowAction("/accounts")}
      />
      <SidebarRow
        isActive={location.pathname.startsWith("/teachers")}
        icon={BiUserCircle}
        name="Giáo viên"
        action={() => rowAction("/teachers")}
      />
      <SidebarRow
        isActive={location.pathname.startsWith("/students")}
        icon={BiFace}
        name="Học sinh"
        action={() => rowAction("/students")}
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
