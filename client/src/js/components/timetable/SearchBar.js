import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  align-items: center;
  width: 100%;
  padding: 1rem 0 ;
`;

const Icon = styled('div')`
  flex: 1 0 3.5rem;
  align-items: center;
  text-align: center;
  color: #000;
`;

const StyledForm = styled('form')`
  width: 100%;
  align-self: center;
  border: 1px solid #ccc;
  padding: 0.3rem;
  border-radius: 0.4rem;
`;

const StyledInput = styled('input')`
  width: 100%;
  border: none;
  font-size: 1.8rem;
`;

class SearchBar extends React.Component {
  handleInputChange = event => {
    const inputText = event.target.value;
    this.props.onInputChange(inputText.trim());
  };

  render() {
    return (
      <Wrapper>
        <Icon>
          <i className="fas fa-search fa-2x" data-fa-transform="shrink-2" ></i>
        </Icon>
        <StyledForm
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <StyledInput
            type="text"
            placeholder="Add courses to timetable"
            // value={this.props.inputText}
            // onChange={this.handleInputChange}
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
