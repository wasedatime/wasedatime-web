import React from 'react';
import styled from 'styled-components';
import stickybits from 'stickybits';

import { RowWrapper } from '../../styled-components/Wrapper';

const ExtendedWrapper = RowWrapper.extend`
  flex: none;
  align-items: center;
  justify-content: space-around;
  height: 32px;
  width: 100%;
  background-color: #777;
  z-index: 1030;
`;

const SemesterButton = styled('button')`
  width: 100%;
  height: 100%;
  background-color: ${props => (props.isSelected ? '#444' : 'unset')};
  border: none;
  padding: 0;
  color: #fff;
  &:hover {
    background-color: #444;
  }
  &:focus {
    outline: 0;
  }
`;

class SemesterTabs extends React.Component {
  constructor() {
    super();
    this.wrapper = null;
    this.setWrapperRef = element => {
      this.wrapper = element;
    };

    this.createStickyWrapper = () => {
      if (this.wrapper) {
        this.stickyWrapper = stickybits(this.wrapper, {
          stickyBitStickyOffset: 60
        });
      }
    };

    this.cleanupStickyWrapper = () => {
      if (this.stickyWrapper) {
        this.stickyWrapper.cleanup();
      }
    };

    this.fallButtonId = 'button--fall';
    this.springButtonId = 'button-spring';
    this.fallSemester = 'fall';
    this.springSemester = 'spring';
  }

  handleOnClick = event => {
    event.preventDefault();
    const buttonId = event.target.id;
    const semester =
      buttonId === this.fallButtonId ? this.fallSemester : this.springSemester;
    this.props.handleChangeSemester(semester);
  };

  componentDidMount() {
    this.createStickyWrapper();
  }

  componentWillUnmount() {
    this.cleanupStickyWrapper();
  }

  render() {
    return (
      <ExtendedWrapper innerRef={this.setWrapperRef}>
        <SemesterButton
          id={this.springButtonId}
          onClick={this.handleOnClick}
          isSelected={this.props.semester === this.springSemester}
        >
          Spring Semester
        </SemesterButton>
        <SemesterButton
          id={this.fallButtonId}
          onClick={this.handleOnClick}
          isSelected={this.props.semester === this.fallSemester}
        >
          Fall Semester
        </SemesterButton>
      </ExtendedWrapper>
    );
  }
}

export default SemesterTabs;
