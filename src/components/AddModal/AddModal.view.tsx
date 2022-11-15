import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2000;
  height: 300px;
  width: 400px;
  padding: 16px 24px;
  transform: translate(-50%, -60%);
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 0 50vmax rgba(0, 0, 0, 0.5);
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

type Props = {
  inputValue: string;
  inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  buttonOnClick: () => void;
  hideFunction: () => void;
};

const AddModalView: React.FC<Props> = ({
  inputValue,
  inputOnChange,
  buttonOnClick,
  hideFunction,
}: Props) => {
  return (
    <Wrapper>
      <Flex>
        <label htmlFor="input">Enter event</label>
        <input
          id="input"
          type="text"
          value={inputValue}
          onChange={inputOnChange}
        />
      </Flex>
      <button onClick={buttonOnClick}>Add</button>
      <button onClick={hideFunction}>Cancel</button>
    </Wrapper>
  );
};

export default AddModalView;
