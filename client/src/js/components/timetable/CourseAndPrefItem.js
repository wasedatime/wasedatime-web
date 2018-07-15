import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faToggleOn, faToggleOff,
  faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import { media } from '../../utils/styledComponents';

const RowWrapper = styled('li')`
  display: flex;
  flex-direction: row;
  padding: .3em 1em;
`;

const CourseItemWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  align-items: stretch;
  color: #000;
`;

const ColorSquare = styled('div')`
  width: 1.5em;
  height: 1.5em;
  margin: .8em .8em 0 0;
  border: solid 2px;
  border-radius: .3em;
`

const StyledHeading = styled('h3')`
  margin: 0;
  text-align: left;
  font-size: 1.2em;
  ${media.phone`font-size: 1.1em;`};
  font-weight: 600;
`;

const CourseItemRow = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const InvisibleButton = styled('button')`
  align-self: flex-start;
  background-color: #fff;
  border: none;
  padding: 0;
  outline: 0;
`

const CourseAndPrefItem = ({ color, visibility, course,
  handleToggleVisibility, handleRemoveCourse, handleChangeColor }) => {
  const title = course.title;
  const instructor = course.instructor;
  const syllabusLink = course.links[0].link;
  const removeCourseIcon = <FontAwesomeIcon
      style={{color: "#ce0115"}}
      icon={faMinusCircle}
      size="2x"
      transform="shrink-2"
    />;
  const visibilityIcon = <FontAwesomeIcon
    style={{color: "#48af37"}}
    icon={visibility ? faToggleOn : faToggleOff}
    size="2x"
    transform="shrink-2"
  />;
  return (
    <RowWrapper>
      <InvisibleButton onClick={handleChangeColor}>
        <ColorSquare
          className={`color-${color}`}
        />
      </InvisibleButton>
      <CourseItemWrapper>
        <StyledHeading>
          {title}
        </StyledHeading>
        <CourseItemRow>
          <div style={{
            fontSize: "1.2em",
            overflowWrap: "break-word",
            wordWrap: "break-word",
            flex: "1 0 auto",
            width: "0"
          }}>
            {instructor}
          </div>
          <div style={{display: "flex", flex: "0 1 auto", justifyContent: "flex-end"}}>
            <InvisibleButton onClick={handleToggleVisibility}>
              {visibilityIcon}
            </InvisibleButton>
            <a style={{alignSelf: "flex-start"}} href={`https://www.wsl.waseda.jp/syllabus/JAA104.php?pKey=${syllabusLink}&pLng=en`} target="_blank">
              <FontAwesomeIcon style={{color: "#6495ED"}}
                icon={faExternalLinkSquareAlt}
                size="2x"
                transform="shrink-2"
              />
            </a>
            <InvisibleButton onClick={handleRemoveCourse}>
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
  course: PropTypes.object.isRequired
};
