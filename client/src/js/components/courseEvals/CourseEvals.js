import React from 'react';
import MediaQuery from "react-responsive";
import qs from 'qs';
import { Helmet } from 'react-helmet';
import styled from "styled-components";
import axios from "axios";
import { normalize } from "normalizr";
import { coursesSchema } from "../../data/schema";
import { wasetimeApiStatic } from "../../config/api";
import { loadState, saveState } from "../../../localStorage";
import ReactGA from "react-ga";

import { media } from "../../styled-components/utils";
import { sizes } from "../../styled-components/utils";
import { RowWrapper } from "../../styled-components/Wrapper";
import { Overlay } from "../../styled-components/Overlay";
import { Wrapper } from "../../styled-components/Wrapper";
import RelatedCoursesButton from "./RelatedCoursesButton";
import Modal from "../../components/Modal";
import FetchedCourseItem from "../../containers/syllabus/FetchedCourseItem";
import EvaluationScalesCountContainer from "../../containers/courseEvals/EvaluationScalesCountContainer";
import RelatedCoursesContainer from "../../containers/courseEvals/RelatedCoursesContainer";
import EvalsList from "./EvalsList";
import LoadingSpinner from "../LoadingSpinner";
import { gaFilter } from "../../ga/eventCategories";
import {
  gaAppendActionWithLng,
  gaOpenModal,
  gaCloseModal,
} from "../../ga/eventActions";

export const LongWrapper = styled(Wrapper)`
  flex: 0 0 70%;
  ${media.tablet`flex: 0 0 auto; width: 100%`};
`;

export const ShortWrapper = styled(Wrapper)`
  flex: 0 0 30%;
  ${media.tablet`flex: 0 0 auto; width: 100%`};
`;

const ExtendedOverlay = styled(Overlay)`
  padding: 0 25px;
  ${media.tablet`padding-right: 2rem;`};
`;

const StyledSubHeading = styled("h2")`
  align-self: flex-start;
  margin-top: 1rem 0px;
  padding-left: 1rem;
  border-left: 5px solid rgb(148, 27, 47);
  font-size: 2.5rem;
  font-weight: 300;
  ${media.tablet`font-size: 2rem;`};
`;

const EvalsListWrapper = styled("div")`
  max-height: 60vh;
  overflow-y: auto;
`;

const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: "3001"
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "#fff",
    overflowY: "auto",
    overflowScrolling: "touch",
    WebkitOverflowScrolling: "touch",
    outline: "none",
    padding: 0
  }
};

const getCourse = (loadedCourses, courseID) => {
  // Return null if courses not saved in localStorage or the course to display is not contained in courses in localStorage
  // return loadedCourses ? loadedCourses[courseID] : null;

  // No course code in data from static file, so use the below dummy data for now.
  return {
    "_id":"2603013002012020260301300226",
    "course_code": 'INFP31ZL',
    "year":2020,
    "term":"springSem",
    "title":"Software Engineering A",
    "title_jp":"ソフトウェア工学A",
    "instructor":"FUKAZAWA, Yoshiaki/WASHIZAKI, Hironori",
    "instructor_jp":"深澤 良彰/鷲崎 弘宜",
    "occurrences":[
      {
         "day":5,
         "start_period":2,
         "end_period":2,
         "building":"63",
         "classroom":"202",
         "location":"63-202"
      }
    ],
    "lang":"JP",
    "keys":[
      {
         "school":"FSE",
         "key":"2603013002012020260301300226"
      }
    ]
  };
}

const getCourseCode = course => course["course_code"];

const getCourseKey = course => course["_id"].substring(0, 10);

async function fetchAndSaveCourses () {
  try {
    const res = await axios.get(wasetimeApiStatic.courseListAll);
    const fetchedCourses = res.data.filter(course => course.term.includes("fall"));
    const normalizedFetchedCourses = normalize(fetchedCourses, coursesSchema).entities.courses;
    saveState({ fetchedCourses: normalizedFetchedCourses });
    return normalizedFetchedCourses;
  } catch (error) {
    console.error(error);
  }
}

const getRelatedCourses = (loadedCourses, courseCode, thisCourseKey) => {
  // const relatedCourseIDs = Object.keys(loadedCourses).filter(courseID => loadedCourses[courseID].course_code === courseCode && getCourseKey(loadedCourses[courseID]) !== thisCourseKey);
  // const relatedCourses = relatedCourseIDs.map(courseID => loadedCourses[courseID]);
  // const sortedRelatedCourses = ...
  // return sortedRelatedCourses;

  // No course code in data from static file, so use the below dummy data for now.
  return [
    {
      "_id":"2603033019012020260303301926",
      "course_code": 'INFP31ZL',
      "year":2020,
      "term":"fallSem",
      "title":"Software Engineering B",
      "title_jp":"ソフトウェア工学B",
      "instructor":"HAGIMOTO, Junzo/HIRANABE, Kenji/FUKAZAWA, Yoshiaki/WASHIZAKI, Hironori",
      "instructor_jp":"萩本 順三/平鍋 健児/深澤 良彰/鷲崎 弘宜",
      "occurrences":[
        {
           "day":3,
           "start_period":5,
           "end_period":5,
           "building":"-1",
           "classroom":"undecided",
           "location":"-1-undecided"
        }
      ],
      "lang":"JP",
      "keys":[
        {
           "school":"FSE",
           "key":"2603033019012020260303301926"
        }
      ]
    },
    {
      "_id":"26GC02300301202026MC03300926",
      "course_code": 'INFP31ZL',
      "year":2020,
      "term":"fallSem",
      "title":"Software Engineering",
      "title_jp":"Software Engineering",
      "instructor":"ARCAINI, Paolo/KOBAYASHI, Tsutomu/FUKAZAWA, Yoshiaki/HONIDEN, Shinichi/WASHIZAKI, Hironori",
      "instructor_jp":"アルカイニ パオロ/小林 努/深澤 良彰/本位田 真一/鷲崎 弘宜",
      "occurrences":[
        {
           "day":1,
           "start_period":3,
           "end_period":3,
           "building":"-1",
           "classroom":"undecided",
           "location":"-1-undecided"
        }
      ],
      "keywords":[
        "IPSE"
      ],
      "lang":"EN",
      "keys":[
        {
           "school":"FSE",
           "key":"26GC02300301202026MC03300926"
        }
      ]
    }
  ];
}

async function getCourseEvalsByKey (courseKey) {
  try {
    // get evaluations by courseKeys
    const res = await axios.get(wasetimeApiStatic.courseEvalsBaseURL + courseKey);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

class CourseEvals extends React.Component {
  state = {
    thisCourse: {},
    relatedCourses: [],
    thisCourseEvals: [],
    relatedCourseEvals: [],
    avgSatisfaction: 0,
    avgDifficulty: 0,
    avgBenefit: 0,
    isLoaded: false,
    isModalOpen: false
  };

  async componentDidMount () {
    const courseID = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).courseID;
    const searchLang = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).searchLang;
    let loadedCourses = loadState().fetchedCourses;

    const thisCourse = getCourse(loadedCourses, courseID);
    if (thisCourse === null) loadedCourses = await fetchAndSaveCourses();

    const thisCourseCode = getCourseCode(thisCourse);
    const thisCourseKey = getCourseKey(thisCourse);

    // 1. Get evaluations of this course by key
    const thisCourseEvals = await getCourseEvalsByKey(thisCourseKey);

    // 2. Get related courses by code, sort them, and get the first k courses (k=3)
    const relatedCourses = getRelatedCourses(loadedCourses, thisCourseCode, thisCourseKey);

    // 3. Get evaluations of related courses by their keys
    let relatedCourseEvals = [];
    for (const course of relatedCourses) {
      const evals = await getCourseEvalsByKey(getCourseKey(course));
      relatedCourseEvals = [...evals, ...relatedCourseEvals];
    }

    let satisfactionSum = 0, difficultySum = 0, benefitSum = 0;
    thisCourseEvals.forEach(evaluation => {
      satisfactionSum += evaluation.satisfaction;
      difficultySum += evaluation.difficulty;
      benefitSum += evaluation.benefit;
    });
    // calculate the averages of scales and round them to the nearest .5
    const avgSatisfaction = Math.round(satisfactionSum / thisCourseEvals.length * 2) / 2;
    const avgDifficulty = Math.round(difficultySum / thisCourseEvals.length * 2) / 2;
    const avgBenefit = Math.round(benefitSum / thisCourseEvals.length * 2) / 2;

    this.setState({
      thisCourse: thisCourse,
      relatedCourses: relatedCourses,
      thisCourseEvals: thisCourseEvals,
      relatedCourseEvals: relatedCourseEvals,
      avgSatisfaction: avgSatisfaction,
      avgDifficulty: avgDifficulty,
      avgBenefit: avgBenefit,
      searchLang: searchLang,
      isLoaded: true
    });
  }

  handleToggleModal = event => {
    event.preventDefault();
    const gaAction = this.state.isModalOpen ? gaCloseModal : gaOpenModal;
    ReactGA.event({
      category: gaFilter,
      action: gaAppendActionWithLng(gaAction, this.props.lng)
    });
    this.setState((prevState, props) => {
      return {
        isModalOpen: !prevState.isModalOpen
      };
    });
  };

  render () {
    const { thisCourse, relatedCourses, thisCourseEvals, relatedCourseEvals, avgSatisfaction, avgDifficulty, avgBenefit, isLoaded, searchLang } = this.state;
    return isLoaded ? (
      <RowWrapper>
        <Helmet>
          <title>WasedaTime - Course Evaluations</title>
          <meta
            name="description"
            content="Latest Course Evaluations by Waseda Students."
            />
          <meta property="og:title" content="WasedaTime - Course Evaluations" />
          <meta
            property="og:description"
            content="Latest Course Evaluations by Waseda Students."
            />
          <meta property="og:site_name" content="WasedaTime - Course Evaluations" />
        </Helmet>

        <LongWrapper>
          <ExtendedOverlay>
            <div>
              <br />
              {
                isLoaded && <FetchedCourseItem searchTerm={""} searchLang={searchLang} course={thisCourse} isInCourseEvalsPage={true} />
              }

              <StyledSubHeading>
                Evaluations
              </StyledSubHeading>
              <EvalsListWrapper>
                <EvaluationScalesCountContainer
                  avgSatisfaction={avgSatisfaction}
                  avgDifficulty={avgDifficulty}
                  avgBenefit={avgBenefit}
                  thisCourseEvalsLength={thisCourseEvals.length}
                />
                <EvalsList evaluations={thisCourseEvals} />
              </EvalsListWrapper>

            </div>
          </ExtendedOverlay>
        </LongWrapper>

        {
          isLoaded && <MediaQuery minWidth={sizes.desktop}>
            {matches => {
              return matches ? (
                <ShortWrapper>
                  <RelatedCoursesContainer
                    relatedCourses={relatedCourses}
                    courseEvals={relatedCourseEvals}
                  />
                </ShortWrapper>
              ) : (
                <div>
                  <RelatedCoursesButton
                    isModalOpen={this.state.isModalOpen}
                    handleToggleModal={this.handleToggleModal}
                  />
                  <Modal isOpen={this.state.isModalOpen} style={modalStyle}>
                    <RelatedCoursesContainer
                      relatedCourses={relatedCourses}
                      courseEvals={relatedCourseEvals}
                    />
                  </Modal>
                </div>
              )
            }}
          </MediaQuery>
        }
      </RowWrapper>
    ) : <LoadingSpinner message={"Loading evaluations..."} />;;
  }
};

export default CourseEvals;
