import React from 'react';
import styled from 'styled-components';
import stickybits from 'stickybits';

class AddedCourseList extends React.Component {
  constructor() {
    super();
    this.wrapper = null;

    this.setWrapperRef = element => {
      this.wrapper = element;
    }

    this.createStickyWrapper = () => {
      if (this.wrapper) {
        this.stickyWrapper = stickybits(this.wrapper,
          {stickyBitStickyOffset: 92});
        console.log(this.stickyWrapper);
      }
    }

    this.cleanupStickyWrapper = () => {
      if (this.stickyWrapper) {
        this.stickyWrapper.cleanup();
      }
    }
  }

  componentDidMount() {
    this.createStickyWrapper();
  }

  componentWillUnmount() {
    this.cleanupStickyWrapper();
  }

  render() {
    return (
      <div
        style={{
          overflowY: "auto",
          height: "calc(100vh - 92px)"
        }}
        ref={this.setWrapperRef}
      >
        <div>
        Course Added List under construction
        </div>
      </div>
    )
  }
}

export default AddedCourseList;
