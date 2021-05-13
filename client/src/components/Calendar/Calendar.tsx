import React from "react";
import { Button, Select } from "../../container/components";
import { MONTH } from "../../container/constants";
import { generateArrayOfYears } from "../../utils/years";
import "./calendar.scss";

import CalendarContent from "./components/CalendarContent";

const yearOption = generateArrayOfYears(20).map(item => ({
  value: item, text: String(item), checked: false
}));

const Calendar = () => {
  return (
    <div className="card calendar">
      <div className="calendar__filter">
        <Select getValue={() => {}} label="Tháng" option={MONTH} />
        <Select getValue={() => {}} label="Năm" option={yearOption} />
        <Button size="sm">Tìm kiếm</Button>
      </div>
      <CalendarContent />
    </div>
  );
}

export default Calendar;