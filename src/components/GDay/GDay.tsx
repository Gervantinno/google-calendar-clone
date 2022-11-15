import React from "react";
import GDayView from "./GDay.view";

type Props = {
  date: string;
  time: string;
  showModal: (date: string, time: string) => void;
};

const GDay: React.FC<Props> = ({ date, time, showModal }: Props) => {
  return <GDayView date={date} time={time} showModal={showModal} />;
};

export default GDay;
