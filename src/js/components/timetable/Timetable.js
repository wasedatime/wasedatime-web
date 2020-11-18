import React from "react";
import styled from "styled-components";

import { RowWrapper, Wrapper } from "../../styled-components/Wrapper";
import { Article, Section } from "../../styled-components/Article";
import TimeRowList from "./TimeRowList";
import DayColumnList from "./DayColumnList";
import AddedCourseAndPrefListContainer from "../../containers/timetable/AddedCourseAndPrefListContainer";
import { media } from "../../styled-components/utils";
import { withNamespaces } from "react-i18next";
import { SYLLABUS_KEYS } from "../../config/syllabusKeys";

const ExtendedRowWrapper = styled(RowWrapper)`
  flex-wrap: wrap;
  padding: 0.2em;
  ${media.phone`
    padding: 0
  `};
`;

const Column = styled("div")`
  flex: ${(props) => `0 0 ${props.flexBasis};`}
  max-width: ${(props) => `${props.flexBasis};`}
  ${media.tablet`
    flex: 1 0 auto;
    max-width: 100%;
  `};
  ${media.phone`
    flex: 1 0 auto;
    max-width: 100%;
  `};
`;

const ScrollableTimetable = styled("div")`
  display: flex;
  flex-direction: row;
  flex: 1 0 0;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
`;

const Timetable = ({ addedCoursesAndPrefs, semesterKey, t }) => {
  const visibleAddedCoursesAndPrefs = addedCoursesAndPrefs.filter(
    (elem) => elem.visibility === true
  );

  const largestDayAndPeriod = visibleAddedCoursesAndPrefs.reduce(
    (acc, elem) => {
      const occurrences = elem.course[SYLLABUS_KEYS.OCCURRENCES];
      return occurrences.reduce((acc, occurrence) => {
        return {
          ...acc,
          day: Math.max(acc.day, occurrence[SYLLABUS_KEYS.OCC_DAY]),
          period: Math.max(acc.period, occurrence[SYLLABUS_KEYS.OCC_PERIOD]),
        };
      }, acc);
    },
    { day: 1, period: 1 }
  );

  const { day: largestDay, period: largestPeriod } = largestDayAndPeriod;
  return (
    <ExtendedRowWrapper className="theme-default">
      <Column flexBasis="70%">
        <ScrollableTimetable>
          <TimeRowList largestPeriod={largestPeriod} />
          <DayColumnList
            largestDay={largestDay}
            largestPeriod={largestPeriod}
            addedCoursesAndPrefs={visibleAddedCoursesAndPrefs}
          />
        </ScrollableTimetable>
      </Column>
      <Column flexBasis="30%">
        <Wrapper>
          {!addedCoursesAndPrefs.length && (
            <Wrapper>
              <Article>
                <h3>{t("timetable.welcome")}</h3>
                <Section>
                  {t("timetable.You haven't added any courses")}
                  <br />
                  {t("timetable.Go to")}{" "}
                  <a href="./syllabus">{t("timetable.Syllabus")} </a>{" "}
                  {t("timetable.and try adding one!")}
                </Section>
                <Section> {t("timetable.SaveSpace")} </Section>
              </Article>
            </Wrapper>
          )}
          <AddedCourseAndPrefListContainer
            addedCoursesAndPrefs={addedCoursesAndPrefs}
            semesterKey={semesterKey}
          />
        </Wrapper>
      </Column>
    </ExtendedRowWrapper>
  );
};

export default withNamespaces("translation")(Timetable);
