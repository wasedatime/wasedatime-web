import React from 'react';
import styled from 'styled-components';

import { media } from '../../utils/styledComponents';

const StyledCourseRowList = styled('div')`
  flex: 1 0 55rem;
  border: solid 1px #ccc;
  border-right: none;
  border-radius: 3px;
  background: linear-gradient(180deg, #fff 50%, #eee 50%);
  background-size: 100% calc(100%/3.5);
  position: relative;
  min-width: 6.8rem;
`

const CourseItem = styled('div')`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: calc(100% / 7 * ${props => props.top});
  height: calc(100% / 7 * ${props => props.height} - 1px);
  width: 100%;
  padding: 0.3rem 0 0 0.1rem;
  ${'' /* padding: 0.3rem; */}
  ${'' /* text-align: center; */}
  ${'' /* justify-content: space-between; */}
  background-color: ${props => props.backgroundColor};
  border-left: 2px solid ${props => props.borderColor};
  color: ${props => props.borderColor};
`

const CourseTitle = styled('span')`
  flex: 1 1 75%;
  font-weight: bold;
  font-size: 1.4rem;
  ${'' /* overflow-x: scroll; */}
  overflow-x: hidden;
  ${'' /* overflow-y: hidden; */}
  word-break: break-word;
  text-overflow: ellipsis;
  text-align: center;
  ${media.tablet`font-size: 1.2rem;`};
  ${media.phone`font-size: 1.2rem;`};
`

const CourseLocation = styled('span')`
  display: inline-flex;
  flex: 1 0 auto;
  font-size: 1.4rem;
  word-break: break-all;
  align-items: center;
  justify-content: center;
  ${media.tablet`font-size: 1.2rem;`};
  ${media.phone`font-size: 1.2rem;`};
`

const CourseRowList = ({courses}) => {
  const courseRows = courses.map(course => {
    const start_period = Number(course.occurrences[0].start_period);
    const end_period = Number(course.occurrences[0].end_period);
    return (
      <CourseItem key={course.title}
        backgroundColor={'lightgreen'}
        borderColor={'green'}
        top={start_period - 1}
        height={end_period - start_period + 1}
        >
        <CourseTitle>
          {course.title}
        </CourseTitle>
        <CourseLocation>
          {course.occurrences[0].location}
        </CourseLocation>
      </CourseItem>
    )
  })
  return (
    <StyledCourseRowList>
      {courseRows}
    </StyledCourseRowList>
  )
}

export default CourseRowList;
