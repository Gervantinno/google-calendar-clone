import React, { useState } from "react";
import styled from "styled-components";
import AddModal from "../../components/AddModal/AddModal";
import Week from "../Week/Week";

type Props = {
  startDate: Date;
  goToPrevWeek: () => void;
  goToCurrentWeek: () => void;
  goToNextWeek: () => void;
  generateRandomEvents: () => void;
  clearEvents: () => void;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface IModalData {
  date: string;
  time: string;
}

const CalendarView: React.FC<Props> = ({
  startDate,
  goToPrevWeek,
  goToCurrentWeek,
  goToNextWeek,
  generateRandomEvents,
  clearEvents,
}: Props) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [modalDate, setModalDate] = useState<IModalData>({
    date: "",
    time: "",
  });

  function showModal(date: string, time: string) {
    setModalDate({ date, time });
    setIsModalVisible(true);
  }

  function hideModal() {
    setIsModalVisible(false);
  }

  return (
    <Wrapper>
      <div>
        <button onClick={goToPrevWeek}>Prev week</button>
        <button onClick={goToCurrentWeek}>Current week</button>
        <button onClick={goToNextWeek}>Next week</button>
        <button onClick={generateRandomEvents}>
          Random event for every day
        </button>
        <button onClick={clearEvents}>Clear all events</button>
      </div>
      <Week startDate={startDate} showModal={showModal} />
      {isModalVisible && (
        <AddModal
          date={modalDate.date}
          time={modalDate.time}
          hideFunction={hideModal}
        />
      )}
    </Wrapper>
  );
};

export default CalendarView;
