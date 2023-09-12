import React, { useState, useEffect } from "react"

import { Wrapper, media } from "wasedatime-ui"
import styled from "styled-components"

import { UnstyledUList } from "@app/components/styles/List"
import AddedCourseAndPrefItem from "@app/containers/AddedCourseAndPrefItem"
import CourseListSummaryContainer from "@app/containers/CourseListSummaryContainer"
import Course from "@app/types/course"

const ExtendedWrapper = styled(Wrapper)`
  padding: 0 1em;
  ${media("tablet", `margin-top: 1rem;`)};
`

const ExtendedUnstyledUList = styled(UnstyledUList)`
  font-size: 14px;
  max-height: calc(100vh - 160px);
  overflow-y: auto;
  ${media("tablet", `max-height: none;`)};
`

interface Props {
  addedCoursesAndPrefs: {
    pref: {
      color: number
      displayLang: string
      visibility: boolean
    }
    course: Course
  }[]
}

const AddedCourseAndPrefList = ({ addedCoursesAndPrefs }: Props) => {
  return (
    <ExtendedWrapper>
      <CourseListSummaryContainer
        courses={addedCoursesAndPrefs.map((cp) => cp.course)}
      />
      <Wrapper>
        <ExtendedUnstyledUList>
          {addedCoursesAndPrefs.map((courseAndPref, i) => (
            <React.Fragment key={i}>
              <AddedCourseAndPrefItem addedCourseAndPref={courseAndPref} />
              <hr
                style={{
                  border: "none",
                }}
              />
            </React.Fragment>
          ))}
        </ExtendedUnstyledUList>
      </Wrapper>
    </ExtendedWrapper>
  )
}

export default AddedCourseAndPrefList
