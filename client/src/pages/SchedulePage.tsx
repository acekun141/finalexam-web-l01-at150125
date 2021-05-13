import React from "react";
import BaseLayout from "../components/BaseLayout";
import Calendar from "../components/Calendar";
import ScheduleDetail from "../components/ScheduleDetail";

const Schedule = () => {
  return (
    <BaseLayout>
      <div className="page schedule">
        <p className="page__title">Lịch học</p>
        <div className="page__content">
          <div className="schedule__wrapper">
            <div className="schedule__calendar">
              <Calendar />
            </div>
            <div className="schedule__detail">
              <ScheduleDetail />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Schedule;