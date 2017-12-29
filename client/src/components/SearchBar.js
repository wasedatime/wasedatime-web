import React from 'react';
import { debounce } from 'lodash';
// import { Link } from 'react-router-dom';

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
      <form
        className="searchbar__wrapper"
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          value={this.state.searchTerm}
          onChange={this.onInputChange}
          autoFocus
        />
      </form>
    );
  }
}

export default SearchBar;
