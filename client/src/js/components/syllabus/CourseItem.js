import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faMinusCircle,
  faClock,
  faMapMarkerAlt,
  faExternalLinkSquareAlt
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import { SILS, PSE, SSS, FSE, ASE, CSE, CJL, GEC } from "../../data/schools";
import { semesterMap } from "../../data/semesters";
import { getCourseTitleAndInstructor } from "../../utils/courseSearch";
import { highlight } from "../../utils/highlight";
import { media } from "../../styled-components/utils";
import { InvisibleButton } from "../../styled-components/Button";
import fseIcon from "../../../img/syllabus-icons/fse.png";
import cseIcon from "../../../img/syllabus-icons/cse.png";
import aseIcon from "../../../img/syllabus-icons/ase.png";
import pseIcon from "../../../img/syllabus-icons/pse.png";
import silsIcon from "../../../img/syllabus-icons/sils.png";
import sssIcon from "../../../img/syllabus-icons/sss.png";
import cjlIcon from "../../../img/syllabus-icons/cjl.png";
import gecIcon from "../../../img/syllabus-icons/gec.png";

const RowWrapper = styled("li")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow-y: hidden;
`;

const CourseItemWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  align-items: stretch;
  background-color: #fff;
  border: none;
  margin: 0.2em 0;
  padding: 0.5em 0.8em;
  width: 100%;
`;

const StyledHeading = styled("h3")`
  margin: 0;
  text-align: left;
  font-size: 1.2em;
  ${media.phone`font-size: 1.1em;`};
  font-weight: 600;
  color: #000;
`;

const CourseItemRow = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const IconBadgeWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

const SchoolIconList = styled("ul")`
  display: flex;
  flex-direction: row;
  margin: 0.1em 0;
  padding: 0;
  list-style: none;
  list-style-type: none;
`;

const SchoolIconItem = styled("li")`
  display: flex;
  margin: 0 0.3em 0 0;
  padding: 0;
`;

const SchoolIconImage = styled("img")`
  height: 2.1em;
`;

const Badge = styled("span")`
  display: inline-block;
  background-color: #666;
  color: #fff;
  padding: 0.15em 0.3em;
  border: none;
  border-radius: 0.2em;
  font-size: 0.8em;
  margin: 0.1em 0.3em 0.1em 0;
`;

const KeywordList = styled(SchoolIconList)`
  flex-wrap: wrap;
`;

const DescriptionWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.2em;
  ${media.phone`font-size: 1.1em;`};
`;

const Description = styled("div")`
  flex: 1 0 auto;
  text-align: left;
`;

const OccurrenceList = styled("ul")`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
`;

const schoolNameIconMap = {
  [SILS]: silsIcon,
  [PSE]: pseIcon,
  [SSS]: sssIcon,
  [FSE]: fseIcon,
  [CSE]: cseIcon,
  [ASE]: aseIcon,
  [CJL]: cjlIcon,
  [GEC]: gecIcon
};

const mapLinkToSchoolIcon = keys => {
  return keys.map(key => {
    return (
      <SchoolIconItem key={key.school}>
        <SchoolIconImage src={schoolNameIconMap[key.school]} />
      </SchoolIconItem>
    );
  });
};

const combineYearTerm = (year, term) => {
  return `${year} ${semesterMap[term]}`;
};

const getDay = day => {
  switch (day) {
    case 1:
      return "Mon.";
    case 2:
      return "Tue.";
    case 3:
      return "Wed.";
    case 4:
      return "Thur.";
    case 5:
      return "Fri.";
    case 6:
      return "Sat.";
    case 7:
      return "Sun.";
    default:
      return "";
  }
};

const getLocation = (building, classroom) => {
  if (building === "-1") {
    return classroom;
  } else {
    return `${building}-${classroom}`;
  }
};

const getPeriod = (start_period, end_period) => {
  if (start_period === -1) {
    return "undecided";
  } else if (start_period === end_period) {
    return `${start_period}`;
  } else {
    return `${start_period}-${end_period}`;
  }
};

const CourseItem = ({
  searchTerm,
  searchLang,
  course,
  isAddable,
  handleOnClick
}) => {
  const { title, instructor } = getCourseTitleAndInstructor(course, searchLang);
  const highlightedTitle = highlight(searchTerm, searchLang, title);
  const highlightedInstructor = highlight(searchTerm, searchLang, instructor);
  const yearTerm = combineYearTerm(course.year, course.term);
  const schoolIcons = mapLinkToSchoolIcon(course.keys);
  const syllabusId = course._id;
  //Need to use index as keys due to Waseda's data.
  const occurrences = course.occurrences.map((occurrence, index) => {
    const day = getDay(occurrence.day);
    const period = getPeriod(occurrence.start_period, occurrence.end_period);
    const location = getLocation(occurrence.building, occurrence.classroom);
    return (
      <li key={index}>
        <span>
          <FontAwesomeIcon icon={faClock} size="1x" />
          &nbsp;
          {`${day}${period}`}
          &nbsp;&nbsp;
          <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" />
          &nbsp;
          {`${location}`}
        </span>
      </li>
    );
  });
  const keywords =
    "keywords" in course
      ? course.keywords.map((keyword, index) => {
          return (
            <li key={keyword} style={{ display: "inline-block" }}>
              <Badge>
                {keyword === "English-based Undergraduate Program"
                  ? "EN-based Undergrad Program"
                  : keyword}
              </Badge>
            </li>
          );
        })
      : null;
  const keywordsList =
    keywords !== null ? <KeywordList>{keywords}</KeywordList> : null;
  const buttonIcon = (
    <FontAwesomeIcon
      style={isAddable ? { color: "#48af37" } : { color: "#ce0115" }}
      icon={isAddable ? faPlusCircle : faMinusCircle}
      size="2x"
      transform="shrink-2"
    />
  );
  return (
    <RowWrapper>
      <CourseItemWrapper>
        <StyledHeading>{highlightedTitle}</StyledHeading>
        <CourseItemRow>
          <IconBadgeWrapper>
            <SchoolIconList>{schoolIcons}</SchoolIconList>
            <Badge>{course.lang}</Badge>
            {keywordsList}
          </IconBadgeWrapper>
          <div
            style={{
              display: "flex",
              flex: "1 0 auto",
              justifyContent: "flex-end"
            }}
          >
            <a
              style={{ alignSelf: "flex-start" }}
              href={`https://www.wsl.waseda.jp/syllabus/JAA104.php?pKey=${syllabusId}&pLng=en`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                style={{ color: "#6495ED" }}
                icon={faExternalLinkSquareAlt}
                size="2x"
                transform="shrink-2"
              />
            </a>
            <InvisibleButton onClick={handleOnClick}>
              {buttonIcon}
            </InvisibleButton>
          </div>
        </CourseItemRow>
        <DescriptionWrapper>
          <Description>{yearTerm}</Description>
          <Description>
            <OccurrenceList>{occurrences}</OccurrenceList>
          </Description>
          <Description>{highlightedInstructor}</Description>
        </DescriptionWrapper>
      </CourseItemWrapper>
    </RowWrapper>
  );
};

export default CourseItem;

CourseItem.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  course: PropTypes.object.isRequired
};
