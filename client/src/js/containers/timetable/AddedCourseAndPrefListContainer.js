import React from 'react';
import { connect } from 'react-redux';

import {
  ADDED_ORDER,
  COURSE_TITLE,
  COURSE_TIME
} from '../../data/sortingOptions';
import { changeCoursesSortingOption } from '../../actions/syllabus';
import { getSortingOption } from '../../reducers/addedSemesterCourses';
import SortingOptions from '../../components/SortingOptions';
import AddedCourseAndPrefList from '../../components/timetable/AddedCourseAndPrefList';
import { Wrapper, RowWrapper } from '../../styled-components/Wrapper';
import { InvisibleButton } from '../../styled-components/Button';
import { media } from '../../utils/styledComponents';

const ExtendedWrapper = Wrapper.extend`
  ${media.tablet`margin-top: 2em;`};
  ${media.phone`margin-top: 2em;`};
`;

const CourseAddedMessageWrapper = RowWrapper.extend`
  padding: 0.3em 1em;
  ${media.tablet`padding: 0 1em;`};
  ${media.phone`padding: 0 1em;`};
  justify-content: space-between;
`;

const SortByButton = InvisibleButton.extend`
  display: flex;
  &:hover {
    fill: #b51e36;
    color: #b51e36;
  }
  &:focus {
    fill: ${props => (props.isSortingOptionOpen ? '#b51e36;' : '#000;')};
    color: ${props => (props.isSortingOptionOpen ? '#b51e36;' : '#000;')};
  }
  fill: ${props => (props.isSortingOptionOpen ? '#b51e36;' : '#000;')};
  color: ${props => (props.isSortingOptionOpen ? '#b51e36;' : '#000;')};
`;

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
    const { addedCoursesAndPrefs, sortingOption } = this.props;
    const isSortingOptionOpen = this.state.isSortingOptionOpen;
    const sortedAddedCoursesAndPrefs = this.sortAddedCoursesAndPrefs(
      addedCoursesAndPrefs,
      sortingOption
    );
    return (
      <ExtendedWrapper>
        <CourseAddedMessageWrapper>
          <span>{`${addedCoursesAndPrefs.length} courses added `}</span>
          <SortByButton
            isSortingOptionOpen={isSortingOptionOpen}
            onClick={this.handleToggleSortingOptions}
          >
            <span>Sort by&nbsp;</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
            </svg>
          </SortByButton>
        </CourseAddedMessageWrapper>
        {isSortingOptionOpen && (
          <SortingOptions
            selectedSortingOption={this.props.sortingOption}
            handleChangeSortingOption={this.handleChangeSortingOption}
          />
        )}
        <AddedCourseAndPrefList
          addedCoursesAndPrefs={sortedAddedCoursesAndPrefs}
        />
      </ExtendedWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    sortingOption: getSortingOption(state.addedCourses[ownProps.semesterKey])
  };
};

const mapDispatchToProps = {
  changeCoursesSortingOption
};

export default connect(mapStateToProps, mapDispatchToProps)(
  AddedCourseAndPrefListContainer
);
