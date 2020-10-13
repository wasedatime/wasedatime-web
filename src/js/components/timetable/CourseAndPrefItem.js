import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusCircle,
  faToggleOn,
  faToggleOff,
  faExternalLinkSquareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Manager, Reference, Popper } from "react-popper";
import PropTypes from "prop-types";

import { PopperBox, Arrow } from "../../styled-components/ColorPopper";
import ColorSelector from "./ColorSelector";
import { media } from "../../styled-components/utils";
import { getCourseTitleAndInstructor } from "../../utils/courseSearch";

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

const ColorCircle = styled("div")`
  width: 1em;
  height: 1em;
  border: solid 2px;
  border-radius: 50%;
  margin: 0.5em 0.5em 0 0;
`;

const ColorButton = styled(InvisibleButton)`
  margin: 0.2em 0.1em;
  width: 1.5em;
  height: 1.5em;
  border: solid 2px;
  border-radius: 0.3em;
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

const CourseAndPrefItem = ({
  isPopperOpen,
  color,
  visibility,
  displayLang,
  course,
  handleToggleColorPopper,
  handleToggleVisibility,
  handleRemoveCourse,
  handleChangeColor,
  handleClickSyllabusLink,
}) => {
  const { title, instructor } = getCourseTitleAndInstructor(
    course,
    displayLang
  );
  const courseId = course._id;
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
      <ColorCircle className={`color-${color}`} />
      <CourseItemWrapper>
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
            <Manager>
              <Reference>
                {({ ref }) => (
                  <ColorButton
                    className={`color-${color}`}
                    innerRef={ref}
                    onClick={handleToggleColorPopper}
                  />
                )}
              </Reference>
              <Popper placement="top">
                {isPopperOpen
                  ? ({ ref, style, placement, arrowProps }) => (
                      <PopperBox
                        innerRef={ref}
                        style={style}
                        data-placement={placement}
                      >
                        <ColorSelector handleChangeColor={handleChangeColor} />
                        <Arrow
                          innerRef={arrowProps.ref}
                          data-placement={placement}
                          style={arrowProps.style}
                        />
                      </PopperBox>
                    )
                  : () => null}
              </Popper>
            </Manager>
            <InvisibleButton
              onClick={(e) => {
                e.preventDefault();
                handleToggleVisibility(courseId, title);
              }}
            >
              {visibilityIcon}
            </InvisibleButton>

            <a
              style={{ alignSelf: "flex-start" }}
              href={`https://www.wsl.waseda.jp/syllabus/JAA104.php?pKey=${courseId}&pLng=en`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                handleClickSyllabusLink(title);
              }}
            >
              <FontAwesomeIcon
                style={{ color: "#6495ED" }}
                icon={faExternalLinkSquareAlt}
                size="2x"
                transform="shrink-2"
              />
            </a>
            <InvisibleButton
              onClick={(e) => {
                e.preventDefault();
                handleRemoveCourse(courseId, title);
              }}
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

CourseAndPrefItem.propTypes = {
  course: PropTypes.object.isRequired,
};
