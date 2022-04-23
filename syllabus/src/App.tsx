import React, { useEffect, lazy, Suspense, useContext } from "react";

import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import API from "@aws-amplify/api";
import LoadingSpinner from "@bit/wasedatime.core.ts.ui.loading-spinner";
import { getIdToken } from "@bit/wasedatime.core.ts.utils.user";
import "semantic-ui-css/components/dropdown.min.css";
import { connect } from "react-redux";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/jelly.css";
// import "simplebar/dist/simplebar.min.css";

import Alert from "react-s-alert";

import { fetchCourses, saveTimetable } from "@app/redux/actions";
import { ReduxRootState } from "@app/redux/reducers";
import { getAddedCoursePrefs } from "@app/redux/reducers/addedCourses";
import "@app/styles/styles.scss";
import { ThemeContext } from "@app/utils/theme-context";

const Timetable = lazy(() => import("@app/containers/TimetableContainer"));
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

  const postTimetable = async (idsAndPrefs) => {
    const idToken = await getIdToken();
    API.post("wasedatime-dev", "/timetable", {
      body: { data: { courses: idsAndPrefs || [] } },
      headers: {
        Authorization: idToken,
      },
    });
  };

  useEffect(() => {
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
      <Alert timeout={3000} />
    </Suspense>
  );
};

const NotFound = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  useEffect(() => navigate("/"));

  return <LoadingSpinner theme={theme} message="Not found! Redirecting..." />;
};

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
      <Route element={<></>} path="home" />
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
