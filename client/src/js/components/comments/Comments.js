import React from 'react';
import { Helmet } from 'react-helmet';
import styled from "styled-components";

import { media } from "../../styled-components/utils";
import { RowWrapper } from "../../styled-components/Wrapper";
import { Overlay } from "../../styled-components/Overlay";
import { Wrapper } from "../../styled-components/Wrapper";
import FetchedCourseItem from "../../containers/syllabus/FetchedCourseItem";
import CourseCommentsGroup from './CourseCommentsGroup';
import CommentsList from "./CommentsList";

export const LongWrapper = styled(Wrapper)`
  flex: 0 0 70%;
`;

export const ShortWrapper = styled(Wrapper)`
  flex: 0 0 30%;
`;

const ExtendedOverlay = styled(Overlay)`
  padding: 0 25px;
`;

const StyledSubHeading = styled("h2")`
  align-self: flex-start;
  margin-top: 1rem 0px;
  padding-left: 1rem;
  border-left: 5px solid rgb(148, 27, 47);
  font-size: 2.5rem;
  font-weight: 300;
  ${media.phone`font-size: 2rem;`};
`;

const CommentsListWrapper = styled("div")`
  max-height: 60vh;
  overflow-y: auto;
`;

const SimilarCoursesWrapper = styled("div")`
  max-height: 80vh;
  overflow-y: auto;
`;

const getCourse = courseKey => {
  // Todo: Get course data with course key
  return {
    _id: "9204B440010220209204B4400192",
    title: "\"Keigo\" Communication 4 (Japanese course for International Student)",
    title_jp: "敬語でコミュニケーション4 (留学生対象日本語科目)",
    instructor: "MARUYAMA, Tomoko",
    instructor_jp: "丸山 具子",
    year: 2020,
    term: "fallSem",
    keys: [
      {
        "school": "CJL",
        "key": "9204B440010220209204B4400192"
      }
    ],
    occurrences: [
      {
        day: 1,
        start_period: 3,
        end_period: 3,
        building: "-1",
        classroom: "undecided",
        location: "-1-undecided"
      }
    ],
    lang: "JP"
  };
}

const getComments = courseKey => {
  // Todo: Get comments of this course with its course key
  return [
    {
      "course_key": '',
      "course_code": '',
      "satisfaction": 4,
      "difficulty": 5,
      "benefit": 5,
      "comment": "The final report requires a 3000 minimum word count, so I highly suggest future students to start writing it as soon as possible!",
      "course_year": "2018"
    },
    {
      "course_key": '',
      "course_code": '',
      "satisfaction": 4,
      "difficulty": 5,
      "benefit": 5,
      "comment": "The final report requires a 3000 minimum word count, so I highly suggest future students to start writing it as soon as possible!",
      "course_year": "2018"
    },
    {
      "course_key": '',
      "course_code": '',
      "satisfaction": 4,
      "difficulty": 5,
      "benefit": 5,
      "comment": "The final report requires a 3000 minimum word count, so I highly suggest future students to start writing it as soon as possible!",
      "course_year": "2018"
    }
  ];
}

const getCourseCode = course => {
  // Todo: Get course code of this course
  return 'example_course_code';
}

const getSimilarCourses = courseCode => {
  // Todo: Get similar courses with course code
  return [
    {
      _id: "9204B440010220209204B4400192",
      title: "\"Keigo\" Communication 4 (Japanese course for International Student)",
      title_jp: "敬語でコミュニケーション4 (留学生対象日本語科目)",
      instructor: "MARUYAMA, Tomoko",
      instructor_jp: "丸山 具子",
      year: 2020,
      term: "fallSem",
      keys: [
        {
          "school": "CJL",
          "key": "9204B440010220209204B4400192"
        }
      ],
      occurrences: [
        {
          day: 1,
          start_period: 3,
          end_period: 3,
          building: "-1",
          classroom: "undecided",
          location: "-1-undecided"
        }
      ],
      lang: "JP"
    },
    {
      _id: "9204B440010220209204B4400192",
      title: "\"Keigo\" Communication 4 (Japanese course for International Student)",
      title_jp: "敬語でコミュニケーション4 (留学生対象日本語科目)",
      instructor: "MARUYAMA, Tomoko",
      instructor_jp: "丸山 具子",
      year: 2020,
      term: "fallSem",
      keys: [
        {
          "school": "CJL",
          "key": "9204B440010220209204B4400192"
        }
      ],
      occurrences: [
        {
          day: 1,
          start_period: 3,
          end_period: 3,
          building: "-1",
          classroom: "undecided",
          location: "-1-undecided"
        }
      ],
      lang: "JP"
    }
  ];
}

const Comments = ({ match }) => {
  const course = getCourse(match.params.courseKey);
  const comments = getComments(match.params.courseKey);
  const courseCode = getCourseCode(course);
  const similarCourses = getSimilarCourses(courseCode);
  return (
    <RowWrapper>
      <Helmet>
        <title>WasedaTime - Course Comments</title>
        <meta
          name="description"
          content="Syllabus Searching at Waseda University."
        />
        <meta property="og:title" content="WasedaTime - Course Comments" />
        <meta
          property="og:description"
          content="Syllabus Searching at Waseda University."
        />
        <meta property="og:site_name" content="WasedaTime - Course Comments" />
      </Helmet>

      <LongWrapper>
        <ExtendedOverlay>
          <div>
            <br />
            <FetchedCourseItem searchTerm={""} searchLang={"jp"} course={course} isInCommentsPage={true} />

            <StyledSubHeading>
              Comments
            </StyledSubHeading>
            <CommentsListWrapper>
              <CommentsList comments={comments} />
            </CommentsListWrapper>

          </div>
        </ExtendedOverlay>
      </LongWrapper>

      <ShortWrapper>
        <ExtendedOverlay>
          <StyledSubHeading>
            Similar courses
          </StyledSubHeading>
          <SimilarCoursesWrapper>
            { similarCourses.map((similarCourse, i) => <CourseCommentsGroup course={similarCourse} key={i} />) }
          </SimilarCoursesWrapper>
        </ExtendedOverlay>
      </ShortWrapper>
    </RowWrapper>
  );
};

export default Comments;
