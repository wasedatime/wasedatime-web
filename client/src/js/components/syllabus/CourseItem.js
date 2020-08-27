import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faMinusCircle,
  faClock,
  faMapMarkerAlt,
  faExternalLinkSquareAlt,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";

import { SILS, PSE, SSS, FSE, ASE, CSE, CJL, GEC } from "../../data/schools";
import { getCourseTitleAndInstructor } from "../../utils/courseSearch";
import { highlight } from "../../utils/highlight";
import { media } from "../../styled-components/utils";
import { sizes } from "../../styled-components/utils";
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

const DetailWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  font-size: 1.2em;
  flex-wrap: wrap;
  ${media.phone`font-size: 1.0em;`};
`;

const DescriptionWrapper = styled("div")`
  flex: 3 0 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Description = styled("div")`
  flex: 1 0 auto;
  text-align: left;
`;

const Instructors = styled("div")`
  text-align: left;
  font-size: 1.2em;
  ${media.phone`font-size: 1.0em;`};
`;

const EvalButtonsWrapper = styled("div")`
  flex: 1 0 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 0.9em;
`;

const ViewEvalsButton = styled("a")`
  display: block;
  background-color: #ffae42;
  border: 0px;
  border-radius: 5px;
  color: #fff;
  padding: 5px 1rem;
  margin-bottom: 4px;
  text-align: center;
  text-decoration: none;

  &:focus {
    outline: none;
  }
`;

const ViewEvalsIconButton = styled("a")`
  display: block;
  background-color: #fff;
  border: 0px;
  color: #ffae42;
  text-decoration: none;

  &:focus {
    outline: none;
  }
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
  [GEC]: gecIcon,
};

const mapLinkToSchoolIcon = (keys) => {
  return keys.map((key) => {
    return (
      <SchoolIconItem key={key.school}>
        <SchoolIconImage src={schoolNameIconMap[key.school]} />
      </SchoolIconItem>
    );
  });
};

const combineYearTerm = (year, term, t) => {
  return `${year} ${t(`syllabus.semesterMap.${term}`)}`;
};

const getDay = (day, t) => {
  switch (day) {
    case 1:
      return `${t("common.mon")}.`;
    case 2:
      return `${t("common.tue")}.`;
    case 3:
      return `${t("common.wed")}.`;
    case 4:
      return `${t("common.thu")}.`;
    case 5:
      return `${t("common.fri")}.`;
    case 6:
      return `${t("common.sat")}.`;
    case 7:
      return `${t("common.sun")}.`;
    default:
      return "";
  }
};

const getLocation = (building, classroom, t) => {
  if (building === "-1") {
    if (classroom === "undecided") {
      return t("syllabus.location.undecided");
    }
    return classroom;
  } else {
    return `${building}-${classroom}`;
  }
};

const getPeriod = (start_period, end_period, t) => {
  if (start_period === -1) {
    return t("syllabus.location.undecided");
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
  handleOnClick,
  handleClickSyllabusLink,
  isInCourseEvalsPage,
  t,
  lng,
}) => {
  const { title, instructor } = getCourseTitleAndInstructor(course, searchLang);
  const highlightedTitle = highlight(searchTerm, searchLang, title);
  const highlightedInstructor = highlight(searchTerm, searchLang, instructor);
  const yearTerm = combineYearTerm(course.year, course.term, t);
  const schoolIcons = mapLinkToSchoolIcon(course.keys);
  const syllabusId = course._id;
  //Need to use index as keys due to Waseda's data.
  const occurrences = course.occurrences.map((occurrence, index) => {
    const day = getDay(occurrence.day, t);
    const period = getPeriod(occurrence.start_period, occurrence.end_period, t);
    const location = getLocation(occurrence.building, occurrence.classroom, t);
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
                  ? t("syllabus.EN-based Undergrad Program")
                  : t(`syllabus.${keyword}`)}
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
            <Badge>{t(`syllabus.${course.lang}`)}</Badge>
            {keywordsList}
          </IconBadgeWrapper>
          <div
            style={{
              display: "flex",
              flex: "1 0 auto",
              justifyContent: "flex-end",
            }}
          >
            <a
              style={{ alignSelf: "flex-start" }}
              href={`https://www.wsl.waseda.jp/syllabus/JAA104.php?pKey=${syllabusId}${t(
                "syllabus.langParam"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                handleClickSyllabusLink(title, lng);
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
                handleOnClick(title, lng);
              }}
            >
              {buttonIcon}
            </InvisibleButton>
            <MediaQuery maxWidth={sizes.desktop}>
              {(matches) => {
                return (
                  matches &&
                  !isInCourseEvalsPage &&
                  course.has_evals && (
                    <ViewEvalsIconButton
                      href={`/courseEvals?courseID=${syllabusId}&searchLang=${searchLang}`}
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faCommentDots} size="2x" />{" "}
                    </ViewEvalsIconButton>
                  )
                );
              }}
            </MediaQuery>
          </div>
        </CourseItemRow>
        <DetailWrapper>
          <DescriptionWrapper>
            <Description>{yearTerm}</Description>
            <Description>
              <OccurrenceList>{occurrences}</OccurrenceList>
            </Description>
          </DescriptionWrapper>
          <MediaQuery minWidth={sizes.desktop}>
            {(matches) => {
              return (
                matches &&
                !isInCourseEvalsPage &&
                course.has_evals && (
                  <EvalButtonsWrapper>
                    <ViewEvalsButton
                      href={`/courseEvals?courseID=${syllabusId}&searchLang=${searchLang}`}
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faCommentDots} />{" "}
                      {t("courseEvals.Reviews")}
                    </ViewEvalsButton>
                  </EvalButtonsWrapper>
                )
              );
            }}
          </MediaQuery>
        </DetailWrapper>
        <Instructors>{highlightedInstructor}</Instructors>
      </CourseItemWrapper>
    </RowWrapper>
  );
};

export default withNamespaces("translation")(CourseItem);

CourseItem.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  course: PropTypes.object.isRequired,
  isAddable: PropTypes.bool.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};
