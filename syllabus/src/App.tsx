import React, { useState, useEffect } from "react";
import { Router, Redirect, navigate } from "@reach/router";
import Timetable from "./containers/TimetableContainer";
import Syllabus from "./containers/SyllabusContainer";
import { getIdToken } from "@bit/wasedatime.core.ts.utils.user";
import { getAddedCoursePrefs } from "./redux/reducers/addedCourses";
import { ReduxRootState } from "./redux/reducers";
import { saveTimetable } from "./redux/actions";
import { connect } from "react-redux";
import API from "@aws-amplify/api";

interface IdAndPrefType {
  id: string;
  color: number;
  displayLang: string;
}

interface ReduxStateProps {
  addedCoursesPrefs: IdAndPrefType[];
}

interface ReduxDispatchProps {
  saveTimetable: (idsAndPrefs: IdAndPrefType) => void;
}

const App = ({
  addedCoursesPrefs,
  saveTimetable,
}: ReduxStateProps & ReduxDispatchProps) => {
  const [timetableSavedOrPosted, setTimetableSavedOrPosted] = useState(false);

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
    if (!timetableSavedOrPosted) {
      const f = async () => {
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
        setTimetableSavedOrPosted(true);
      };
      f();
    }
  }, []);

  return (
    <Router>
      <Syllabus exact path="courses/syllabus" />
      <Timetable exact path="courses/timetable" />
    </Router>
  );
};

const mapStateToProps = (state: ReduxRootState) => ({
  addedCoursesPrefs: getAddedCoursePrefs(state.addedCourses.byId),
});

const mapDispatchToProps = {
  saveTimetable,
};

export default connect<ReduxStateProps, ReduxDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(App);
