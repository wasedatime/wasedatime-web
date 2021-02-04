import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import stickybits from "stickybits";

import { headerHeight } from "@bit/wasedatime.core.ts.constants.size-variables";
// import { RowWrapper } from "@bit/wasedatime.core.ts.ui.wrapper";

// const ExtendedWrapper = styled(RowWrapper)`
//   flex: none;
//   align-items: center;
//   height: ${(props) => props.theme.searchBarHeight};
//   width: 100%;
//   padding: 0 1em;
//   background-color: #fff;
//   z-index: 103;
// `;

const StyledForm = styled("form")`
  width: 100%;
  align-self: center;
  background-color: ${(props) => props.theme.white};
  padding: 0 5px;
  margin-top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  border: 1px solid ${(props) => props.theme.grey12};
  border-radius: 5em;
  background: none;
  outline: none;
  padding: 3px 0px 3px 10px;
  margin: 0;
  margin-top: 0px;
  flex: 1 0 auto;
`;

const StyledClearButton = styled("span")`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.grey7};
  margin: 0;
  margin-left: -15px;
  &:focus {
    outline: 0;
  }
  -webkit-tap-highlight-color: transparent;
`;

interface Props {
  placeholder: string;
  value: string | string[];
  onInputChange: (input: string) => void;
}

class SearchBar extends React.Component<Props> {
  wrapper: any;
  stickyWrapper: any;
  setWrapperRef: (element: any) => void;
  createStickyWrapper: () => void;
  cleanupStickyWrapper: () => void;

  constructor(props) {
    super(props);
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

  componentDidMount() {
    this.createStickyWrapper();
  }

  componentWillUnmount() {
    this.cleanupStickyWrapper();
  }

  handleInputChange = (event) => {
    event.preventDefault();
    const inputText = event.target.value;
    this.props.onInputChange(inputText);
  };

  handleClearInput = (event) => {
    event.preventDefault();
    this.props.onInputChange("");
  };

  render() {
    return (
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
        }}
        innerRef={this.setWrapperRef}
      >
        <StyledInput
          type="text"
          placeholder={this.props.placeholder}
          onChange={this.handleInputChange}
        />
        <StyledClearButton
          role="button"
          title="clear"
          onClick={this.handleClearInput}
        >
          <FontAwesomeIcon icon={faTimes} size="1x" />
        </StyledClearButton>
      </StyledForm>
    );
  }
}

export default SearchBar;
