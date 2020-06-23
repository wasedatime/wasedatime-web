import React from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";

import { media } from "../../styled-components/utils";
import { RowWrapper } from "../../styled-components/Wrapper";
import { sizes } from "../../styled-components/utils";
import { Overlay } from "../../styled-components/Overlay";
import { Wrapper } from "../../styled-components/Wrapper";
import CourseItem from "../syllabus/CourseItem";
import FetchedCourseItem from "../../containers/syllabus/FetchedCourseItem";
import CommentsList from "./CommentsList";

const ExtendedOverlay = styled(Overlay)`
  align-items: center;
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
  max-height: 35vh;
  overflow-y: auto;
`;

const exampleComments = [
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

const exampleCourse = {
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

const CourseComments = ({ courseKey }) => {
  return (
    <Wrapper>
      <ExtendedOverlay>
        <div style={{ width: '70%' }}>
          <br />
          <FetchedCourseItem searchTerm={""} searchLang={"jp"} course={exampleCourse} isInCommentsPage={true} />
          <div></div>
          <StyledSubHeading>
            Comments
          </StyledSubHeading>
          <CommentsListWrapper>
            {<CommentsList comments={exampleComments} />}
          </CommentsListWrapper>
          <div></div>
          <StyledSubHeading>
            Comments from similar courses
          </StyledSubHeading>
          <CommentsListWrapper>
            {<CommentsList comments={exampleComments} />}
          </CommentsListWrapper>
        </div>
      </ExtendedOverlay>
    </Wrapper>
  );
};

export default CourseComments;
