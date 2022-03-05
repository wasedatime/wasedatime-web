import React from "react";

import API from "@aws-amplify/api";
import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import { getUserAttr } from "@bit/wasedatime.core.ts.utils.user";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import levenshtein from "levenshtein-edit-distance";
import ReactGA from "react-ga";
import { WithTranslation, withTranslation } from "react-i18next";
import { connect } from "react-redux";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import Placeholder from "semantic-ui-react/dist/commonjs/elements/Placeholder";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";
import styled from "styled-components";

import CourseDetails from "@app/components/courseInfo/CourseDetails";
import CourseReviews from "@app/components/courseInfo/CourseReviews";
import ShareButtons from "@app/components/courseInfo/ShareButtons";
import { SyllabusKey } from "@app/constants/syllabus-data";
import CourseItemContainer from "@app/containers/CourseItemContainer";
import {
  gaAppendActionWithLng,
  gaClickRelatedCourse,
  gaClickSyllabusLink,
  gaOpenCourseDetails,
} from "@app/ga/eventActions";
import { gaCourseDetails, gaFetchedCourseItem } from "@app/ga/eventCategories";
import { ReduxRootState } from "@app/redux/reducers";
import { getFetchedCoursesList } from "@app/redux/reducers/fetchedCourses";
import Course from "@app/types/course";
import Review from "@app/types/review";
import { courseSchemaFullToShort } from "@app/utils/map-single-course-schema";

const CourseInfoWrapper = styled(Segment)`
  width: 100%;
  display: block;
  cursor: auto;
  margin-top: 0px !important;
  border: none !important;
`;

const RelatedCourses = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(96vw - 60em - 120px);
  @media (max-width: 1280px) {
    width: calc(96vw - 55em - 120px);
  }
  ${media.desktop`width: calc(96vw - 30em - 120px);`}
  ${media.tablet`width: calc(96vw - 36px);`}
  overflow-x: auto;
  padding: none;
  margin: none;
`;

const RelatedCourse = styled.div`
  flex: 0 0 33%;
  ${media.tablet`flex: 0 0 50%;`}
`;

const StyledSubHeading = styled("h6")`
  align-self: flex-start;
  margin: 1rem 0px;
  padding-left: 1rem;
  border-left: 5px solid rgb(148, 27, 47);
  font-weight: 300;
`;

const getCourseKey = (course) => course[SyllabusKey.ID].substring(0, 12);

const getRelatedCourses = (loadedCourses, thisCourse, thisCourseKey) => {
  const courseId = thisCourse[SyllabusKey.ID];
  const courseCode = thisCourse[SyllabusKey.CODE];
  const thisCourseTitle = thisCourse[SyllabusKey.TITLE];
  const thisCourseSchool = thisCourse[SyllabusKey.SCHOOL];

  const sortedRelatedCourses = loadedCourses
    .filter(
      (course) =>
        course[SyllabusKey.CODE] === courseCode &&
        course[SyllabusKey.ID] !== courseId
    )
    .sort((a, b) => {
      if (
        a[SyllabusKey.SCHOOL] === thisCourseSchool &&
        b[SyllabusKey.SCHOOL] !== thisCourseSchool
      )
        return -1;
      if (
        a[SyllabusKey.SCHOOL] !== thisCourseSchool &&
        b[SyllabusKey.SCHOOL] === thisCourseSchool
      )
        return 1;

      return (
        levenshtein(thisCourseTitle, a[SyllabusKey.TITLE]) -
        levenshtein(thisCourseTitle, b[SyllabusKey.TITLE])
      );
    })
    .slice(0, 10);

  return sortedRelatedCourses;
};

interface ReduxStateProps {
  fetchedCourses: Course[];
}

interface OwnProps extends WithTranslation {
  course: Course;
  searchLang: string | string[];
}

interface OwnState {
  courseWithMoreDetails: Course;
  relatedCourses: Course[];
  thisCourseReviews: Review[];
  areDetailsLoaded: boolean;
  areReviewsLoaded: boolean;
}

class CourseInfo extends React.Component<ReduxStateProps & OwnProps, OwnState> {
  state = {
    courseWithMoreDetails: null,
    relatedCourses: [],
    thisCourseReviews: [],
    areDetailsLoaded: false,
    areReviewsLoaded: false,
  };

  async loadReviewsAndRelatedCourses() {
    const thisCourse = this.props.course;
    const loadedCourses = this.props.fetchedCourses;
    const thisCourseKey = getCourseKey(thisCourse);

    // Get related courses by code, sort them, and get the first k courses (k=10)
    const relatedCourses = getRelatedCourses(
      loadedCourses,
      thisCourse,
      thisCourseKey
    );

    // Fetch reviews with course key
    const thisCourseReviews = await this.getCourseReviewsByKey(thisCourseKey);

    this.setState({
      relatedCourses,
      thisCourseReviews: thisCourseReviews || [],
      areReviewsLoaded: true,
    });
  }

  getCourseReviewsByKey = async (courseKey: string): Promise<Review[]> => {
    try {
      const userAttr = await getUserAttr();
      const res = await API.get(
        "wasedatime-dev",
        `/course-reviews/${courseKey}?uid=${userAttr ? userAttr.id : ""}`,
        {
          headers: {
            "x-api-key": "0PaO2fHuJR9jlLLdXEDOyUgFXthoEXv8Sp0oNsb8",
            "Content-Type": "application/json",
          },
        }
      );

      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  async componentDidMount() {
    ReactGA.event({
      category: gaCourseDetails,
      action: gaOpenCourseDetails,
      label: this.props.course[SyllabusKey.TITLE],
    });
    try {
      const res = await API.get(
        "wasedatime-dev",
        `/syllabus?id=${this.props.course[SyllabusKey.ID]}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          response: true,
        }
      );
      this.setState(
        {
          courseWithMoreDetails: courseSchemaFullToShort(res.data.data),
          areDetailsLoaded: true,
        },
        this.loadReviewsAndRelatedCourses
      );
    } catch (error) {
      this.setState(
        {
          areDetailsLoaded: true,
        },
        this.loadReviewsAndRelatedCourses
      );
    }
  }

  render() {
    const { course: courseFromProps, searchLang, t, i18n } = this.props;
    const {
      courseWithMoreDetails,
      areDetailsLoaded,
      areReviewsLoaded,
      thisCourseReviews,
      relatedCourses,
    } = this.state;
    const course = courseWithMoreDetails || courseFromProps;

    return areDetailsLoaded ? (
      <CourseInfoWrapper>
        <CourseDetails course={course} />
        <Grid style={{ textAlign: "center", margin: "1em 0px" }}>
          <Grid.Column width={6}>
            <p style={{ marginBottom: "0px" }}>Official Syllabus:</p>
            <a
              style={{ alignSelf: "flex-start" }}
              href={`https://www.wsl.waseda.jp/syllabus/JAA104.php?pKey=${
                course.a
              }${t("syllabus.langParam")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                ReactGA.event({
                  category: gaCourseDetails,
                  action: gaAppendActionWithLng(
                    gaClickSyllabusLink,
                    i18n.language
                  ),
                  label: course[SyllabusKey.TITLE],
                })
              }
            >
              <FontAwesomeIcon
                style={{ color: "#6495ED" }}
                icon={faExternalLinkSquareAlt}
                size="2x"
              />
            </a>
          </Grid.Column>
          <Grid.Column width={10}>
            <ShareButtons courseId={course.a} />
          </Grid.Column>
        </Grid>
        {areReviewsLoaded ? (
          <CourseReviews
            courseKey={getCourseKey(course)}
            course={course}
            reviews={thisCourseReviews}
            searchLang={searchLang}
          />
        ) : (
          <Placeholder style={{ margin: "1em" }}>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
          </Placeholder>
        )}
        <StyledSubHeading>{t("courseInfo.Related courses")}</StyledSubHeading>
        <RelatedCourses>
          {areReviewsLoaded ? (
            relatedCourses.map((course, i) => (
              <RelatedCourse
                key={i}
                onClick={() =>
                  ReactGA.event({
                    category: gaCourseDetails,
                    action: gaClickRelatedCourse,
                    label: course[SyllabusKey.TITLE],
                  })
                }
              >
                <CourseItemContainer
                  searchTerm=""
                  searchLang={searchLang}
                  course={course}
                  expandable={false}
                  isRelatedCourse
                />
              </RelatedCourse>
            ))
          ) : (
            <Placeholder style={{ margin: "1em" }}>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
          )}
        </RelatedCourses>
      </CourseInfoWrapper>
    ) : (
      <Placeholder style={{ margin: "1em" }}>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
    );
  }
}

const mapStateToProps = (state: ReduxRootState) => ({
  fetchedCourses: getFetchedCoursesList(state.fetchedCourses.coursesBySchool),
});

export default connect<ReduxStateProps, {}>(
  mapStateToProps,
  null
)(withTranslation("translation")(CourseInfo));
