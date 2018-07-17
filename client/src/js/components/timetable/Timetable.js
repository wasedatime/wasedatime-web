import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { Wrapper, RowWrapper } from '../../styled-components/Wrapper';
import { Article, Section } from '../../styled-components/Article';
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

const Timetable = ({ addedCoursesAndPrefs }) => {
  window.scrollTo({top: 0});
  const visibleAddedCoursesAndPrefs = addedCoursesAndPrefs.filter(elem => (
    elem.visibility === true
  ));

  const largestDayAndPeriod = visibleAddedCoursesAndPrefs.reduce((acc, elem) => {
    const occurrences = elem.course.occurrences;
    return occurrences.reduce((acc, occurrence) => {
      return {
        ...acc,
        day: Math.max(acc.day, occurrence.day),
        period: Math.max(acc.period, occurrence.end_period)
      }
    }, acc);
  }, {day: 1, period: 1});

  const { day: largestDay, period: largestPeriod } = largestDayAndPeriod;
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
              largestPeriod={largestPeriod}
            />
            <DayColumnList
              largestDay={largestDay}
              largestPeriod={largestPeriod}
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
                  <Section>
                    Hi! You haven't added any courses.<br/>
                    Go to <a href="./syllabus">Syllabus</a> and try adding one!
                  </Section>
                  <Section>
                    Period 6, 7 and Saturday are hidden by default to save space.
                    They will appear once the corresponding course is selected.
                  </Section>
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
