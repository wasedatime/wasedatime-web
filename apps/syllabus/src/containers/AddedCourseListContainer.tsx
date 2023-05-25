import React, { useState } from "react"

import { WithTranslation, withTranslation } from "react-i18next"
import { connect } from "react-redux"

import SemesterSwitcher from "@app/components/SemesterSwitcher"
import AddedCourseList from "@app/components/syllabus/AddedCourseList"
import { SyllabusKey } from "@app/constants/syllabus-data"
import { Semester } from "@app/constants/timetable-terms"
import { ReduxRootState } from "@app/redux/reducers"
import { getAddedCoursesListWithLang } from "@app/redux/reducers/addedCourses"
import Course from "@app/types/course"
import { sortAddedCourses } from "@app/utils/added-courses"
import { getCurrentSemester } from "@app/utils/get-current-semesters"

const semesterTitles = {
  [Semester.SPRING]: "Spring Semester",
  [Semester.FALL]: "Fall Semester",
}

interface ReduxStateProps {
  addedCourses: Course[]
  selectedSortingOption: string
}

const AddedCourseListContainer = ({
  addedCourses,
  selectedSortingOption,
  t,
}: ReduxStateProps & WithTranslation) => {
  const [semester, setSemester] = useState(getCurrentSemester())

  const handleToggleSemester = () => {
    if (semester === Semester.SPRING) setSemester(Semester.FALL)
    else setSemester(Semester.SPRING)
  }

  const addedCoursesOfTerm = addedCourses.filter((c) => {
    if (semester === Semester.SPRING) return c[SyllabusKey.TERM].match(/0|1|f/g)
    if (semester === Semester.FALL) return c[SyllabusKey.TERM].match(/2|3|f/g)
  })

  const sortedAddedCourses = sortAddedCourses(
    addedCoursesOfTerm,
    selectedSortingOption
  )

  return (
    <div>
      <SemesterSwitcher
        semesterTitle={t(`timetable.${semesterTitles[semester]}`)}
        selectedSemester={semester}
        selectedQuarter={null}
        isQuarterDisplayed={false}
        toggleSemester={handleToggleSemester}
        toggleQuarter={() => {}}
        isSmallSize
      />
      <AddedCourseList addedCourses={sortedAddedCourses} />
    </div>
  )
}

const mapStateToProps = (state: ReduxRootState) => ({
  addedCourses: getAddedCoursesListWithLang(state.addedCourses.byId),
  selectedSortingOption: state.addedCourses.sortingOption,
})

export default connect<ReduxStateProps, {}>(
  mapStateToProps,
  null
)(withTranslation("translation")(AddedCourseListContainer))
