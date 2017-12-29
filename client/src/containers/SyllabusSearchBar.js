import React from 'react';
import { connect } from 'react-redux';

import { searchCourses } from '../actions/index';
import SearchBar from '../components/SearchBar';
import PropTypes from 'prop-types';

class SyllabusSearch extends React.Component {
  constructor(props) {
    super(props);
    this.wait = 300;
  }
  render() {
    return (
      <SearchBar
        className="syllabus__searchbar"
        placeholder="Course names, instructors"
        onSearch={this.props.searchCourses}
        wait={this.wait}
      />
    );
  }
}

// const mapStateToProps = ({ courseResults }) => {
//   console.log(courseResults);
//   return { courseResults };
// };

const mapDispatchToProps = {
  searchCourses
};

export default connect(null, mapDispatchToProps)(SyllabusSearch);
