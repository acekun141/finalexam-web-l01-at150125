import React, { useEffect, useState } from "react";
import { BiCalendarAlt } from "react-icons/bi";

interface IProps {
  month: number;
  year: number;
}

const initializeDate = [
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
];

const CalendarContent: React.FC<IProps> = ({ month, year }) => {
  const [dateTable, setDateTable] = useState([...initializeDate]);
  const activeDate = [23, 24, 2, 3];

  useEffect(() => {
    const newDate = initializeDate.map(item => item.slice());
    const date = new Date(year, month - 1);
    let weekNumber = 0;
    while (date.getMonth() === month - 1) {
      const col = date.getDay() - 1 < 0 ? 6 : date.getDay() - 1;
      if (date.getDay() === 0) {
        newDate[weekNumber][col] = date.getDate().toString();
        weekNumber += 1;
      } else {
        newDate[weekNumber][col] = date.getDate().toString();
      }
      date.setDate(date.getDate() + 1);
    }
    setDateTable(newDate);
  }, [month, year]);


  return (
    <div className="calendar__content">
      <div className="calendar__row calendar__row--days">
        <p className="calendar__day">Hai</p>
        <p className="calendar__day">Ba</p>
        <p className="calendar__day">Tư</p>
        <p className="calendar__day">Năm</p>
        <p className="calendar__day">Sáu</p>
        <p className="calendar__day">Bảy</p>
        <p className="calendar__day">{`C/N`}</p>
      </div>
      {dateTable.map((week, index) => (
        <div key={`${index}-${month}-${year}`} className="calendar__row">
          {week.map((date, index) => (
            <div
              key={`${index}-${month}-${date}`}
              className={`calendar__date ${
                activeDate.includes(date ? parseInt(date) : 0) ? "active" : ""
              }`}
            >
              <button>{date}</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const EmptyCalendar = () => {
  return (
    <React.Fragment>
      <BiCalendarAlt size="32px" />
      <p>Không tìm thấy lịch</p>
    </React.Fragment>
  );
};

export default CalendarContent;
