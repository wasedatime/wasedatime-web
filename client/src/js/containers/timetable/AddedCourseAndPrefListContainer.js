import React from "react";
import { connect } from "react-redux";
import { withNamespaces } from "react-i18next";
import ReactGA from "react-ga";

import { changeCoursesSortingOption } from "../../actions/syllabus";
import { getSortingOption } from "../../reducers/addedSemesterCourses";
import { sortAddedCoursesAndPrefs } from "../../utils/addedCoursesAndPrefs";
import AddedCourseAndPrefList from "../../components/timetable/AddedCourseAndPrefList";
import { gaAddedCourseAndPrefItem } from "../../ga/eventCategories";
import {
  gaAppendActionWithLng,
  gaOpenSortingOption,
  gaCloseSortingOption,
  gaChangeSortingOption
} from "../../ga/eventActions";

class AddedCourseAndPrefListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      isSortingOptionOpen: false
    };
  }

  handleToggleSortingOptions = event => {
    event.preventDefault();
    const gaAction = this.state.isSortingOptionOpen
      ? gaCloseSortingOption
      : gaOpenSortingOption;
    ReactGA.event({
      category: gaAddedCourseAndPrefItem,
      action: gaAppendActionWithLng(gaAction, this.props.lng)
    });
    this.setState((prevState, props) => {
      return { isSortingOptionOpen: !prevState.isSortingOptionOpen };
    });
  };

  handleChangeSortingOption = sortingOption => {
    if (sortingOption !== this.props.sortingOption) {
      ReactGA.event({
        category: gaAddedCourseAndPrefItem,
        action: gaAppendActionWithLng(gaChangeSortingOption, this.props.lng),
        label: sortingOption
      });
      this.props.changeCoursesSortingOption(
        sortingOption,
        this.props.semesterKey
      );
    }
  };

  render() {
    const { addedCoursesAndPrefs, selectedSortingOption } = this.props;
    const isSortingOptionOpen = this.state.isSortingOptionOpen;
    const sortedAddedCoursesAndPrefs = sortAddedCoursesAndPrefs(
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

export default withNamespaces("translation")(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddedCourseAndPrefListContainer)
);
