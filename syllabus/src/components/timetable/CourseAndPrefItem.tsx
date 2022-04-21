import React from "react";

import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import {
  faExternalLinkSquareAlt,
  faMinusCircle,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Popup from "semantic-ui-react/dist/commonjs/modules/Popup";
import styled from "styled-components";

import ColorSelector from "@app/components/timetable/ColorSelector";
import { SyllabusKey } from "@app/constants/syllabus-data";
import Course from "@app/types/course";
import { getCourseTitleAndInstructor } from "@app/utils/course-search";
import { ThemeContext } from "@app/utils/theme-context";
import timetableColors from "@app/constants/timetable-colors";

const RowWrapper = styled("li")`
  display: flex;
  flex-direction: row;
  padding: 0.3em 0;
`;

const CourseItemWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  align-items: stretch;
  color: #000;
`;

const InvisibleButton = styled("button")`
  align-self: flex-start;
  background-color: #fff;
  border: none;
  padding: 0;
  outline: 0;
`;

const ColorButton = styled(InvisibleButton)`
  width: 1.5em;
  height: 1.5em;
  border: none;
  border-radius: 50%;
  margin: 0.5em 0.5em 0 0;
`;

const StyledHeading = styled("h3")`
  margin: 0;
  text-align: left;
  font-size: 1.2em;
  ${media.phone`font-size: 1.1em;`};
  font-weight: 600;
`;

const CourseItemRow = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface Props {
  color: number;
  visibility: boolean;
  displayLang: string;
  course: Course;
  handleToggleVisibility: (id: string) => void;
  handleRemoveCourse: (id: string) => void;
  handleChangeColor: (color: number) => void;
}

const CourseAndPrefItem = ({
  color,
  visibility,
  displayLang,
  course,
  handleToggleVisibility,
  handleRemoveCourse,
  handleChangeColor,
}: Props) => {
  const navigate = useNavigate();
  const { theme, setTheme } = React.useContext(ThemeContext);
  const { title, instructor } = getCourseTitleAndInstructor(
    course,
    displayLang
  );
  const courseId = course[SyllabusKey.ID];
  const removeCourseIcon = (
    <FontAwesomeIcon
      style={{ color: "#ce0115" }}
      icon={faMinusCircle}
      size="2x"
      transform="shrink-2"
    />
  );
  const visibilityIcon = (
    <FontAwesomeIcon
      style={{ color: "#48af37" }}
      icon={visibility ? faToggleOn : faToggleOff}
      size="2x"
      transform="shrink-2"
    />
  );

  return (
    <RowWrapper>
      <Popup
        trigger={
          <ColorButton
            style={{
              color: timetableColors[theme][`color${color}`],
              backgroundColor: timetableColors[theme][`bgColor${color}`],
              borderColor: timetableColors[theme][`color${color}`],
            }}
          />
        }
        on="click"
        pinned
        size="huge"
      >
        <ColorSelector handleChangeColor={handleChangeColor} />
      </Popup>

      <CourseItemWrapper className="text-light-text1 dark:text-dark-text2">
        <StyledHeading>{title}</StyledHeading>
        <CourseItemRow>
          <div
            style={{
              fontSize: "1.2em",
              overflowWrap: "break-word",
              wordWrap: "break-word",
              flex: "1 0 auto",
              width: "0",
            }}
          >
            {instructor}
          </div>
          <div
            style={{
              display: "flex",
              flex: "0 1 auto",
              justifyContent: "flex-end",
            }}
          >
            <InvisibleButton
              onClick={(e) => {
                e.preventDefault();
                handleToggleVisibility(courseId);
              }}
              className="bg-light-bgMain dark:bg-dark-bgMain"
            >
              {visibilityIcon}
            </InvisibleButton>

            <a
              style={{ alignSelf: "flex-start" }}
              onClick={() => navigate(`/courses/syllabus?courseId=${courseId}`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                style={{ color: "#ffae42" }}
                icon={faExternalLinkSquareAlt}
                size="2x"
                transform="shrink-2"
              />
            </a>
            <InvisibleButton
              onClick={(e) => {
                e.preventDefault();
                handleRemoveCourse(courseId);
              }}
              className="bg-light-bgMain dark:bg-dark-bgMain"
            >
              {removeCourseIcon}
            </InvisibleButton>
          </div>
        </CourseItemRow>
      </CourseItemWrapper>
    </RowWrapper>
  );
};

export default CourseAndPrefItem;
