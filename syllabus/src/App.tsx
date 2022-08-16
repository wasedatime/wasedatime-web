import React, { useEffect, lazy, Suspense, useContext } from "react";
import localForage from "localforage";

import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import API from "@aws-amplify/api";
import LoadingSpinner from "@bit/wasedatime.core.ts.ui.loading-spinner";
import { getIdToken } from "@bit/wasedatime.core.ts.utils.user";
import "semantic-ui-css/components/dropdown.min.css";
import { connect } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { fetchCourses, saveTimetable } from "@app/redux/actions";
import { ReduxRootState } from "@app/redux/reducers";
import { getAddedCoursePrefs } from "@app/redux/reducers/addedCourses";
import "@app/styles/styles.scss";
import { ThemeContext } from "@app/utils/theme-context";
import { useSetRecoilState } from "recoil";

import {
  addedCourses as addedCoursesState,
  fetchedCourses as fetchedCoursesState,
  addedCoursesOrderedIds as addedCoursesOrderedIdsState,
  addedCoursesSortOption as addedCoursesSortOptionsState,
  fetchedSchools as fetchedSchoolsState,
  isCoursesFetching as isCoursesFetchingState
} from "@app/recoil/atoms";
import { SavedState } from "@app/recoil/types";

const Timetable = lazy(() => import("@app/containers/TimetableContainer-bk"));
const Syllabus = lazy(() => import("@app/containers/SyllabusContainer"));
const Labs = lazy(() => import("@app/components/labs/Labs"));

interface IdAndPrefType {
  id: string;
  color: number;
  displayLang: string;
}

interface ReduxStateProps {
  addedCoursesPrefs: IdAndPrefType[];
}

interface ReduxDispatchProps {
  fetchCourses: () => void;
  saveTimetable: (idsAndPrefs: IdAndPrefType) => void;
}

const App = ({
  addedCoursesPrefs,
  fetchCourses,
  saveTimetable,
}: ReduxStateProps & ReduxDispatchProps) => {
  const { theme } = useContext(ThemeContext);
  const setAddedCourses = useSetRecoilState(addedCoursesState);
  const setAddedCoursesOrderIds = useSetRecoilState(addedCoursesOrderedIdsState);
  const setAddedCoursesSortOptions = useSetRecoilState(addedCoursesSortOptionsState);
  const setFetchedCourses = useSetRecoilState(fetchedCoursesState);
  const setFetchedSchools = useSetRecoilState(fetchedSchoolsState);
  const setIsCoursesFetching = useSetRecoilState(isCoursesFetchingState);

  const postTimetable = async (idsAndPrefs) => {
    const idToken = await getIdToken();
    API.post("wasedatime-dev", "/timetable", {
      body: { data: { courses: idsAndPrefs || [] } },
      headers: {
        Authorization: idToken,
      },
    });
  };

  const initAtoms = async () => {
    localForage
      .getItem("wasedatime-2021-state")
      .then((state: SavedState) => {
        if (state) {
          setAddedCourses(state.addedCourses.byId);
          setAddedCoursesOrderIds(state.addedCourses.orderedIds);
          setAddedCoursesSortOptions(state.addedCourses.sortingOption);
          setFetchedCourses(state.fetchedCourses.coursesBySchool);
          setFetchedSchools(state.fetchedCourses.schools);
          setIsCoursesFetching(state.fetchedCourses.isFetching);
        }
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    initAtoms();
    const f = async () => {
      await fetchCourses();

      const idToken = await getIdToken();
      if (idToken) {
        API.get("wasedatime-dev", "/timetable", {
          headers: {
            Authorization: idToken,
          },
          response: true,
        })
          .then((res) => {
            if (res.data.data.courses.length === 0) {
              if (addedCoursesPrefs.length > 0)
                postTimetable(addedCoursesPrefs);
            } else {
              saveTimetable(res.data.data.courses);
            }
          })
          .catch((e) => {
            postTimetable(addedCoursesPrefs);
          });
      }
    };
    f();
  }, []);

  return (
    <Suspense fallback={<LoadingSpinner theme={theme} message="Loading..." />}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme={theme}
      />
    </Suspense>
  );
};

const NotFound = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  useEffect(() => navigate("/"));

  return <LoadingSpinner theme={theme} message="Not found! Redirecting..." />;
};

const Dummy = () => <></>;

const AppRoutes = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      {(context) => {
        if (
          !context.location.pathname.includes("courses") &&
          window.location.pathname.includes("courses")
        ) {
          navigate(window.location.pathname);
        }
      }}
      <Route element={<Syllabus />} path="courses/syllabus" />
      <Route element={<Timetable />} path="courses/timetable" />
      <Route element={<Labs />} path="courses/labs" />
      <Route element={<Dummy />} path="home" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
};

const mapStateToProps = (state: ReduxRootState) => ({
  addedCoursesPrefs: getAddedCoursePrefs(state.addedCourses.byId),
});

const mapDispatchToProps = {
  fetchCourses,
  saveTimetable,
};

export default connect<ReduxStateProps, ReduxDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(App);
