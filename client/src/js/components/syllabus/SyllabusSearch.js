import React from 'react';
import debounce from 'lodash/debounce';
import { Helmet } from 'react-helmet';

import SearchBar from './SearchBar';
import CourseListContainer from '../../containers/CourseListContainer';
import { Wrapper } from '../../styled-components/Wrapper';

class SyllabusSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
      searchTerm: ''
    };
    this.placeholder = 'Course titles, instructors';
  }

  updateSearchTerm = () => {
    this.setState({
      searchTerm: this.state.inputText
    });
  }

  debounceUpdateSearchTerm = debounce(
    this.updateSearchTerm,
    400,
    { leading: false }
  );

  handleInputChange = (inputText) => {
    this.setState({
      inputText
    });
    this.debounceUpdateSearchTerm();
  }

  componentWillUnmount() {
    this.debounceUpdateSearchTerm.cancel();
  }

  render() {
    return (
      <Wrapper>
        <Helmet>
          <title>WaseTime - Syllabus Search</title>
          <meta name="description" content="Syllabus Searching at Waseda University." />
          <meta property="og:title" content="WaseTime - Syllabus Search" />
          <meta property="og:description" content="Syllabus Searching at Waseda University." />
          <meta property="og:site_name" content="WaseTime - Syllabus Search" />
        </Helmet>
        <SearchBar
          onInputChange = {this.handleInputChange}
          placeholder = {this.placeholder}
          inputText = {this.state.inputText}
        />
        <CourseListContainer searchTerm={this.state.searchTerm}/>
      </Wrapper>
    );
  }
};

export default SyllabusSearch;
