import React from 'react';
import { debounce } from 'lodash';

import search from '../img/search.png';

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
      <div className={this.props.className}>
        <img className="searchbar__logo" src={search} alt="Search Logo" />
        <form
          className="searchbar__input__wrapper"
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <input
            className="searchbar__input"
            type="text"
            placeholder={this.props.placeholder}
            value={this.state.searchTerm}
            onChange={this.onInputChange}
            autoFocus
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
