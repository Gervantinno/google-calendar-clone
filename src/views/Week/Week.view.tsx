import React, { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import GDay from "../../components/GDay/GDay";

type Props = {
  weekDates: string[];
  showModal: (date: string, time: string) => void;
};

const Week = styled.div`
  display: grid;
  grid-template-columns: auto repeat(7, 1fr);
  grid-auto-rows: auto;
  width: 100%;
  height: 100vh;
`;

const Flex = styled.div`
  border-top: 1px solid black;
  border-left: 1px solid black;
  padding-right: 8px;
`;

const WeekView: React.FC<Props> = ({ weekDates, showModal }: Props) => {
  const [hours, setHours] = useState<ReactNode[]>([]);

  useEffect(() => {
    const array: ReactNode[] = [];
    for (let i = 0; i <= 24; i++) {
      const time = `${i < 10 ? "0" + i : i}:00`;
      array.push(
        <>
          <Flex>{time}</Flex>
          {weekDates.map((day) => (
            <GDay
              key={day + time}
              date={day}
              time={time}
              showModal={showModal}
            />
          ))}
        </>
      );
    }
    setHours(array);
  }, [weekDates]);

  return (
    <Week>
      <div></div>
      {weekDates.map((day) => (
        <span key={day}>{day}</span>
      ))}
      {[...hours]}
    </Week>
  );
};

export default WeekView;
