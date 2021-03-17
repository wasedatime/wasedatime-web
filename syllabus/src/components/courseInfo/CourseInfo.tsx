import React from "react";
import styled from "styled-components";
import { WithTranslation, withTranslation } from "react-i18next";
import Course from "../../types/course";
import Review from "../../types/review";
import CourseDetails from "./CourseDetails";
import CourseReviews from "./CourseReviews";
import ShareButtons from "./ShareButtons";
import CourseItemContainer from "../../containers/CourseItemContainer";
import { SyllabusKey } from "../../constants/syllabus-data";
import levenshtein from "levenshtein-edit-distance";
import { getUserAttr } from "@bit/wasedatime.core.ts.utils.user";
import API from "@aws-amplify/api";
import { connect } from "react-redux";
import { ReduxRootState } from "../../redux/reducers";
import { getFetchedCoursesList } from "../../redux/reducers/fetchedCourses";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";
import Placeholder from "semantic-ui-react/dist/commonjs/elements/Placeholder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import ReactGA from "react-ga";
import { gaCourseDetails, gaFetchedCourseItem } from "../../ga/eventCategories";
import {
  gaAppendActionWithLng,
  gaClickRelatedCourse,
  gaClickSyllabusLink,
  gaOpenCourseDetails,
} from "../../ga/eventActions";
import { courseSchemaFullToShort } from "../../utils/map-single-course-schema";
import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";

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
  width: 100%;
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
  searchLang: string;
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
    let loadedCourses = this.props.fetchedCourses;
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
      relatedCourses: relatedCourses,
      thisCourseReviews: thisCourseReviews || [],
      areReviewsLoaded: true,
    });
  }

  getCourseReviewsByKey = async (courseKey: string): Promise<Review[]> => {
    try {
      const userAttr = await getUserAttr();
      const res = await API.get(
        "wasedatime-dev",
        "/course-reviews/" +
          courseKey +
          "?uid=" +
          (userAttr ? userAttr.id : ""),
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
        <StyledSubHeading>{t(`courseInfo.Related courses`)}</StyledSubHeading>
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
                  searchTerm={""}
                  searchLang={searchLang}
                  course={course}
                  expandable={false}
                  isRelatedCourse={true}
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
