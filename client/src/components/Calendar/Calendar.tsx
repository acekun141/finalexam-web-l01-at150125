import React, { useCallback, useState } from "react";
import { Button, Select } from "../../container/components";
import { MONTH } from "../../container/constants";
import { generateArrayOfYears } from "../../utils/years";
import "./calendar.scss";

import CalendarContent from "./components/CalendarContent";

const yearOption = generateArrayOfYears(20).map(item => ({
  value: item, text: String(item), checked: false
}));

const Calendar = () => {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  const handleMonthChange = useCallback((value) => {
    setMonth(value);
  }, [])

  const handleYearChange = useCallback((value) => {
    setYear(value);
  }, []);

  return (
    <div className="card calendar">
      <div className="calendar__filter">
        <Select value={month} onChange={handleMonthChange} label="Tháng" option={MONTH} />
        <Select value={year} onChange={handleYearChange} label="Năm" option={yearOption} />
        <Button size="sm">Tìm kiếm</Button>
      </div>
      <CalendarContent month={month} year={year} />
    </div>
  );
}

export default Calendar;