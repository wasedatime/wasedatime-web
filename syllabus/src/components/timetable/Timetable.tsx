import React from "react";

import { RowWrapper, Wrapper } from "@bit/wasedatime.core.ts.styles.wrapper";
import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import { WithTranslation, withTranslation } from "react-i18next";
import Message from "semantic-ui-react/dist/commonjs/collections/Message";
import styled from "styled-components";

import { Article, Section } from "@app/components/styles/Article";
import AddedCourseAndPrefList from "@app/components/timetable/AddedCourseAndPrefList";
import DayColumnList from "@app/components/timetable/DayColumnList";
import TimeRowList from "@app/components/timetable/TimeRowList";
import { SyllabusKey } from "@app/constants/syllabus-data";
import Course from "@app/types/course";
import { ThemeContext } from "@app/utils/theme-context";
import timetableColors from "@app/constants/timetable-colors";

type ColumnProps = {
  flexBasis: string;
};

type StyledMessageProps = {
  $isDark: boolean;
};

const ExtendedRowWrapper = styled(RowWrapper)`
  flex-wrap: wrap;
  padding: 0.2em;
  padding-left: 1em;
  ${media.phone`
    padding: 0
  `};
`;

const Column = styled.div<ColumnProps>`
  flex: ${(props) => `0 0 ${props.flexBasis};`}
  max-width: ${(props) => `${props.flexBasis};`}
  ${media.tablet`
    flex: 1 0 auto;
    max-width: 100vw;
  `};
  ${media.phone`
    flex: 1 0 auto;
    max-width: 100vw;
  `};
`;

const ScrollableTimetable = styled("div")`
  display: flex;
  flex-direction: row;
  flex: 1 0 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

const StyledMessage = styled(Message)<StyledMessageProps>`
  ${(props) => props.$isDark && "opacity: 0.6;"}
`;

interface Props extends WithTranslation {
  addedCoursesAndPrefs: {
    pref: {
      color: number;
      displayLang: string;
      visibility: boolean;
    };
    course: Course;
  }[];
}

const Timetable = ({ addedCoursesAndPrefs, t }: Props) => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const visibleAddedCoursesAndPrefs = addedCoursesAndPrefs.filter(
    (elem) => elem.pref.visibility === true
  );

  const largestDayAndPeriod = visibleAddedCoursesAndPrefs.reduce(
    (acc, elem) => {
      const occurrences = elem.course[SyllabusKey.OCCURRENCES];

      return occurrences.reduce((acc, occurrence) => {
        const unformattedPeriod = occurrence[SyllabusKey.OCC_PERIOD];
        const maxPeriod =
          unformattedPeriod === -1
            ? 0
            : unformattedPeriod > 9
            ? unformattedPeriod % 10
            : unformattedPeriod;

        return {
          ...acc,
          day: Math.max(acc.day, occurrence[SyllabusKey.OCC_DAY]),
          period: Math.max(acc.period, maxPeriod),
        };
      }, acc);
    },
    { day: 1, period: 1 }
  );

  const { day: largestDay, period: largestPeriod } = largestDayAndPeriod;

  return (
    <ExtendedRowWrapper className="theme-default bg-light-bgMain dark:bg-dark-bgMain">
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
              <Article className="bg-light-bgMain dark:bg-dark-bgMain">
                <h5 className="text-light-text1 dark:text-dark-text1">
                  {t("timetable.welcome")} 🤗
                </h5>
                <br />
                <Section>
                  <Message
                    warning
                    header={
                      <h5
                        style={
                          theme === "dark"
                            ? { color: timetableColors.light.lightBrown }
                            : {}
                        }
                      >
                        <b>{t("timetable.You haven't added any courses")}</b>
                      </h5>
                    }
                    content={
                      <p
                        style={
                          theme === "dark"
                            ? { color: timetableColors.light.lightBrown }
                            : {}
                        }
                      >
                        {t("timetable.Go to")}{" "}
                        <a href="/syllabus">{t("timetable.Syllabus")} </a>{" "}
                        {t("timetable.and try adding one!")}
                      </p>
                    }
                    size="mini"
                    $isDark={theme === "dark"}
                  />
                </Section>
                <Section>
                  <StyledMessage success size="mini" $isDark={theme === "dark"}>
                    <p>{t("timetable.SaveSpace")}</p>
                  </StyledMessage>
                </Section>
              </Article>
            </Wrapper>
          )}
          <AddedCourseAndPrefList addedCoursesAndPrefs={addedCoursesAndPrefs} />
        </Wrapper>
      </Column>
    </ExtendedRowWrapper>
  );
};

export default withTranslation("translation")(Timetable);
