import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import stickybits from 'stickybits';
import PropTypes from 'prop-types';

import { RowWrapper } from '../../styled-components/Wrapper';

const ExtendedWrapper = RowWrapper.extend`
  flex: none;
  align-items: center;
  height: 32px;
  width: 100%;
  padding: 0 1em;
  background-color: #777;
  z-index: 1030;
`;

const Icon = styled('div')`
  align-items: center;
  margin-right: 0.5em;
  color: #fff;
`;

const StyledForm = styled('form')`
  width: 100%;
  align-self: center;
`;

const StyledInput = styled('input')`
  width: 100%;
`;

class SearchBar extends React.Component {
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
  }

  componentDidMount() {
    this.createStickyWrapper();
  }

  componentWillUnmount() {
    this.cleanupStickyWrapper();
  }

  handleInputChange = event => {
    const inputText = event.target.value;
    this.props.onInputChange(inputText);
  };

  render() {
    return (
      <ExtendedWrapper innerRef={this.setWrapperRef}>
        <Icon>
          <FontAwesomeIcon icon={faSearch} size="2x" transform="shrink-4" />
        </Icon>
        <StyledForm
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <StyledInput
            type="text"
            placeholder={this.props.placeholder}
            value={this.props.inputText}
            onChange={this.handleInputChange}
          />
        </StyledForm>
      </ExtendedWrapper>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired
};
