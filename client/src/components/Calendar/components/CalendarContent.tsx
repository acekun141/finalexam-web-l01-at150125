import React from "react";
import { BiCalendarAlt } from "react-icons/bi";

const CalendarContent = () => {
  return (
    <div className="calendar__content empty">
      <BiCalendarAlt size="32px" />
      <p>Không tìm thấy lịch</p>
    </div>
  );
}

export default CalendarContent;