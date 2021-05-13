import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import SidebarRow from "./components/SidebarRow";
import {
  BiGridAlt, BiUser, BiUserCircle,
  BiBook, BiDollarCircle, BiHelpCircle,
  BiLogInCircle, BiFace, BiMessageSquareDetail
} from "react-icons/bi";

const Sidebar = () => {
  const history = useHistory();

  const rowAction = useCallback((url) => {
    return () => history.push(url);
  }, [history]);

  return (
    <div className="sidebar">
      <button className="sidebar__account">
        <img alt="avatar" src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/174420944_1459448700892553_2602018160453476742_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=SKxgHPk6VAEAX90aTuJ&_nc_ht=scontent-hkg4-1.xx&oh=3f854f300bafd5aa54c6cbf65206916a&oe=60C052AF" />
        <div className="detail">
          <p className="name">Lê Viết Hưng</p>
          <p className="role">Quản trị viên</p>
        </div>
      </button>
      <SidebarRow
        isActive={true}
        icon={BiGridAlt}
        name="Trang chủ"
        action={rowAction("/dashboard")}
      />
      <SidebarRow
        icon={BiMessageSquareDetail}
        name="Tin nhắn"
        action={rowAction("/message")}
      />
      <SidebarRow icon={BiUser} name="Tài khoản" action={rowAction("/users")} />
      <SidebarRow
        icon={BiUserCircle}
        name="Giáo viên"
        action={rowAction("/teacher")}
      />
      <SidebarRow
        icon={BiFace}
        name="Học sinh"
        action={rowAction("/student")}
      />
      <SidebarRow icon={BiBook} name="Lớp" action={rowAction("/class")} />
      <SidebarRow
        icon={BiDollarCircle}
        name="Thanh toán"
        action={rowAction("/payment")}
      />
      <div className="sidebar__bottom">
        <SidebarRow
          icon={BiHelpCircle}
          name="Trợ giúp"
          action={rowAction("/help")}
        />
        <SidebarRow
          icon={BiLogInCircle}
          name="Đăng xuất"
          action={rowAction("/logout")}
        />
      </div>
    </div>
  );
}

export default Sidebar;