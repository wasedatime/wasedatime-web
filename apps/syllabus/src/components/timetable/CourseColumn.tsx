import React from "react"

import { Colors, media } from "wasedatime-ui"
import { WithTranslation, withTranslation } from "react-i18next"
import SimpleBar from "simplebar-react"
import styled from "styled-components"

import { SyllabusKey } from "@app/constants/syllabus-data"
import { CourseWithOcc } from "@app/types/course"
import { getCourseTitleAndInstructor } from "@app/utils/course-search"
import { ThemeContext } from "@app/utils/theme-context"
import timetableColors from "@app/constants/timetable-colors"

type StyledCourseColumnProps = {
  displayPeriods: number
  $isDark: boolean
}

type CourseItemProps = {
  displayPeriods: number
  top: number
  height: number
}

const StyledCourseColumn = styled.div<StyledCourseColumnProps>`
  display: flex;
  flex: 1 0 calc(30rem / 7 * ${(props) => props.displayPeriods});
  border-right: 1px solid
    ${(props) => (props.$isDark ? colors.dark.text3 : "#f7f7f7")};
  border-bottom: solid 1px
    ${(props) => (props.$isDark ? colors.dark.text3 : "#f7f7f7")};
  background: linear-gradient(
    180deg,
    ${(props) => (props.$isDark ? colors.dark.bgMain : "white")} 50%,
    ${(props) => (props.$isDark ? "#333" : "#eee")} 50%
  );
  background-size: 100% calc(100% / ${(props) => props.displayPeriods} * 2);
  position: relative;
  min-width: 4rem;
  flex-direction: row;
`

const CourseItem = styled.div<CourseItemProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: calc(
    100% / ${(props) => props.displayPeriods} * ${(props) => props.top}
  );
  height: calc(
    100% / ${(props) => props.displayPeriods} * ${(props) => props.height} - 1px
  );
  width: 100%;
  padding: 0.3rem 0.1rem 0 0.1rem;
  border-left-width: 2px;
  border-left-style: solid;
  line-height: normal;
  text-align: center;
  .simplebar-scrollbar::before {
    background-color: #999;
  }
`

const CourseTitle = styled("span")`
  flex: 1 1 auto;
  font-size: 1em;
  font-weight: bold;
  overflow-x: hidden;
  overflow-wrap: break-word;
  text-align: center;
  ${media.phone`font-size: 0.7em;`}
`

const CourseLocation = styled("span")`
  display: inline-flex;
  flex: 0 0 auto;
  font-weight: lighter;
  padding: 0.2em 0;
  font-size: 0.9em;
  word-break: break-all;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${media.phone`font-size: 0.6em;`}
`

const CourseList = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  min-width: 4rem;
  position: relative;
`

const StyledSimpleBar = styled(SimpleBar)`
  .simplebar-placeholder {
    height: 0px !important;
  }
`

interface Props extends WithTranslation {
  largestPeriod: number
  coursesAndProperties: {
    pref: {
      color: number
      displayLang: string
      visibility: boolean
    }
    course: CourseWithOcc
  }[]
}

const CourseColumn = ({ largestPeriod, coursesAndProperties, t }: Props) => {
  const { theme, setTheme } = React.useContext(ThemeContext)

  const displayPeriods = Math.max(largestPeriod, 5)
  // a distinct course list has no occurrence overlaps between its course items.
  const distinctCourseLists = [[]]
  // index 0 is not used since class period starts from 1.
  // value 0 means available, 1 means occupied.
  const initSlotList = [0, 0, 0, 0, 0, 0, 0, 0]
  const slotLists = [initSlotList.slice()]

  coursesAndProperties.forEach((courseAndProperty) => {
    const period = courseAndProperty.course.occurrence[SyllabusKey.OCC_PERIOD]
    let startPeriod = 0
    let endPeriod = 0
    if (period === -1) {
      startPeriod = endPeriod = -1
    } else if (period > 9) {
      startPeriod = (period / 10) | 0
      endPeriod = period % 10
    } else {
      startPeriod = period
      endPeriod = period
    }
    // const startPeriod = Number(courseAndProperty.course.occurrence.s);
    // const endPeriod = Number(courseAndProperty.course.occurrence.e);

    let existsAvailableSlot = true
    for (let i = 0; i < slotLists.length; i++) {
      // reinit as true for every slotList
      existsAvailableSlot = true
      let j = startPeriod
      for (; j <= endPeriod; j++) {
        if (slotLists[i][j]) {
          // slot not available
          existsAvailableSlot = false
          break
        }
      }
      if (existsAvailableSlot) {
        j = startPeriod
        for (; j <= endPeriod; j++) {
          slotLists[i][j] = 1
        }
        distinctCourseLists[i].push(courseAndProperty)
        break
      }
    }
    if (!existsAvailableSlot) {
      // append a new slotList and mark period i as occupied
      slotLists.push(initSlotList.slice())
      distinctCourseLists.push([])
      let j = startPeriod
      for (; j <= endPeriod; j++) {
        slotLists[slotLists.length - 1][j] = 1
      }
      distinctCourseLists[distinctCourseLists.length - 1].push(
        courseAndProperty
      )
    }
  })

  const distinctCourseListsComponent = distinctCourseLists.map(
    (distinctCourseList, index) => {
      const listComponent = distinctCourseList.map((courseAndProperty) => {
        const { course } = courseAndProperty
        const { color, displayLang } = courseAndProperty.pref
        const { title } = getCourseTitleAndInstructor(course, displayLang)
        const period = course.occurrence[SyllabusKey.OCC_PERIOD]
        let startPeriod = 0
        let endPeriod = 0
        if (period === -1) {
          startPeriod = endPeriod = -1
        } else if (period > 9) {
          startPeriod = (period / 10) | 0
          endPeriod = period % 10
        } else {
          startPeriod = period
          endPeriod = period
        }
        // const startPeriod = Number(course.occurrence.s);
        // const endPeriod = Number(course.occurrence.e);
        const location = course.occurrence[SyllabusKey.OCC_LOCATION]
        // let location = t("timetable.undecided");
        // if (course.occurrence.c !== "undecided") {
        //   if (course.occurrence.b !== "-1") {
        //     location = course.occurrence.l;
        //   } else {
        //     location = course.occurrence.c;
        //   }
        // }
        return (
          <CourseItem
            style={{
              color: timetableColors[theme][`color${color}`],
              backgroundColor: timetableColors[theme][`bgColor${color}`],
              borderColor: timetableColors[theme][`color${color}`],
            }}
            key={`${course[SyllabusKey.TERM]}-${
              course[SyllabusKey.TITLE]
            }-${startPeriod}-${endPeriod}`}
            displayPeriods={displayPeriods}
            top={startPeriod - 1}
            height={endPeriod - startPeriod + 1}
          >
            <CourseTitle>
              <StyledSimpleBar>{title}</StyledSimpleBar>
            </CourseTitle>
            <CourseLocation>{location}</CourseLocation>
          </CourseItem>
        )
      })

      return <CourseList key={index}>{listComponent}</CourseList>
    }
  )

  return (
    <StyledCourseColumn
      displayPeriods={displayPeriods}
      $isDark={theme === "dark"}
    >
      {distinctCourseListsComponent}
    </StyledCourseColumn>
  )
}

export default withTranslation("translation")(CourseColumn)
