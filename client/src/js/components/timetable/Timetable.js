import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { Wrapper, RowWrapper } from '../../styled-components/Wrapper';
import { Article } from '../../styled-components/Article';
import TimeRowList from './TimeRowList';
import DayColumnList from './DayColumnList';
import AddedCourseAndPrefList from './AddedCourseAndPrefList';
import withFetchCourses from '../../hocs/withFetchCourses';
import { media } from '../../utils/styledComponents';

const ExtendedRowWrapper = RowWrapper.extend`
  flex-wrap: wrap;
`

const Column = styled('div')`
  flex: ${props => `0 0 ${props.flexBasis};`}
  max-width: ${props => `${props.flexBasis};`}
  ${media.tablet`
    flex: 1 0 auto;
    max-width: 100%;
  `};
  ${media.phone`
    flex: 1 0 auto;
    max-width: 100%;
  `};
`

const ScrollableTimetable = styled('div')`
  display: flex;
  flex-direction: row;
  flex: 1 0 0;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
`

const Timetable = ({ addedCourses, addedCoursesAndPrefs }) => {
  const visibleAddedCoursesAndPrefs = addedCoursesAndPrefs.filter(elem => (
    elem.visibility === true
  ));
  return (
    <Wrapper>
      <Helmet>
        <title>WaseTime - Timetable</title>
        <meta name="description" content="Create Your Own Timetable at Waseda University." />
        <meta property="og:title" content="WaseTime - Timetable" />
        <meta property="og:description" content="Create Your Own Timetable at Waseda University." />
        <meta property="og:site_name" content="WaseTime - Timetable" />
      </Helmet>
      <ExtendedRowWrapper className="theme-default">
        <Column flexBasis="70%">
          <ScrollableTimetable>
            <TimeRowList
              addedCoursesAndPrefs={visibleAddedCoursesAndPrefs}
            />
            <DayColumnList
              addedCoursesAndPrefs={visibleAddedCoursesAndPrefs}
            />
          </ScrollableTimetable>
        </Column>
        <Column flexBasis="30%">
          <Wrapper>
            {!addedCoursesAndPrefs.length &&
              <Wrapper>
                <Article>
                  <h3>Welcome</h3>
                  <div>Hi! You haven't added any courses.
                  <br/>Go to <a href="./syllabus">Syllabus</a> and try adding one!</div>
                </Article>
              </Wrapper>
            }
            <AddedCourseAndPrefList
              addedCoursesAndPrefs={addedCoursesAndPrefs}
            />
          </Wrapper>
        </Column>
      </ExtendedRowWrapper>
    </Wrapper>
  );
}

export default withFetchCourses(Timetable);
