import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchCourses } from '../actions/index';
import SearchBar from '../components/SearchBar';

class SyllabusSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.wait = 400;
  }
  render() {
    return (
      <SearchBar
        placeholder="Course names, instructors"
        onSearch={this.props.searchCourses}
        wait={this.wait}
      />
    );
  }
}

const mapDispatchToProps = {
  searchCourses
};

export default connect(null, mapDispatchToProps)(SyllabusSearchBar);

SyllabusSearchBar.propTypes = {
  searchCourses: PropTypes.func.isRequired
};
