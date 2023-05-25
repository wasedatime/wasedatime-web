import React from "react"

import ReactGA from "react-ga"
import { connect } from "react-redux"

import CourseListSummary from "@app/components/CourseListSummary"
import { gaChangeSortingOption } from "@app/ga/eventActions"
import {
  gaAddedCourseAndPrefItem,
  gaAddedCourseItem,
} from "@app/ga/eventCategories"
import { changeSortingOption } from "@app/redux/actions"
import { ReduxRootState } from "@app/redux/reducers"
import Course from "@app/types/course"

interface ReduxStateProps {
  selectedSortingOption: string
}

interface ReduxDispatchProps {
  changeSortingOption: (sortingOption: string) => void
}

interface OwnProps {
  courses: Course[]
}

const CourseListSummaryContainer = ({
  courses,
  selectedSortingOption,
  changeSortingOption,
}: OwnProps & ReduxStateProps & ReduxDispatchProps) => {
  const changeSorting = (sortingOption) => {
    ReactGA.event({
      category: window.location.pathname.includes("timetable")
        ? gaAddedCourseAndPrefItem
        : gaAddedCourseItem,
      action: gaChangeSortingOption,
      label: sortingOption,
    })
    changeSortingOption(sortingOption)
  }

  return (
    <CourseListSummary
      courses={courses}
      selectedSortingOption={selectedSortingOption}
      changeSortingOption={changeSorting}
    />
  )
}

const mapStateToProps = (state: ReduxRootState) => ({
  selectedSortingOption: state.addedCourses.sortingOption,
})

const mapDispatchToProps = {
  changeSortingOption,
}

export default connect<ReduxStateProps, ReduxDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(CourseListSummaryContainer)
