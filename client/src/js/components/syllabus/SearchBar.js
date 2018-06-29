import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  align-items: center;
  position: fixed;
  height: 32px;
  width: 100%;
  padding: 0px 25px;
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
  handleInputChange = event => {
    const inputText = event.target.value;
    this.props.onInputChange(inputText);
  };

  render() {
    return (
      <Wrapper>
        <Icon>
          <FontAwesomeIcon
            icon={faSearch}
            size="2x"
            transform="shrink-4"
          />
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
      </Wrapper>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired
};
