import React from "react";
import { connect } from "react-redux";
import { withNamespaces } from "react-i18next";
import ReactGA from "react-ga";

import { changeCoursesSortingOption } from "../../actions/syllabus";
import { getSortingOption } from "../../reducers/addedSemesterCourses";
import { sortAddedCourses } from "../../utils/addedCourses";
import AddedCourseList from "../../components/syllabus/AddedCourseList";
import { gaAddedCourseItem } from "../../ga/eventCategories";
import {
  gaAppendActionWithLng,
  gaOpenSortingOption,
  gaCloseSortingOption,
  gaChangeSortingOption
} from "../../ga/eventActions";

class AddedCourseListContainer extends React.Component {
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
      category: gaAddedCourseItem,
      action: gaAppendActionWithLng(gaAction, this.props.lng)
    });
    this.setState((prevState, props) => {
      return { isSortingOptionOpen: !prevState.isSortingOptionOpen };
    });
  };

  handleChangeSortingOption = sortingOption => {
    if (sortingOption !== this.props.sortingOption) {
      ReactGA.event({
        category: gaAddedCourseItem,
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
    const addedCourses = addedCoursesAndPrefs.map(addedCourseAndPref => {
      return {
        ...addedCourseAndPref.course,
        displayLang: addedCourseAndPref.displayLang
      };
    });
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

export default withNamespaces("translation")(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddedCourseListContainer)
);
