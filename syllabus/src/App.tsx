import React, { useState, useEffect, lazy, Suspense } from "react";
import { Router, Redirect, navigate } from "@reach/router";
// import Timetable from "./containers/TimetableContainer";
// import Syllabus from "./containers/SyllabusContainer";
import { getIdToken } from "@bit/wasedatime.core.ts.utils.user";
import { getAddedCoursePrefs } from "./redux/reducers/addedCourses";
import { ReduxRootState } from "./redux/reducers";
import { fetchCourses, saveTimetable } from "./redux/actions";
import { connect } from "react-redux";
import API from "@aws-amplify/api";
const Timetable = lazy(() => import("./containers/TimetableContainer"));
const Syllabus = lazy(() => import("./containers/SyllabusContainer"));
import LoadingSpinner from "@bit/wasedatime.core.ts.ui.loading-spinner";

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
            if (
              e.response &&
              !e.response.data.data &&
              addedCoursesPrefs.length > 0
            )
              postTimetable(addedCoursesPrefs);
          });
      }
    };
    f();
  }, []);

  return (
    <Suspense fallback={<LoadingSpinner message="Loading..." />}>
      <Router>
        <Syllabus exact path="courses/syllabus" />
        <Timetable exact path="courses/timetable" />
      </Router>
    </Suspense>
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
