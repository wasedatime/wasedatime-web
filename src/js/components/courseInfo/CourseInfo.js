import React from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../../reducers/user";
import MediaQuery from "react-responsive";
import API from "@aws-amplify/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faPen } from "@fortawesome/free-solid-svg-icons";
import qs from "qs";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import ReactGA from "react-ga";
import { gaRelatedCourses } from "../../ga/eventCategories";
import {
  gaAppendActionWithLng,
  gaCloseModal,
  gaOpenModal,
} from "../../ga/eventActions";
import Alert from "react-s-alert";
import { SYLLABUS_KEYS } from "../../config/syllabusKeys";
import levenshtein from "levenshtein-edit-distance";
import { withNamespaces } from "react-i18next";
import withFetchCourses from "../../hocs/withFetchCourses";

import { media, sizes } from "../../styled-components/utils";
import { RowWrapper, Wrapper } from "../../styled-components/Wrapper";
import { Overlay } from "../../styled-components/Overlay";

import CourseDetails from "./CourseDetails";
import ReviewLangSwitches from "./ReviewLangSwitches";
import RelatedCoursesButton from "./RelatedCoursesButton";
import Modal from "../../components/Modal";
import FetchError from "../../components/FetchError";
import FetchedCourseItem from "../../containers/syllabus/FetchedCourseItem";
import ReviewScalesCountContainer from "./ReviewScalesCountContainer";
import RelatedCoursesContainer from "./RelatedCoursesContainer";
import ReviewsList from "./ReviewsList";
import AddReviewForm from "./AddReviewForm";
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

const ReviewsListWrapper = styled("div")`
  max-height: 60vh;
  overflow-y: auto;
`;

const AddReviewButton = styled("button")`
  background-color: #ffae42;
  color: #fff;
  border: 0px;
  border-radius: 5px;
  font-size: 0.9em;
  float: right;
  padding: 0.3em 0.5em;
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

const getCourseKey = (course) => course[SYLLABUS_KEYS.ID].substring(0, 12);

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

class CourseInfo extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
  }

  state = {
    thisCourse: {},
    relatedCourses: [],
    thisCourseReviews: [],
    relatedCourseReviews: [],
    avgSatisfaction: 0,
    avgDifficulty: 0,
    avgBenefit: 0,
    searchLang: "",
    reviewLang: "",
    isLoaded: false,
    isModalOpen: false,
    error: false,
    isAddReviewFormOpen: false,
    newReviewSatisfaction: 0,
    newReviewDifficulty: 0,
    newReviewBenefit: 0,
    newReviewComment: "",
  };

  componentDidMount() {
    API.configure();
    this._isMounted = true;
    this._isMounted && this.loadReviewsAndRelatedCourses();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  async loadReviewsAndRelatedCourses() {
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

    const relatedCoursesByKey = {};
    relatedCourses.forEach((c) => {
      relatedCoursesByKey[getCourseKey(c)] = c;
    });

    // 2. Make the key of this course and keys of top 3 related courses into a list
    const courseKeysToFetchReviews = [thisCourseKey].concat(
      relatedCourses.slice(0, 3).map((course) => getCourseKey(course))
    );

    // 3. Fetch the reviews by posting the keys list
    const courseReviews = await this.getCourseReviewsByKey(
      courseKeysToFetchReviews
    );
    let thisCourseReviews = [];
    let relatedCourseReviews = {};
    courseReviews.forEach((c, i) => {
      if (i === 0) thisCourseReviews = c.data;
      else {
        relatedCourseReviews[courseKeysToFetchReviews[i]] = c.data;
        // Same first 10 digits of courseKey & same instructors => show same reviews
        if (
          thisCourseKey.substring(0, 10) ===
            courseKeysToFetchReviews[i].substring(0, 10) &&
          thisCourse[SYLLABUS_KEYS.INSTRUCTOR] ===
            relatedCoursesByKey[courseKeysToFetchReviews[i]][
              SYLLABUS_KEYS.INSTRUCTOR
            ]
        ) {
          thisCourseReviews = [...thisCourseReviews, ...c.data];
        }
      }
    });

    let satisfactionSum = 0,
      difficultySum = 0,
      benefitSum = 0;
    thisCourseReviews.forEach((review) => {
      satisfactionSum += review.satisfaction;
      difficultySum += review.difficulty;
      benefitSum += review.benefit;
    });
    // calculate the averages of scales and round them to the nearest .5
    const avgSatisfaction =
      Math.round((satisfactionSum / thisCourseReviews.length) * 2) / 2;
    const avgDifficulty =
      Math.round((difficultySum / thisCourseReviews.length) * 2) / 2;
    const avgBenefit =
      Math.round((benefitSum / thisCourseReviews.length) * 2) / 2;

    this._isMounted &&
      this.setState({
        thisCourse: thisCourse,
        relatedCourses: relatedCourses,
        thisCourseReviews: thisCourseReviews,
        relatedCourseReviews: relatedCourseReviews,
        avgSatisfaction: avgSatisfaction,
        avgDifficulty: avgDifficulty,
        avgBenefit: avgBenefit,
        searchLang: searchLang,
        reviewLang: this.props.lng,
        isLoaded: true,
      });
  }

  async getCourseReviewsByKey(courseKeys) {
    try {
      const reviews = await Promise.all(
        courseKeys.map(async (courseKey) => {
          const res = await API.get(
            "wasedatime-dev",
            "/course-reviews?key=" +
              courseKey +
              "&uid=" +
              (this.props.userInfo ? this.props.userInfo.sub : ""),
            {
              headers: {
                "x-api-key": "0PaO2fHuJR9jlLLdXEDOyUgFXthoEXv8Sp0oNsb8",
                "Content-Type": "application/json",
              },
            }
          );
          return res;
        })
      );
      console.log(reviews);
      return reviews;
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

  toggleAddReviewForm = () => {
    if (this.props.userInfo) {
      this.setState({
        isAddReviewFormOpen: !this.state.isAddReviewFormOpen,
      });
    } else {
      Alert.warning("Please sign in first", {
        position: "bottom",
        effect: "jelly",
      });
    }
  };

  onNewReviewScaleChange = (target, score) => {
    switch (target) {
      case "satisfaction":
        this.setState({ newReviewSatisfaction: score });
        break;
      case "difficulty":
        this.setState({ newReviewDifficulty: score });
        break;
      case "benefit":
        this.setState({ newReviewBenefit: score });
        break;
      default:
        this.setState({ newReviewSatisfaction: score });
    }
  };

  onNewReviewCommentChange = (text) =>
    this.setState({ newReviewComment: text });

  onNewReviewFormSubmit = () => {
    const {
      newReviewSatisfaction,
      newReviewDifficulty,
      newReviewBenefit,
      newReviewComment,
    } = this.state;
    if (
      [
        newReviewSatisfaction,
        newReviewDifficulty,
        newReviewBenefit,
        newReviewComment.length,
      ].some((scale) => scale === 0)
    ) {
      Alert.warning(
        this.props.t(`courseInfo.Fill in all fields before sending`),
        {
          position: "bottom",
          effect: "jelly",
        }
      );
    } else {
      const thisCourse = this.state.thisCourse;
      const newReview = {
        course_key: getCourseKey(thisCourse),
        title: thisCourse[SYLLABUS_KEYS.TITLE],
        title_jp: thisCourse[SYLLABUS_KEYS.TITLE_JP],
        instructor: thisCourse[SYLLABUS_KEYS.INSTRUCTOR],
        instructor_jp: thisCourse[SYLLABUS_KEYS.INSTRUCTOR_JP],
        year: 2020,
        satisfaction: newReviewSatisfaction,
        difficulty: newReviewDifficulty,
        benefit: newReviewBenefit,
        comment: newReviewComment,
        uid: this.props.userInfo.sub,
      };

      console.log({
        data: newReview,
        token: this.props.userInfo.idToken.jwtToken,
      });

      try {
        // Send the review
        API.post(
          "wasedatime-dev",
          "/course-reviews?key=" + getCourseKey(thisCourse),
          {
            body: {
              data: newReview,
              token: this.props.userInfo.idToken.jwtToken,
            },
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then((res) => console.log(res));

        Alert.success(this.props.t(`courseInfo.Review sent`), {
          position: "bottom",
          effect: "jelly",
        });
        this.setState({
          isAddReviewFormOpen: false,
          newReviewSatisfaction: 0,
          newReviewDifficulty: 0,
          newReviewBenefit: 0,
          newReviewComment: "",
        });
      } catch (error) {
        Alert.error(this.props.t(`courseInfo.Review failed to send`), {
          position: "bottom",
          effect: "jelly",
        });
      }
    }
  };

  render() {
    const {
      thisCourse,
      relatedCourses,
      thisCourseReviews,
      relatedCourseReviews,
      avgSatisfaction,
      avgDifficulty,
      avgBenefit,
      searchLang,
      reviewLang,
      isLoaded,
      isModalOpen,
      error,
      isAddReviewFormOpen,
      newReviewSatisfaction,
      newReviewDifficulty,
      newReviewBenefit,
      newReviewComment,
    } = this.state;
    if (error)
      return <FetchError onRetry={this.loadReviewsAndRelatedCourses} />;
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
                {this.props.t(`courseInfo.Thank WTSA 1`)}{" "}
                <a
                  href="https://www.facebook.com/WasedaTaiwaneseStudentAssociation/"
                  style={{ color: "#fff" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {this.props.t(`courseInfo.WTSA`)}
                </a>
                {this.props.t(`courseInfo.Thank WTSA 2`)}
              </Announcement>
              {isLoaded && (
                <FetchedCourseItem
                  searchTerm={""}
                  searchLang={searchLang}
                  course={thisCourse}
                  isInCourseReviewsPage={true}
                />
              )}

              <CourseDetails course={thisCourse} />

              {isAddReviewFormOpen ? (
                <AddReviewForm
                  toggleModal={this.toggleAddReviewForm}
                  satisfaction={newReviewSatisfaction}
                  difficulty={newReviewDifficulty}
                  benefit={newReviewBenefit}
                  comment={newReviewComment}
                  handleScaleChange={this.onNewReviewScaleChange}
                  handleCommentChange={this.onNewReviewCommentChange}
                  handleFormSubmit={this.onNewReviewFormSubmit}
                />
              ) : (
                <React.Fragment>
                  <StyledSubHeading>
                    {this.props.t(`courseInfo.Reviews`)}{" "}
                    <span style={{ marginLeft: "10px" }}>
                      <ReviewLangSwitches
                        reviewLang={reviewLang}
                        switchReviewLang={this.switchReviewLang}
                        isInHeading={true}
                      />
                    </span>
                    <AddReviewButton onClick={this.toggleAddReviewForm}>
                      <FontAwesomeIcon icon={faPen} /> Write your Review
                    </AddReviewButton>
                  </StyledSubHeading>
                  <Disclaimer>
                    {this.props.t(`courseInfo.Disclaimer`)}
                  </Disclaimer>
                  <ReviewsListWrapper>
                    <ReviewScalesCountContainer
                      avgSatisfaction={avgSatisfaction}
                      avgDifficulty={avgDifficulty}
                      avgBenefit={avgBenefit}
                      thisCourseReviewsLength={thisCourseReviews.length}
                    />
                    <ReviewsList
                      reviews={thisCourseReviews}
                      searchLang={searchLang}
                      reviewLang={reviewLang}
                    />
                  </ReviewsListWrapper>
                  <br />
                </React.Fragment>
              )}
            </div>
            <br />
          </ExtendedOverlay>
        </LongWrapper>

        {isLoaded && (
          <MediaQuery minWidth={sizes.desktop}>
            {(matches) => {
              return matches ? (
                <ShortWrapper>
                  <RelatedCoursesContainer
                    relatedCourses={relatedCourses}
                    courseReviews={relatedCourseReviews}
                    searchLang={searchLang}
                  />
                </ShortWrapper>
              ) : (
                <div>
                  <RelatedCoursesButton
                    isModalOpen={isModalOpen}
                    handleToggleModal={this.handleToggleModal}
                  />
                  <Modal isOpen={isModalOpen} style={modalStyle}>
                    <RelatedCoursesContainer
                      relatedCourses={relatedCourses}
                      courseReviews={relatedCourseReviews}
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

const mapStateToProps = (state) => ({
  userInfo: getUserInfo(state),
});

export default withFetchCourses(
  withNamespaces("translation")(connect(mapStateToProps)(CourseInfo))
);
