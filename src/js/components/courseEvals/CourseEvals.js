import React from "react";
import MediaQuery from "react-responsive";
import { Doughnut } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { Segment, Grid, Table, Statistic, Divider } from "semantic-ui-react";
import qs from "qs";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import axios from "axios";
import { wasetimeApiStatic } from "../../config/api";
import ReactGA from "react-ga";
import { gaRelatedCourses } from "../../ga/eventCategories";
import {
  gaAppendActionWithLng,
  gaCloseModal,
  gaOpenModal,
} from "../../ga/eventActions";
import { SYLLABUS_KEYS } from "../../config/syllabusKeys";
import levenshtein from "levenshtein-edit-distance";
import { withNamespaces } from "react-i18next";
import withFetchCourses from "../../hocs/withFetchCourses";

import { media, sizes } from "../../styled-components/utils";
import { RowWrapper, Wrapper } from "../../styled-components/Wrapper";
import { Overlay } from "../../styled-components/Overlay";

import ReviewLangSwitches from "./ReviewLangSwitches";
import RelatedCoursesButton from "./RelatedCoursesButton";
import Modal from "../Modal";
import FetchError from "../FetchError";
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
  line-height: normal;
`;

const Disclaimer = styled(Announcement)`
  background-color: #aaa;
  margin: 0.5rem 0px;
`;

const StyledSubHeading = styled("h2")`
  align-self: flex-start;
  margin: 1rem 0px;
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
    zIndex: "3030",
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
  ["SILS", "PSE"].includes(course[SYLLABUS_KEYS.SCHOOL]) &&
  course[SYLLABUS_KEYS.TITLE].toLowerCase().includes("seminar")
    ? course[SYLLABUS_KEYS.ID].substring(0, 12)
    : course[SYLLABUS_KEYS.ID].substring(0, 10);

const getRelatedCourses = (
  loadedCourses,
  courseCode,
  thisCourseKey,
  thisCourseTitle,
  thisCourseSchool
) => {
  const relatedCourseIDs = Object.keys(loadedCourses).filter(
    (courseID) =>
      loadedCourses[courseID][SYLLABUS_KEYS.CODE] === courseCode &&
      getCourseKey(loadedCourses[courseID]) !== thisCourseKey
  );
  const relatedCourses = relatedCourseIDs.map(
    (courseID) => loadedCourses[courseID]
  );
  const sortedRelatedCourses = relatedCourses
    .sort((a, b) => {
      if (
        a[SYLLABUS_KEYS.SCHOOL] === thisCourseSchool &&
        b[SYLLABUS_KEYS.SCHOOL] !== thisCourseSchool
      )
        return -1;
      if (
        a[SYLLABUS_KEYS.SCHOOL] !== thisCourseSchool &&
        b[SYLLABUS_KEYS.SCHOOL] === thisCourseSchool
      )
        return 1;
      return (
        levenshtein(thisCourseTitle, a[SYLLABUS_KEYS.TITLE]) -
        levenshtein(thisCourseTitle, b[SYLLABUS_KEYS.TITLE])
      );
    })
    .slice(0, 10);
  return sortedRelatedCourses;
};

const evalTypeMap = ["Exam", "Papers", "Class Participation", "Others"];
const evalColorMap = ["#c2402c", "#c87f3d", "#a2ae67", "#6c92b4", "#28b4a9"];

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

    // 1. Get related courses by code, sort them, and get the first k courses (k=10)
    const relatedCourses = getRelatedCourses(
      loadedCourses,
      thisCourse[SYLLABUS_KEYS.CODE],
      thisCourseKey,
      thisCourse[SYLLABUS_KEYS.TITLE],
      thisCourse[SYLLABUS_KEYS.SCHOOL]
    );

    // 2. Make the key of this course and keys of top 3 related courses into a list
    const courseKeysToFetchEvals = [thisCourseKey].concat(
      relatedCourses.slice(0, 3).map((course) => getCourseKey(course))
    );

    // 3. Fetch the reviews by posting the keys list
    const courseEvals = await this.getCourseEvalsByKey(courseKeysToFetchEvals);
    let thisCourseEvals = {};
    let relatedCourseEvals = {};
    courseEvals.forEach((c, i) => {
      if (i === 0) thisCourseEvals = c.comments;
      else relatedCourseEvals[courseKeysToFetchEvals[i]] = c.comments;
    });

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

  async getCourseEvalsByKey(courseKeys) {
    try {
      // get reviews by courseKeys
      const res = await axios.post(process.env.REACT_APP_REVIEWS_API_BASE_URL, {
        course_keys: courseKeys,
      });
      return res.data.data;
    } catch (error) {
      console.error(error);
      this.setState({ error: true });
    }
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
  mapCourseType = (course) => {
    if (course[SYLLABUS_KEYS.TYPE] === -1) return "";
    const courseTypeMap = [
      "Lecture",
      "Seminar",
      "Work",
      "Foreign Langauge",
      "On-demand",
      "Thesis",
      "Graduate Research",
      "Practice",
      "Blended",
    ];
    return courseTypeMap[course[SYLLABUS_KEYS.TYPE]];
  };

  mapCourseLevel = (course) => {
    if (course[SYLLABUS_KEYS.TYPE] === -1) return "";
    const courseLevelMap = [
      "Beginner",
      "Intermediate",
      "Advanced",
      "Final-stage",
      "Master",
      "Doctor",
    ];
    return courseLevelMap[course[SYLLABUS_KEYS.LEVEL]];
  };

  evalChartData = (course) => {
    return {
      datasets: [
        {
          data: course[SYLLABUS_KEYS.EVAL].map(
            (e) => e[SYLLABUS_KEYS.EVAL_PERCENT]
          ),
          backgroundColor: course[SYLLABUS_KEYS.EVAL].map(
            (e) => evalColorMap[e[SYLLABUS_KEYS.EVAL_TYPE]]
          ),
        },
      ],
      labels: course[SYLLABUS_KEYS.EVAL].map(
        (e) => evalTypeMap[e[SYLLABUS_KEYS.EVAL_TYPE]]
      ),
    };
  };

  evalChartOptions = () => ({
    legend: {
      position: "left",
      labels: {
        boxWidth: 12,
      },
    },
    tooltips: {
      callbacks: {
        title: function(tooltipItem, data) {
          return data["labels"][tooltipItem[0]["index"]];
        },
        label: function(tooltipItem, data) {
          return " " + data["datasets"][0]["data"][tooltipItem["index"]] + "%";
        },
      },
    },
  });

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
                <FontAwesomeIcon icon={faBullhorn} />{" "}
                {this.props.t(`courseEvals.Thank WTSA 1`)}{" "}
                <a
                  href="https://www.facebook.com/WasedaTaiwaneseStudentAssociation/"
                  style={{ color: "#fff" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {this.props.t(`courseEvals.WTSA`)}
                </a>
                {this.props.t(`courseEvals.Thank WTSA 2`)}
              </Announcement>
              {isLoaded && (
                <FetchedCourseItem
                  searchTerm={""}
                  searchLang={searchLang}
                  course={thisCourse}
                  isInCourseEvalsPage={true}
                />
              )}

              <Segment style={{ fontSize: "1em" }}>
                <Grid columns={2} stackable>
                  <Grid.Column>
                    <Grid columns={2} style={{ padding: "1em 5em" }}>
                      <Grid.Column style={{ textAlign: "center" }}>
                        <Statistic>
                          <Statistic.Value>
                            {thisCourse[SYLLABUS_KEYS.MIN_YEAR]}
                          </Statistic.Value>
                          <Statistic.Label>Min Year</Statistic.Label>
                        </Statistic>
                      </Grid.Column>
                      <Grid.Column style={{ textAlign: "center" }}>
                        <Statistic>
                          <Statistic.Value>
                            {thisCourse[SYLLABUS_KEYS.CREDIT]}
                          </Statistic.Value>
                          <Statistic.Label>Credit</Statistic.Label>
                        </Statistic>
                      </Grid.Column>
                    </Grid>
                  </Grid.Column>
                  <Grid.Column>
                    <Table unstackable>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>Type</Table.Cell>
                          <Table.Cell>
                            <b>{this.mapCourseType(thisCourse)}</b>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Category</Table.Cell>
                          <Table.Cell>
                            <b>{thisCourse[SYLLABUS_KEYS.CATEGORY]}</b>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Level</Table.Cell>
                          <Table.Cell>
                            <b>{this.mapCourseLevel(thisCourse)}</b>
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </Grid.Column>
                </Grid>

                <Divider horizontal style={{ margin: "3em" }}>
                  Evaluation
                </Divider>

                <Grid columns={2} stackable>
                  <Grid.Column>
                    <Doughnut
                      data={this.evalChartData(thisCourse)}
                      options={this.evalChartOptions()}
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Table>
                      <Table.Body>
                        {thisCourse[SYLLABUS_KEYS.EVAL].map((e) => (
                          <Table.Row>
                            <Table.Cell>
                              <span
                                style={{
                                  color:
                                    evalColorMap[e[SYLLABUS_KEYS.EVAL_TYPE]],
                                  fontSize: "2em",
                                }}
                              >
                                ●
                              </span>{" "}
                              {evalTypeMap[e[SYLLABUS_KEYS.EVAL_TYPE]]}
                            </Table.Cell>
                            <Table.Cell>
                              {e[SYLLABUS_KEYS.EVAL_CRITERIA]}
                            </Table.Cell>
                          </Table.Row>
                        ))}
                      </Table.Body>
                    </Table>
                  </Grid.Column>
                </Grid>
              </Segment>

              <StyledSubHeading>
                {this.props.t(`courseEvals.Reviews`)}{" "}
                <span style={{ marginLeft: "10px" }}>
                  <ReviewLangSwitches
                    reviewLang={reviewLang}
                    switchReviewLang={this.switchReviewLang}
                    isInHeading={true}
                  />
                </span>
              </StyledSubHeading>
              <Disclaimer>{this.props.t(`courseEvals.Disclaimer`)}</Disclaimer>
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
