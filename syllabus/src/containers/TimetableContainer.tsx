import React, { lazy, Suspense, useEffect, useState, useContext } from "react";

import { Wrapper } from "@bit/wasedatime.core.ts.styles.wrapper";
import Header from "@bit/wasedatime.core.ts.ui.header";
import LoadingSpinner from "@bit/wasedatime.core.ts.ui.loading-spinner";
import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import SemesterSwitcher from "@app/components/SemesterSwitcher";
import { Semester } from "@app/constants/timetable-terms";
import { getAddedCoursesAndPrefsByTerm } from "@app/redux/reducers/addedCourses";
import { sortAddedCoursesAndPrefs } from "@app/utils/added-courses-and-prefs";
import { getCurrentSemester } from "@app/utils/get-current-semesters";
import { ThemeContext } from "@app/utils/theme-context";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { addedCourses as addedCoursesState, addedCoursesSortOption as sortingOptionState } from "@app/recoil/atoms";

const Timetable = lazy(() => import("@app/components/timetable/Timetable"));

const TimetableWrapper = styled(Wrapper)`
  height: 100vh;
  ${media.tablet`height: calc(100vh - 60px);`}
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  flex: 0 0 67px;
`;

const TimetableFlex = styled.div`
  overflow-y: auto;
`;

interface SemesterTitlesType {
  [key: string]: string;
}

const semesterTitles: SemesterTitlesType = {
  [Semester.SPRING]: "Spring Semester",
  [Semester.FALL]: "Fall Semester",
};

const TimetableContainer = () => {
  const addedCourses = useRecoilValue(addedCoursesState);
  const selectedSortingOption = useRecoilValue(sortingOptionState);
  const [ selectedSemester, setSelectedSemester ] = useState(getCurrentSemester());
  const [ selectedQuarter, setSelectedQuarter ] = useState("");

  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleToggleSemester = () => {
    setSelectedSemester(
      selectedSemester === Semester.SPRING ? Semester.FALL : Semester.SPRING
    );
    setSelectedQuarter("");
  };

  const handleToggleQuarter = (quarter: string) => {
    setSelectedQuarter(selectedQuarter === quarter ? "" : quarter);
  };

  useEffect(() => {
    if (window.location.pathname.includes("syllabus")) navigate("/courses/syllabus");
  }, []);

  const addedCoursesAndPrefsByTerm = getAddedCoursesAndPrefsByTerm(addedCourses);

  const addedCoursesAndPrefs =
    selectedQuarter.length > 0
      ? addedCoursesAndPrefsByTerm[selectedQuarter]
      : addedCoursesAndPrefsByTerm[selectedSemester];

  const sortedAddedCoursesAndPrefs = sortAddedCoursesAndPrefs(
    addedCoursesAndPrefs,
    selectedSortingOption
  );

  return (
    <TimetableWrapper className="theme-default">
      <Helmet>
        <title>WasedaTime - Timetable</title>
        <meta
          name="description"
          content="Create Your Own Timetable at Waseda University."
        />
        <meta property="og:title" content="WasedaTime - Timetable" />
        <meta
          property="og:description"
          content="Create Your Own Timetable at Waseda University."
        />
        <meta property="og:site_name" content="WasedaTime - Timetable" />
      </Helmet>
      <HeaderWrapper>
        <Header
          title={t("navigation.timetable")}
          onInputChange={() => {}}
          placeholder={t("timetable search placeholder")}
          inputText=""
          disabled
          isBlur={false}
          theme={theme}
          setTheme={setTheme}
          changeLang={(lng) => i18n.changeLanguage(lng)}
        />
      </HeaderWrapper>
      <TimetableFlex className="bg-light-bgMain dark:bg-dark-bgMain">
        <SemesterSwitcher
          semesterTitle={t(
            `timetable.${semesterTitles[selectedSemester]}`
          )}
          selectedSemester={selectedSemester}
          selectedQuarter={selectedQuarter}
          isQuarterDisplayed
          toggleSemester={handleToggleSemester}
          toggleQuarter={handleToggleQuarter}
          isSmallSize={false}
        />
        <Suspense
          fallback={<LoadingSpinner theme={theme} message="Loading..." />}
        >
          <Timetable addedCoursesAndPrefs={sortedAddedCoursesAndPrefs} />
        </Suspense>
      </TimetableFlex>
    </TimetableWrapper>
  );
}

export default TimetableContainer;
