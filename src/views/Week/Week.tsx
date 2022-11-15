import React, { useEffect, useState } from "react";
import WeekView from "./Week.view";

type Props = {
  startDate: Date;
  showModal: (date: string, time: string) => void;
};

const Week: React.FC<Props> = ({ startDate, showModal }: Props) => {
  const [weekDates, setWeekDates] = useState<string[]>([]);

  useEffect(() => {
    const array: string[] = [];
    const date = new Date(startDate);
    array.push(date.toISOString().slice(0, 10));

    for (let i = 0; i < 6; i++) {
      date.setDate(date.getDate() + 1);
      array.push(date.toISOString().slice(0, 10));
    }

    setWeekDates(array);
  }, [startDate]);

  return <WeekView weekDates={weekDates} showModal={showModal} />;
};

export default Week;
