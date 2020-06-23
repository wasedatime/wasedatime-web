import React from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";

import { media } from "../../styled-components/utils";
import { RowWrapper } from "../../styled-components/Wrapper";
import { sizes } from "../../styled-components/utils";
import { Overlay } from "../../styled-components/Overlay";
import { Wrapper } from "../../styled-components/Wrapper";
import CourseItem from "../syllabus/CourseItem";
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

const CourseComments = ({ courseKey }) => {
  return (
    <Wrapper>
      <ExtendedOverlay>
        <div style={{ width: '70%' }}>
          <br />
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: '#fff',
            padding: '1em',
            margin: '1em 0px',
            height: '200px'
          }}>
            <h1>Course Detail</h1>
            XXXXXXXXXXXX
          </div>
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
