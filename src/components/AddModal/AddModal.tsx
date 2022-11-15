import React, { useState } from "react";
import { db } from "../../db";
import addEvent from "../../utils/addEvent";
import AddModalView from "./AddModal.view";

type Props = {
  hideFunction: () => void;
  date: string;
  time: string;
};

const AddModal: React.FC<Props> = ({ hideFunction, date, time }: Props) => {
  const [inputValue, setInputValue] = useState<string>("");

  function inputOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  async function buttonOnClick() {
    await addEvent(date, time, inputValue);
    hideFunction();
  }

  return (
    <AddModalView
      inputValue={inputValue}
      inputOnChange={inputOnChange}
      buttonOnClick={buttonOnClick}
      hideFunction={hideFunction}
    />
  );
};

export default AddModal;
