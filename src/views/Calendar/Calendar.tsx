import { useLiveQuery } from "dexie-react-hooks";
import React, { useState } from "react";
import { db } from "../../db";
import addEvent from "../../utils/addEvent";
import CalendarView from "./Calendar.view";

type Props = {};

const Calendar: React.FC<Props> = () => {
  const [currentWeekStartDate, setCurrentWeekStartDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() - date.getDay() + 1);
    return date;
  });

  function goToCurrentWeek() {
    const date = new Date();
    date.setDate(date.getDate() - date.getDay() + 1);
    setCurrentWeekStartDate(date);
  }

  function goToPrevWeek() {
    setCurrentWeekStartDate((prevCurrentWeekStartDate) => {
      const curr = new Date(prevCurrentWeekStartDate);
      curr.setDate(curr.getDate() - 7);
      return curr;
    });
  }

  function goToNextWeek() {
    setCurrentWeekStartDate((prevCurrentWeekStartDate) => {
      const curr = new Date(prevCurrentWeekStartDate);
      curr.setDate(curr.getDate() + 7);
      return curr;
    });
  }

  async function generateRandomEvents() {
    const array: string[] = [];
    const date = new Date(currentWeekStartDate);

    for (let i = 0; i < 7; i++) {
      const randomHour = Math.floor(Math.random() * 24);

      addEvent(
        date.toISOString().slice(0, 10),
        `${randomHour < 10 ? "0" + randomHour : randomHour}:00`,
        "Random"
      );

      date.setDate(date.getDate() + 1);
    }
  }

  function clearEvents() {
    db.events.clear();
  }

  return (
    <CalendarView
      startDate={currentWeekStartDate}
      goToPrevWeek={goToPrevWeek}
      goToCurrentWeek={goToCurrentWeek}
      goToNextWeek={goToNextWeek}
      generateRandomEvents={generateRandomEvents}
      clearEvents={clearEvents}
    />
  );
};

export default Calendar;
