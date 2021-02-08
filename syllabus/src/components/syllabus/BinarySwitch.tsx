import React from "react";
import styled from "styled-components";

const ExtendedWrapper = styled.div`
  display: flex;
  flex-direction: row
  flex: none;
  align-items: center;
  justify-content: space-around;
  height: ${(props) => props.height};
  width: 18em;
  background-color: ${(props) => props.theme.white};
  z-index: 103;
  position: fixed !important;
`;

const SwitchButton = styled("button")`
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.isSelected ? props.theme.white : "unset"};
  border: none;
  border-bottom: ${(props) => (props.isSelected ? "3px solid #ccc" : "none")};
  padding: 5px;
  color: ${(props) => props.theme.grey2};
  &:hover {
    background-color: #ccc;
    border-bottom: "3px solid #ccc";
  }
  &:focus {
    outline: 0;
  }
`;

interface Props {
  switchHeight: string;
  handleSwitchValue: (value: string) => void;
  value: string;
  leftButtonId: string;
  rightButtonId: string;
  leftValue: string;
  rightValue: string;
  leftDisplayedValue: string;
  rightDisplayedValue: string;
}

const BinarySwitch = ({
  switchHeight,
  handleSwitchValue,
  value,
  leftButtonId,
  rightButtonId,
  leftValue,
  rightValue,
  leftDisplayedValue,
  rightDisplayedValue,
}: Props) => {
  const handleOnClick = (event) => {
    event.preventDefault();
    const buttonId = event.target.id;
    const value = buttonId === leftButtonId ? leftValue : rightValue;
    handleSwitchValue(value);
  };

  return (
    <ExtendedWrapper height={switchHeight}>
      <SwitchButton
        id={leftButtonId}
        onClick={handleOnClick}
        isSelected={value === leftValue}
      >
        {leftDisplayedValue}
      </SwitchButton>
      <SwitchButton
        id={rightButtonId}
        onClick={handleOnClick}
        isSelected={value === rightValue}
      >
        {rightDisplayedValue}
      </SwitchButton>
    </ExtendedWrapper>
  );
};

export default BinarySwitch;
