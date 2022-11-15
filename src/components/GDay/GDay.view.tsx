import React from "react";
import styled from "styled-components";
import { db } from "../../db";
import { useLiveQuery } from "dexie-react-hooks";

type Props = {
  date: string;
  time: string;
  showModal: (date: string, time: string) => void;
};

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  border-top: 1px solid black;
  border-left: 1px solid black;
  cursor: pointer;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const GDayView: React.FC<Props> = ({ date, time, showModal }: Props) => {
  const events = useLiveQuery(() => db.events.where({ date, time }).toArray());

  return (
    <Wrapper onClick={() => showModal(date, time)}>
      {time}
      <Flex>
        {events?.map((event) => (
          <span key={event.id}>{event.text}</span>
        ))}
      </Flex>
    </Wrapper>
  );
};

export default GDayView;
