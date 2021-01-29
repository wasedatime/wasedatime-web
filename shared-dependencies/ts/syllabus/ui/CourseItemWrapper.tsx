import styled from "styled-components";

export const CourseItemWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  align-items: stretch;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 0px 8px 0px;
  margin: 0.5em 0.5em;
  padding: 0.5em 0.8em;
  width: 90%;
  line-height: 150%;
`;

export const HoverableCourseItemWrapper = styled(CourseItemWrapper)`
  &:hover {
    background-color: #eee;
    box-shadow: none;
    cursor: pointer;
  }
`;

export default CourseItemWrapper;
