import React from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  align-items: center;
  position: fixed;
  height: 36px;
  width: 100%;
  padding: 0px 25px;
  background-color: #777;
  z-index: 1030;
`;

const Icon = styled('div')`
  align-items: center;
  margin-right: 25px;
  color: #ffffff;
`;

const StyledForm = styled('form')`
  width: 100%;
  align-self: center;
`;

const StyledInput = styled('input')`
  width: 100%;
`;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }

  search = searchTerm => {
    this.props.onSearch(searchTerm.trim());
  };

  debounceSearch = debounce(this.search, this.props.wait, { leading: false });

  onInputChange = event => {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
    this.debounceSearch(searchTerm);
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
            placeholder={this.props.placeholder}
            value={this.state.searchTerm}
            onChange={this.onInputChange}
            autoFocus
          />
        </StyledForm>
      </Wrapper>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  wait: PropTypes.number.isRequired
};
