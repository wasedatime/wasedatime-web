import React from 'react';
import { connect } from 'react-redux';

import { changeCoursesSortingOption } from '../../actions/syllabus';
import { getSortingOption } from '../../reducers/addedSemesterCourses';
import { sortAddedCourses } from '../../utils/addedCourses';
import AddedCourseList from '../../components/syllabus/AddedCourseList';

class AddedCourseListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      isSortingOptionOpen: false
    };
  }

  handleToggleSortingOptions = event => {
    event.preventDefault();
    this.setState((prevState, props) => {
      return { isSortingOptionOpen: !prevState.isSortingOptionOpen };
    });
  };

  handleChangeSortingOption = sortingOption => {
    if (sortingOption !== this.props.sortingOption) {
      this.props.changeCoursesSortingOption(
        sortingOption,
        this.props.semesterKey
      );
    }
  };

  render() {
    const { addedCourses, selectedSortingOption } = this.props;
    const isSortingOptionOpen = this.state.isSortingOptionOpen;
    const sortedAddedCourses = sortAddedCourses(
      addedCourses,
      selectedSortingOption
    );
    return (
      <AddedCourseList
        addedCourses={sortedAddedCourses}
        isSortingOptionOpen={isSortingOptionOpen}
        handleToggleSortingOptions={this.handleToggleSortingOptions}
        selectedSortingOption={selectedSortingOption}
        handleChangeSortingOption={this.handleChangeSortingOption}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    selectedSortingOption: getSortingOption(
      state.addedCourses[ownProps.semesterKey]
    )
  };
};

const mapDispatchToProps = {
  changeCoursesSortingOption
};

export default connect(mapStateToProps, mapDispatchToProps)(
  AddedCourseListContainer
);

AddedCourseListContainer.propTypes = {
  addedCourses: PropTypes.array.isRequired,
  semesterKey: PropTypes.string.isRequired,
  selectedSortingOption: PropTypes.string.isRequired,
  changeCoursesSortingOption: PropTypes.func.isRequired
};
