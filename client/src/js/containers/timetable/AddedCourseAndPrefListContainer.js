import React from 'react';
import { connect } from 'react-redux';

import {
  ADDED_ORDER,
  COURSE_TITLE,
  COURSE_TIME
} from '../../data/sortingOptions';
import { changeCoursesSortingOption } from '../../actions/syllabus';
import { getSortingOption } from '../../reducers/addedSemesterCourses';
import AddedCourseAndPrefList from '../../components/timetable/AddedCourseAndPrefList';

class AddedCourseAndPrefListContainer extends React.Component {
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

  sortAddedCoursesAndPrefs = (addedCoursesAndPrefs, sortingOption) => {
    switch (sortingOption) {
      case ADDED_ORDER:
        return addedCoursesAndPrefs;
      case COURSE_TITLE:
        return addedCoursesAndPrefs.sort((a, b) => {
          // ignore upper and lowercase
          const courseTitleA = a.course.title.toUpperCase();
          const courseTitleB = b.course.title.toUpperCase();
          if (courseTitleA < courseTitleB) {
            return -1;
          } else if (courseTitleA > courseTitleB) {
            return 1;
          } else {
            return 0;
          }
        });
      case COURSE_TIME:
        return addedCoursesAndPrefs.sort((a, b) => {
          const firstOccurrenceDayA = a.course.occurrences[0].day;
          const firstOccurrenceDayB = b.course.occurrences[0].day;
          const firstOccurrenceStartPeriodA =
            a.course.occurrences[0].start_period;
          const firstOccurrenceStartPeriodB =
            b.course.occurrences[0].start_period;
          if (firstOccurrenceDayA < firstOccurrenceDayB) {
            return -1;
          } else if (firstOccurrenceDayA > firstOccurrenceDayB) {
            return 1;
          } else {
            if (firstOccurrenceStartPeriodA < firstOccurrenceStartPeriodB) {
              return -1;
            } else if (
              firstOccurrenceStartPeriodA > firstOccurrenceStartPeriodB
            ) {
              return 1;
            } else {
              return 0;
            }
          }
        });
      default:
        return addedCoursesAndPrefs;
    }
  };

  render() {
    const { addedCoursesAndPrefs, selectedSortingOption } = this.props;
    const isSortingOptionOpen = this.state.isSortingOptionOpen;
    const sortedAddedCoursesAndPrefs = this.sortAddedCoursesAndPrefs(
      addedCoursesAndPrefs,
      selectedSortingOption
    );
    return (
      <AddedCourseAndPrefList
        addedCoursesAndPrefs={sortedAddedCoursesAndPrefs}
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
  AddedCourseAndPrefListContainer
);
