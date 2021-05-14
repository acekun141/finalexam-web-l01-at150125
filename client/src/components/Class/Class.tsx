import React from "react";

const url = "https://i.pinimg.com/originals/8a/d1/9b/8ad19bd47e7e448f87d8b6e7a2702453.png";

const Class = () => {
  return (
    <div className="class">
      <div className="class__name">Tieng Anh Lop 3</div>
      <div className="class__detail">
        <p>32 Hoc sinh</p>
      </div>
      <div className="class__teacher">
        <div className="class__avatar">
          <img alt="avatar" src={url} />
        </div>
        <div className="class__teacher-detail">
          <p className="class__teacher-name">Nguyen Thanh Tung</p>
          <div className="class__teacher-role">Giao vien</div>
        </div>
      </div>
    </div>
  )
}

export default Class;