import React from "react";
import { BiTime, BiCalendarAlt, BiBook } from "react-icons/bi";

const Lesson = () => {
  return (
    <div className="lesson">
      <div className="lesson__detail">
        <div className="lesson__name">
          <p>Buổi 1: Cách sử dụng máy tính để chia động từ</p>
        </div>
        <div className="lesson__class">
          <BiBook size="16px" />
          <p>Tiếng Anh L01</p>
        </div>
      </div>
      <div className="lesson__time">
        <div className="date">
          <BiCalendarAlt size="16px" />
          <p>13/5/2021</p>
        </div>
        <div className="time">
          <BiTime size="16px" />
          <p>7:00 - 9:30</p>
        </div>
      </div>
    </div>
  )
}

export default Lesson;