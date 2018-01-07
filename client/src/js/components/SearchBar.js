import React from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import search from '../../img/search.png';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  position: fixed;
  height: 36px;
  width: 100%;
  padding-left: 26px;
  background-color: #777;
  z-index: 1030;
`;

const Logo = styled('img')`
  height: 27px;
  align-self: center;
  margin-right: 18px;
`;

const StyledForm = styled('form')`
  width: 100%;
  align-self: center;
  margin-left: 14px;
  margin-right: 25px;
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
        <Logo src={search} alt="Search Logo" />
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
