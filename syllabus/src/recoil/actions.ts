import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  addedCourses as addedCoursesState,
  addedCoursesOrderedIds as addedCoursesOrderedIdsState,
  addedCoursesSortOptions,
  fetchedCourses as fetchedCoursesState,
  fetchedSchools as fetchedSchoolsState,
  isCoursesFetching as isCoursesFetchingState,
} from "@app/recoil/atoms";
import Course from "@app/types/course";
import { SyllabusKey } from "@app/constants/syllabus-data";
import {
  AddedCourses,
  AddedCoursesSortOptions,
  CourseIdAndPrefSavedOnline,
  FetchedCourses,
  FetchedSchools,
  LoadedTimetable,
} from "@app/recoil/types";
import schoolCodeMap from "@app/constants/school-code";
import { courseSchemaFullToShort } from "@app/utils/map-single-course-schema";
import API from "@aws-amplify/api";

// ADD_COURSE
export const addCourse = (course: Course, lang: string) => {
  const [addedCourses, setAddedCourses] = useRecoilState(addedCoursesState);
  const [orderedIds, setOrderedIds] = useRecoilState(
    addedCoursesOrderedIdsState
  );

  setAddedCourses({
    ...addedCourses,
    [course[SyllabusKey.ID]]: {
      course,
      pref: {
        color: orderedIds.length % 8,
        visibility: true,
        displayLang: lang,
      },
    },
  });

  setOrderedIds([...orderedIds, course[SyllabusKey.ID]]);
};

// REMOVE_COURSE
export const removeCourse = (courseId: string) => {
  const [addedCourses, setAddedCourses] = useRecoilState(addedCoursesState);
  const [orderedIds, setOrderedIds] = useRecoilState(
    addedCoursesOrderedIdsState
  );

  let newAddedCourses = { ...addedCourses };
  delete newAddedCourses[courseId];
  setAddedCourses(newAddedCourses);

  let newAddedCoursesIds = [...orderedIds];
  const index = newAddedCoursesIds.indexOf(courseId);
  if (index > -1) newAddedCoursesIds.splice(index, 1);
  setOrderedIds(newAddedCoursesIds);
};

// CHANGE_COURSE_COLOR
export const changeCourseColor = (courseId: string, colorCode: number) => {
  const [addedCourses, setAddedCourses] = useRecoilState(addedCoursesState);

  let newAddedCourses = { ...addedCourses };
  newAddedCourses[courseId].pref.color = colorCode;
  setAddedCourses(newAddedCourses);
};

// TOGGLE_COURSE_VISIBILITY
export const toggleCourseVisibility = (courseId: string) => {
  const [addedCourses, setAddedCourses] = useRecoilState(addedCoursesState);

  let newAddedCourses = { ...addedCourses };
  newAddedCourses[courseId].pref.visibility =
    !newAddedCourses[courseId].pref.visibility;
  setAddedCourses(newAddedCourses);
};

// CHANGE_COURSES_SORTING_OPTION
export const changeCoursesSortingOption = (option: AddedCoursesSortOptions) => {
  const setSortOptions = useSetRecoilState(addedCoursesSortOptions);
  setSortOptions(option);
};

// SAVE_TIMETABLE
export const saveTimetable = (idAndPrefs: LoadedTimetable) => {
  const fetchedSchools = useRecoilValue(fetchedSchoolsState);
  const fetchedCourses = useRecoilValue(fetchedCoursesState);
  const [addedCourses, setAddedCourses] = useRecoilState(addedCoursesState);
  const setOrderedIds = useSetRecoilState(addedCoursesOrderedIdsState);

  let unloadSchools: string[] = [];
  idAndPrefs.forEach((ip) => {
    const school = schoolCodeMap[ip.id.substring(0, 2)];
    if (
      (!fetchedSchools[school] || !fetchedSchools[school].active) &&
      !unloadSchools.includes(school)
    )
      unloadSchools.push(school);
  });

  Promise.all(
    unloadSchools.map(async (school) => {
      await fetchCoursesBySchool(school);
    })
  ).then(() => {
    let loadedAddedCourses: AddedCourses = {};
    let oldAddedCoursesList: CourseIdAndPrefSavedOnline[] = [];

    idAndPrefs.forEach((ip, i) => {
      const school = schoolCodeMap[ip.id.substring(0, 2)];
      const course =
        fetchedCourses[school] &&
        fetchedCourses[school].find((c) => c[SyllabusKey.ID] === ip.id);
      if (course) {
        const existingPref = addedCourses[ip.id] && addedCourses[ip.id].pref;
        loadedAddedCourses[ip.id] = {
          pref: {
            color: (existingPref && existingPref.color) || ip.color || i % 8,
            visibility: true,
            displayLang: ip.displayLang || "en",
          },
          course: {
            ...course,
            [SyllabusKey.SCHOOL]: school,
          },
        };
      } else {
        const savedOldCourseIdPref = addedCourses[ip.id];
        if (savedOldCourseIdPref) {
          loadedAddedCourses[ip.id] = {
            pref: {
              color: savedOldCourseIdPref.pref.color || i % 8,
              visibility: true,
              displayLang: savedOldCourseIdPref.pref.displayLang || "en",
            },
            course: savedOldCourseIdPref.course,
          };
        } else {
          oldAddedCoursesList.push(ip);
        }
      }

      Promise.all(
        oldAddedCoursesList.map(async (ip, i) => {
          try {
            const res = await API.get(
              "wasedatime-dev",
              `/syllabus?id=${ip.id}`,
              {
                headers: {
                  "Content-Type": "application/json",
                },
                response: true,
              }
            );
            if (!res.data.data) return null;

            return {
              id: ip.id,
              pref: {
                color:
                  ip.color ||
                  (idAndPrefs.length - oldAddedCoursesList.length + i) % 8,
                displayLang: ip.displayLang || "en",
                visibility: true,
              },
              course: {
                ...courseSchemaFullToShort(res.data.data),
                [SyllabusKey.SCHOOL]: schoolCodeMap[ip.id.substring(0, 2)],
              },
            };
          } catch (error) {
            return null;
          }
        })
      ).then((oldAddedCourses) => {
        oldAddedCourses.forEach((c) => {
          if (!c) return;
          loadedAddedCourses[c.id] = {
            pref: c?.pref,
            course: c?.course,
          };
        });
        setAddedCourses(loadedAddedCourses);
        setOrderedIds(Object.keys(loadedAddedCourses));
      });
    });
  });
};

// FETCH_COURSES_BY_SCHOOL
export const fetchCoursesBySchool = async (school: string) => {
  const [fetchedCourses, setFetchedCourses] =
    useRecoilState(fetchedCoursesState);
  const [fetchedSchools, setFetchedSchools] =
    useRecoilState(fetchedSchoolsState);
  const setIsCoursesFetching = useSetRecoilState(isCoursesFetchingState);

  const schools = Object.keys(fetchedSchools).filter(
    (school) => fetchedSchools[school].active
  );
  const oldestSchool: string =
    schools.length >= 10
      ? schools.sort(
          (a, b) => fetchedSchools[a].timestamp - fetchedSchools[b].timestamp
        )[0]
      : "";

  setIsCoursesFetching(true);

  try {
    const res = await API.get("wasedatime-dev", `/syllabus/${school}`, {
      headers: {
        "Content-Type": "application/json",
      },
      response: true,
    });

    setFetchedCourses({
      ...fetchedCourses,
      [school]: res.data,
      [oldestSchool]: [],
    });

    setFetchedSchools({
      ...fetchedSchools,
      [school]: {
        name: school,
        exp: res.headers.expires,
        active: true,
        timestamp: Date.now(),
      },
      [oldestSchool]: {
        name: oldestSchool,
        exp: "",
        active: false,
        timestamp: 0,
      },
    });
  } catch (error) {
    console.error(error);
  }

  setIsCoursesFetching(false);
};

// FETCH_COURSES
export const fetchCourses = async () => {
  const [fetchedCourses, setFetchedCourses] =
    useRecoilState(fetchedCoursesState);
  const [fetchedSchools, setFetchedSchools] =
    useRecoilState(fetchedSchoolsState);
  const setIsCoursesFetching = useSetRecoilState(isCoursesFetchingState);

  let coursesBySchool: FetchedCourses = {};
  let updatedSchools: FetchedSchools = {};
  const schools = Object.keys(fetchedSchools).filter((school) => {
    const { active, exp } = fetchedSchools[school];
    return active && (!exp || Date.parse(exp) <= Date.now());
  });

  if (schools.length === 0) return;

  setIsCoursesFetching(true);

  try {
    Promise.all(
      schools.map(async (school) => {
        const { name } = fetchedSchools[school];
        const res = await API.get("wasedatime-dev", `/syllabus/${name}`, {
          headers: {
            "Content-Type": "application/json",
          },
          response: true,
        });
        coursesBySchool[name] = res.data;
        updatedSchools[name] = {
          name: name,
          exp: res.headers.expires,
          active: true,
          timestamp: Date.now(),
        };
      })
    ).then(() => {
      setFetchedCourses({ ...fetchedCourses, ...coursesBySchool });
      setFetchedSchools({ ...fetchedSchools, ...updatedSchools });
    });
  } catch (error) {
    console.error(error);
  }

  setIsCoursesFetching(false);
};
