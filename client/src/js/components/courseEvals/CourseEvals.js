import React from "react";
import MediaQuery from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import qs from "qs";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import axios from "axios";
import { wasetimeApiStatic } from "../../config/api";
import ReactGA from "react-ga";
import { gaRelatedCourses } from "../../ga/eventCategories";
import {
  gaAppendActionWithLng,
  gaOpenModal,
  gaCloseModal,
} from "../../ga/eventActions";
import levenshtein from "levenshtein-edit-distance";
import { withNamespaces } from "react-i18next";
import withFetchCourses from "../../hocs/withFetchCourses";

import { media } from "../../styled-components/utils";
import { sizes } from "../../styled-components/utils";
import { RowWrapper } from "../../styled-components/Wrapper";
import { Overlay } from "../../styled-components/Overlay";
import { Wrapper } from "../../styled-components/Wrapper";

import ReviewLangSwitches from "./ReviewLangSwitches";
import RelatedCoursesButton from "./RelatedCoursesButton";
import Modal from "../../components/Modal";
import FetchError from "../../components/FetchError";
import FetchedCourseItem from "../../containers/syllabus/FetchedCourseItem";
import EvaluationScalesCountContainer from "./EvaluationScalesCountContainer";
import RelatedCoursesContainer from "./RelatedCoursesContainer";
import EvalsList from "./EvalsList";
import LoadingSpinner from "../LoadingSpinner";

export const LongWrapper = styled(Wrapper)`
  flex: 1 1 auto;
  ${media.tablet`flex: 0 0 auto; width: 100%`};
`;

export const ShortWrapper = styled(Wrapper)`
  flex: 0 0 24em;
  ${media.tablet`flex: 0 0 auto; width: 100%`};
`;

const ExtendedOverlay = styled(Overlay)`
  padding: 0 25px;
  ${media.tablet`padding-right: 2rem;`};
`;

const Announcement = styled("div")`
  background-color: #48af37;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 5px;
  padding: 5px 10px;
  font-size: 0.7em;
  border-radius: 3px;
`;

const StyledSubHeading = styled("h2")`
  align-self: flex-start;
  margin-top: 1rem 0px;
  padding-left: 1rem;
  border-left: 5px solid rgb(148, 27, 47);
  font-size: 2rem;
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
    zIndex: "1050",
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#ccc",
    overflowY: "auto",
    overflowScrolling: "touch",
    WebkitOverflowScrolling: "touch",
    outline: "none",
    padding: 0,
  },
};

const getCourse = (loadedCourses, courseID) => {
  // Return null if courses not saved in localStorage or the course to display is not saved in localStorage
  return loadedCourses ? loadedCourses[courseID] : null;
};

const getCourseKey = (course) =>
  course["keys"]["school"] === "SILS" &&
  course["title"].toLowerCase().includes("seminar")
    ? course["_id"].substring(0, 12)
    : course["_id"].substring(0, 10);

const getRelatedCourses = (
  loadedCourses,
  courseCode,
  thisCourseKey,
  thisCourseTitle
) => {
  const relatedCourseIDs = Object.keys(loadedCourses).filter(
    (courseID) =>
      loadedCourses[courseID].code === courseCode &&
      getCourseKey(loadedCourses[courseID]) !== thisCourseKey
  );
  const relatedCourses = relatedCourseIDs.map(
    (courseID) => loadedCourses[courseID]
  );
  const sortedRelatedCourses = relatedCourses
    .sort(
      (a, b) =>
        levenshtein(thisCourseTitle, a.title) -
        levenshtein(thisCourseTitle, b.title)
    )
    .slice(0, 10);
  return sortedRelatedCourses;
};

async function getCourseEvalsByKey(courseKey) {
  try {
    // get reviews by courseKeys
    const res = await axios.get(
      wasetimeApiStatic.courseEvalsBaseURL + courseKey
    );
    return res.data;
  } catch (error) {
    console.error(error);
    this.setState({ error: true });
  }
}

class CourseEvals extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
  }

  state = {
    thisCourse: {},
    relatedCourses: [],
    thisCourseEvals: [],
    relatedCourseEvals: [],
    avgSatisfaction: 0,
    avgDifficulty: 0,
    avgBenefit: 0,
    searchLang: "",
    reviewLang: "",
    isLoaded: false,
    isModalOpen: false,
    error: false,
  };

  componentDidMount() {
    this._isMounted = true;
    this._isMounted && this.loadEvaluationsAndRelatedCourses();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  async loadEvaluationsAndRelatedCourses() {
    const courseID = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    }).courseID;
    const searchLang = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    }).searchLang;
    let loadedCourses = this.props.fetchedCoursesById;
    //loadState().fetchedCourses.byId;

    const thisCourse = getCourse(loadedCourses, courseID);
    const thisCourseKey = getCourseKey(thisCourse);

    // 1. Get reviews of this course by key
    const thisCourseEvals = await getCourseEvalsByKey(thisCourseKey);

    // 2. Get related courses by code, sort them, and get the first k courses (k=3)
    const relatedCourses = getRelatedCourses(
      loadedCourses,
      thisCourse.code,
      thisCourseKey,
      thisCourse.title
    );

    // 3. Get reviews of related courses by their keys
    let relatedCourseEvals = {};
    for (const course of relatedCourses.slice(0, 3)) {
      const evals = await getCourseEvalsByKey(getCourseKey(course));
      if (evals.length > 0) relatedCourseEvals[getCourseKey(course)] = evals;
    }

    let satisfactionSum = 0,
      difficultySum = 0,
      benefitSum = 0;
    thisCourseEvals.forEach((review) => {
      satisfactionSum += review.satisfaction;
      difficultySum += review.difficulty;
      benefitSum += review.benefit;
    });
    // calculate the averages of scales and round them to the nearest .5
    const avgSatisfaction =
      Math.round((satisfactionSum / thisCourseEvals.length) * 2) / 2;
    const avgDifficulty =
      Math.round((difficultySum / thisCourseEvals.length) * 2) / 2;
    const avgBenefit =
      Math.round((benefitSum / thisCourseEvals.length) * 2) / 2;

    this._isMounted &&
      this.setState({
        thisCourse: thisCourse,
        relatedCourses: relatedCourses,
        thisCourseEvals: thisCourseEvals,
        relatedCourseEvals: relatedCourseEvals,
        avgSatisfaction: avgSatisfaction,
        avgDifficulty: avgDifficulty,
        avgBenefit: avgBenefit,
        searchLang: searchLang,
        reviewLang: this.props.lng,
        isLoaded: true,
      });
  }

  handleToggleModal = (event) => {
    event.preventDefault();
    const gaAction = this.state.isModalOpen ? gaCloseModal : gaOpenModal;
    ReactGA.event({
      category: gaRelatedCourses,
      action: gaAppendActionWithLng(gaAction, this.props.lng),
    });
    this.setState((prevState, props) => {
      return {
        isModalOpen: !prevState.isModalOpen,
      };
    });
  };

  switchReviewLang = (lang) => this.setState({ reviewLang: lang });

  render() {
    const {
      thisCourse,
      relatedCourses,
      thisCourseEvals,
      relatedCourseEvals,
      avgSatisfaction,
      avgDifficulty,
      avgBenefit,
      searchLang,
      reviewLang,
      isLoaded,
      error,
    } = this.state;
    if (error)
      return <FetchError onRetry={this.loadEvaluationsAndRelatedCourses} />;
    return isLoaded ? (
      <RowWrapper>
        <Helmet>
          <title>WasedaTime - Course Reviews</title>
          <meta
            name="description"
            content="Latest Course Reviews by Waseda Students."
          />
          <meta property="og:title" content="WasedaTime - Course Reviews" />
          <meta
            property="og:description"
            content="Latest Course Reviews by Waseda Students."
          />
          <meta property="og:site_name" content="WasedaTime - Course Reviews" />
        </Helmet>

        <LongWrapper>
          <ExtendedOverlay>
            <div>
              <Announcement>
                <FontAwesomeIcon icon={faBullhorn} /> We appreciate{" "}
                <a
                  href="https://www.facebook.com/WasedaTaiwaneseStudentAssociation/"
                  style={{ color: "#fff" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Waseda Taiwanese Student Association (WTSA)
                </a>
                's help for providing the reviews!
              </Announcement>
              {isLoaded && (
                <FetchedCourseItem
                  searchTerm={""}
                  searchLang={searchLang}
                  course={thisCourse}
                  isInCourseEvalsPage={true}
                />
              )}

              <StyledSubHeading>
                {this.props.t(`courseEvals.Reviews`)}{" "}
                <span style={{ marginLeft: "10px" }}>
                  <ReviewLangSwitches
                    reviewLang={reviewLang}
                    switchReviewLang={this.switchReviewLang}
                  />
                </span>
              </StyledSubHeading>
              <EvalsListWrapper>
                <EvaluationScalesCountContainer
                  avgSatisfaction={avgSatisfaction}
                  avgDifficulty={avgDifficulty}
                  avgBenefit={avgBenefit}
                  thisCourseEvalsLength={thisCourseEvals.length}
                />
                <EvalsList
                  reviews={thisCourseEvals}
                  searchLang={searchLang}
                  reviewLang={reviewLang}
                />
              </EvalsListWrapper>
              <br />
            </div>
          </ExtendedOverlay>
        </LongWrapper>

        {isLoaded && (
          <MediaQuery minWidth={sizes.desktop}>
            {(matches) => {
              return matches ? (
                <ShortWrapper>
                  <RelatedCoursesContainer
                    relatedCourses={relatedCourses}
                    courseEvals={relatedCourseEvals}
                    searchLang={searchLang}
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
                      searchLang={searchLang}
                    />
                  </Modal>
                </div>
              );
            }}
          </MediaQuery>
        )}
      </RowWrapper>
    ) : (
      <LoadingSpinner message={"Loading reviews..."} />
    );
  }
}

export default withFetchCourses(withNamespaces("translation")(CourseEvals));
