import React from "react";
import API from "@aws-amplify/api";
import { connect } from "react-redux";

import {
  fetchCourses,
  hydrateAddedCourses,
  saveTimetable,
} from "../actions/syllabus";
import {
  getIsFetching,
  getFetchedIds,
  getFetchedById,
  getError,
} from "../reducers/fetchedCourses";
import {
  getAddedCourses,
  getIsAddedCoursesEmpty,
  getPrefs,
  getIsPrefsEmpty,
  getAddedCoursesAndPrefs,
} from "../reducers/addedCourses";
import { getUserInfo } from "../reducers/user";
import LoadingSpinner from "../components/LoadingSpinner";
import FetchError from "../components/FetchError";

const withFetchCourses = (WrappedComponent) => {
  class WithFetchCoursesComponent extends React.Component {
    async componentDidMount() {
      const {
        fetchedCourseIds,
        fetchedCoursesById,
        fetchedSchools,
        userInfo,
        fetchCourses,
        saveTimetable,
      } = this.props;

      if (!fetchedCourseIds.length) {
        fetchCourses();
      }

      await Promise.all(
        fetchedSchools.map(async (school) => {
          await API.head("wasedatime-dev", `/syllabus/${school}`, {
            headers: {
              "Content-Type": "application/json",
            },
            response: true,
          })
            .then((res) => console.log(res.headers["last-modified"]))
            .catch((e) => console.log(e));
          return;
        })
      );

      // Only signed in user can sync timetable
      if (
        userInfo &&
        userInfo &&
        userInfo.idToken.payload.exp > Date.now() / 1000
      ) {
        API.get("wasedatime-dev", "/timetable", {
          headers: {
            Authorization: userInfo ? userInfo.idToken.jwtToken : "",
          },
          response: true,
        })
          .then((res) => {
            // res.data: {
            //  success: BOOL,
            //  data: [
            //     {id: STR, color: INT, displayLang: STR}
            //  ],
            //  message: STR
            // }
            saveTimetable(res.data.data.courses, fetchedCoursesById);
          })
          .catch((e) => {
            console.error(e.response);
            if (e.response && !e.response.data.data) this.postTimetable();
          });
      }
    }

    uniqueCoursesAndPrefs(v, i, self) {
      return self.indexOf(self.find((c) => c.id === v.id)) === i;
    }

    postTimetable() {
      const { addedCoursesAndPrefs, userInfo } = this.props;
      const combinedAddedCoursesAndPrefs = [
        ...addedCoursesAndPrefs.fall,
        ...addedCoursesAndPrefs.spring,
      ].filter(this.uniqueCoursesAndPrefs);
      const coursesAndPrefsToSave = combinedAddedCoursesAndPrefs.map((c) => ({
        id: c.id,
        color: c.color,
        displayLang: c.displayLang,
      }));
      API.post("wasedatime-dev", "/timetable", {
        body: { data: { courses: coursesAndPrefsToSave || [] } },
        headers: {
          Authorization: userInfo ? userInfo.idToken.jwtToken : "",
        },
      });
    }

    componentDidUpdate(prevProps) {
      const {
        isAddedCoursesEmpty,
        prefs,
        isPrefsEmpty,
        fetchedCourseIds,
        fetchedCoursesById,
        hydrateAddedCourses,
      } = this.props;
      // if prefs is not empty, addedCourses is empty, and courses are fetched
      if (!isPrefsEmpty && isAddedCoursesEmpty && fetchedCourseIds.length) {
        hydrateAddedCourses(prefs, fetchedCoursesById);
      }
    }

    render() {
      const {
        isFetching,
        fetchedCourseIds,
        fetchedCoursesById,
        error,
        addedCourses,
        isAddedCoursesEmpty,
        isPrefsEmpty,
        addedCoursesAndPrefs,
        fetchCourses,
        ...rest
      } = this.props;

      if (isFetching && !fetchedCourseIds.length) {
        return <LoadingSpinner message={"Loading the lastest syllabus..."} />;
      }
      if (error && !fetchedCourseIds.length) {
        return <FetchError onRetry={fetchCourses} />;
      }
      if (!isPrefsEmpty && isAddedCoursesEmpty) {
        return (
          <LoadingSpinner message={"Initializing your added courses..."} />
        );
      }

      const fetchedCourses = fetchedCourseIds.map(
        (id) => fetchedCoursesById[id]
      );

      return (
        <WrappedComponent
          fetchedCourses={fetchedCourses}
          fetchedCoursesById={fetchedCoursesById}
          addedCourses={addedCourses}
          addedCoursesAndPrefs={addedCoursesAndPrefs}
          {...rest}
        />
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      isFetching: getIsFetching(state.fetchedCourses),
      fetchedCourseIds: getFetchedIds(state.fetchedCourses),
      fetchedCoursesById: getFetchedById(state.fetchedCourses),
      error: getError(state.fetchedCourses),
      addedCourses: getAddedCourses(state.addedCourses),
      isAddedCoursesEmpty: getIsAddedCoursesEmpty(state.addedCourses),
      prefs: getPrefs(state.addedCourses),
      isPrefsEmpty: getIsPrefsEmpty(state.addedCourses),
      addedCoursesAndPrefs: getAddedCoursesAndPrefs(state.addedCourses),
      userInfo: getUserInfo(state),
      fetchedSchools: state.fetchedCourses.schools,
      fetchedlastModBySchool: state.fetchedCourses.lastModBySchool,
    };
  };

  const mapDispatchToProps = {
    fetchCourses,
    hydrateAddedCourses,
    saveTimetable,
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithFetchCoursesComponent);
};

export default withFetchCourses;
