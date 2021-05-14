import React from "react";
import { BiPaperPlane, BiPhone, BiUser } from "react-icons/bi";
import { Button } from "../../container/components";
import "./account-info.scss";

const AccountInfo = () => {
  return (
    <div className="account-info">
      <div className="account-info__avatar">
        <img alt="avatar" src={"https://i.pinimg.com/originals/8a/d1/9b/8ad19bd47e7e448f87d8b6e7a2702453.png"} />
      </div>
      <div className="account-info__contact">
        <div className="account-info__name">Nguyen Thanh Tung</div>
        <div className="account-info__role">
          <BiUser size="18px" />
          <p>Giao vien</p>
        </div>
        <div className="account-info__phone">
          <BiPhone size="18px" />
          <p>0923456789</p>
        </div>
        <div className="account-info__contact-detail">
          <Button size="sm">Nhan tin</Button>
        </div>
      </div>
    </div>
  )
}

export default AccountInfo;