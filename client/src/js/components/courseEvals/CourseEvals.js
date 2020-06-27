import React from 'react';
import { Helmet } from 'react-helmet';
import styled from "styled-components";

import { media } from "../../styled-components/utils";
import { RowWrapper } from "../../styled-components/Wrapper";
import { Overlay } from "../../styled-components/Overlay";
import { Wrapper } from "../../styled-components/Wrapper";
import FetchedCourseItem from "../../containers/syllabus/FetchedCourseItem";
import CourseEvalsGroup from './CourseEvalsGroup';
import EvalsList from "./EvalsList";

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

const RelatedCoursesWrapper = styled("div")`
  max-height: 80vh;
  overflow-y: auto;
`;

const getCourse = courseID => {
  // Todo: Get course data with course key
  return {
    "_id":"26GF02200201202026M001270126",
    "course_code":"INFY21ZL",
    "year":2020,
    "term":"fallSem",
    "title":"Information Design: Methods and Applications",
    "title_jp":"Information Design: Methods and Applications",
    "instructor":"SCHNEIDER, Andreas",
    "instructor_jp":"シュナイダー アンドレアス",
    "occurrences":[
      {
         "day":1,
         "start_period":1,
         "end_period":1,
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
         "key":"26GF02200201202026M001270126"
      }
    ]
  };
}

const getCourseCode = course => course["course_code"];

const getCourseKey = course => course["_id"].substring(0, 10);

const getAllEvals = courseCode => {
  // Todo: Get evaluations of this course with its course key
  return [
    {
      "course_key": '2605012005',
      "course_code": 'INFY21ZL',
      "satisfaction": 4,
      "difficulty": 3,
      "benefit": 5,
      "comment": "Dummy evaluation of related course 1-1",
      "course_year": "2018"
    },
    {
      "course_key": '2605012005',
      "course_code": 'INFY21ZL',
      "satisfaction": 4,
      "difficulty": 4,
      "benefit": 4,
      "comment": "Dummy evaluation of related course 1-2",
      "course_year": "2019"
    },
    {
      "course_key": '26GF022002',
      "course_code": 'INFY21ZL',
      "satisfaction": 4,
      "difficulty": 4,
      "benefit": 5,
      "comment": "Dummy evaluation of this course 1",
      "course_year": "2018"
    },
    {
      "course_key": '26GF022002',
      "course_code": 'INFY21ZL',
      "satisfaction": 5,
      "difficulty": 4,
      "benefit": 5,
      "comment": "Dummy evaluation of this course 2",
      "course_year": "2019"
    },
    {
      "course_key": '2600002108',
      "course_code": 'INFY21ZL',
      "satisfaction": 3,
      "difficulty": 3,
      "benefit": 4,
      "comment": "Dummy evaluation of related course 2-1",
      "course_year": "2019"
    },
    {
      "course_key": '2600002108',
      "course_code": 'INFY21ZL',
      "satisfaction": 3,
      "difficulty": 4,
      "benefit": 3,
      "comment": "Dummy evaluation of related course 2-2",
      "course_year": "2018"
    }
  ];
}

const getRelatedCourses = (courseCode, thisCourseKey) => {
  // Todo: Get related courses with course code
  const dummyCoursesData = [
    {
      "_id":"2605012005012020260602303326",
      "course_code":"INFY21ZL",
      "year":2020,
      "term":"fallSem",
      "title":"Information Theory",
      "title_jp":"情報理論",
      "instructor":"OIKAWA, Yasuhiro",
      "instructor_jp":"及川 靖広",
      "occurrences":[
        {
           "day":5,
           "start_period":2,
           "end_period":2,
           "building":"-1",
           "classroom":"undecided",
           "location":"-1-undecided"
        }
      ],
      "lang":"JP",
      "keys":[
        {
           "school":"FSE",
           "key":"2605012005012020260602303326"
        }
      ]
    },
    {
      "_id":"26GF02200201202026M001270126",
      "course_code":"INFY21ZL",
      "year":2020,
      "term":"fallSem",
      "title":"Information Design: Methods and Applications",
      "title_jp":"Information Design: Methods and Applications",
      "instructor":"SCHNEIDER, Andreas",
      "instructor_jp":"シュナイダー アンドレアス",
      "occurrences":[
        {
           "day":1,
           "start_period":1,
           "end_period":1,
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
           "key":"26GF02200201202026M001270126"
        }
      ]
    },
    {
      "_id":"2600002108012020260000210826",
      "course_code":"INFY21ZL",
      "year":2020,
      "term":"springSem",
      "title":"Introduction to CIO",
      "title_jp":"CIO(最高情報責任者)概論",
      "instructor":"IWASAKI, Naoko",
      "instructor_jp":"岩崎 尚子",
      "occurrences":[
        {
           "day":5,
           "start_period":4,
           "end_period":4,
           "building":"63",
           "classroom":"201",
           "location":"63-201"
        }
      ],
      "lang":"JP",
      "keys":[
        {
           "school":"FSE",
           "key":"2600002108012020260000210826"
        },
        {
           "school":"ASE",
           "key":"2800002108012020260000210828"
        },
        {
           "school":"CSE",
           "key":"2700002108012020260000210827"
        }
      ]
    }
  ];
  return dummyCoursesData.filter(course => getCourseKey(course) != thisCourseKey);
}

const getCourseEvals = (evaluations, courseKey) => evaluations.filter(e => e.course_key == courseKey);

const CourseEvals = ({ location }) => {
  const thisCourse = getCourse(location.search.courseID);
  const thisCourseCode = getCourseCode(thisCourse);
  const thisCourseKey = getCourseKey(thisCourse);
  const relatedCourses = getRelatedCourses(thisCourseCode, thisCourseKey);
  const evaluations = getAllEvals(thisCourseCode);

  return (
    <RowWrapper>
      <Helmet>
        <title>WasedaTime - Course Evaluations</title>
        <meta
          name="description"
          content="Syllabus Searching at Waseda University."
        />
        <meta property="og:title" content="WasedaTime - Course Evaluations" />
        <meta
          property="og:description"
          content="Syllabus Searching at Waseda University."
        />
        <meta property="og:site_name" content="WasedaTime - Course Evaluations" />
      </Helmet>

      <LongWrapper>
        <ExtendedOverlay>
          <div>
            <br />
            <FetchedCourseItem searchTerm={""} searchLang={"jp"} course={thisCourse} isInCourseEvalsPage={true} />

            <StyledSubHeading>
              Evaluations
            </StyledSubHeading>
            <CommentsListWrapper>
              <EvalsList evaluations={getCourseEvals(evaluations, thisCourseKey)} />
            </CommentsListWrapper>

          </div>
        </ExtendedOverlay>
      </LongWrapper>

      <ShortWrapper>
        <ExtendedOverlay>
          <StyledSubHeading>
            Related courses
          </StyledSubHeading>
          <RelatedCoursesWrapper>
            {
              relatedCourses.map(relatedCourse => <CourseEvalsGroup
                course={relatedCourse}
                evaluations={getCourseEvals(evaluations, getCourseKey(relatedCourse))}
                key={getCourseKey(relatedCourse)}
              />)
            }
          </RelatedCoursesWrapper>
        </ExtendedOverlay>
      </ShortWrapper>
    </RowWrapper>
  );
};

export default CourseEvals;
