import React from "react";
import styled from "styled-components";
import stickybits from "stickybits";

import {headerHeight} from "../../styled-components/variables";
import {RowWrapper} from "../../styled-components/Wrapper";

const ExtendedWrapper = styled(RowWrapper)`
  flex: none;
  align-items: center;
  justify-content: space-around;
  height: ${(props) => props.height};
  width: 100%;
  background-color: ${(props) => props.theme.grey7};
  z-index: 1030;
`;

const SwitchButton = styled("button")`
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.isSelected ? props.theme.grey4 : "unset"};
  border: none;
  padding: 0;
  color: ${(props) => props.theme.white};
  &:hover {
    background-color: ${(props) => props.theme.grey4};
  }
  &:focus {
    outline: 0;
  }
`;

export default class BinarySwitch extends React.Component {
  constructor() {
    super();
    this.wrapper = null;
    this.setWrapperRef = (element) => {
      this.wrapper = element;
    };

    this.createStickyWrapper = () => {
      if (this.wrapper) {
        this.stickyWrapper = stickybits(this.wrapper, {
          stickyBitStickyOffset: parseInt(headerHeight, 10),
        });
      }
    };

    this.cleanupStickyWrapper = () => {
      if (this.stickyWrapper) {
        this.stickyWrapper.cleanup();
      }
    };
  }

  handleOnClick = (event) => {
    event.preventDefault();
    const buttonId = event.target.id;
    const { leftButtonId, leftValue, rightValue } = this.props;
    const value = buttonId === leftButtonId ? leftValue : rightValue;
    this.props.handleSwitchValue(value);
  };

  componentDidMount() {
    this.createStickyWrapper();
  }

  componentWillUnmount() {
    this.cleanupStickyWrapper();
  }

  render() {
    const {
      leftButtonId,
      rightButtonId,
      leftValue,
      rightValue,
      value,
      leftDisplayedValue,
      rightDisplayedValue,
    } = this.props;
    return (
      <ExtendedWrapper
        height={this.props.switchHeight}
        innerRef={this.setWrapperRef}
      >
        <SwitchButton
          id={leftButtonId}
          onClick={this.handleOnClick}
          isSelected={value === leftValue}
        >
          {leftDisplayedValue}
        </SwitchButton>
        <SwitchButton
          id={rightButtonId}
          onClick={this.handleOnClick}
          isSelected={value === rightValue}
        >
          {rightDisplayedValue}
        </SwitchButton>
      </ExtendedWrapper>
    );
  }
}
