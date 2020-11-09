import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCommentDots,
  faExternalLinkSquareAlt,
  faMapMarkerAlt,
  faMinusCircle,
  faPlusCircle,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faLine,
  faLinkedin,
  faTwitterSquare,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";

import { ASE, CJL, CSE, FSE, GEC, PSE, SILS, SSS } from "../../data/schools";
import { getCourseTitleAndInstructor } from "../../utils/courseSearch";
import { highlight } from "../../utils/highlight";
import { SYLLABUS_KEYS } from "../../config/syllabusKeys";
import { media, sizes } from "../../styled-components/utils";
import { InvisibleButton } from "../../styled-components/Button";
import fseIcon from "../../../img/syllabus-icons/fse.png";
import cseIcon from "../../../img/syllabus-icons/cse.png";
import aseIcon from "../../../img/syllabus-icons/ase.png";
import pseIcon from "../../../img/syllabus-icons/pse.png";
import silsIcon from "../../../img/syllabus-icons/sils.png";
import sssIcon from "../../../img/syllabus-icons/sss.png";
import cjlIcon from "../../../img/syllabus-icons/cjl.png";
import gecIcon from "../../../img/syllabus-icons/gec.png";
// import { matches, size } from "lodash";

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
  line-height: 150%;
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

// const MenuIconWrapper = styled("div")`
//   display: "flex",
//   flex: "1 0 auto",
//   flex-direction: column;
//   align-items: center;
//   justifyContent: "flex-end",
// `;

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
  line-height: 120%;
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

/*
const Instructors = styled("div")`
  text-align: left;
  font-size: 1.2em;
  ${media.phone`font-size: 1.0em;`};
`;
*/

const EvalButtonsWrapper = styled("div")`
  flex: 1 0 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 0.9em;
`;

// Review Button
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

  &:hover {
    color: #ffae42;
    background-color: #fff;
    border: 2px solid #ffae42;
  }

  &:focus {
    outline: none;
  }
`; // Case of large Screen

const ViewEvalsIconButton = styled("a")`
  display: block;
  background-color: #fff;
  border: 0px;
  color: #ffae42;
  text-decoration: none;

  &:hover {
    color: #ffae42;
  }

  &:focus {
    outline: none;
  }
`; // Case of Small Screen
// ---

// Share Button
const ShareButton = styled("a")`
  display: block;
  background-color: #aaa;
  border: 0px;
  border-radius: 5px;
  color: #554a53;
  padding: 5px 1rem;
  margin-bottom: 4px;
  text-align: center;
  text-decoration: none;

  &:hover {
    color: #abc;
  }
  &:focus {
    outline: none;
  }
`; // Case of large Screen

const ShareIconButton = styled("a")`
  display: block;
  background-color: #fff;
  border-left: 0px;
  color: #7d7a7c;
  text-decoration: none;

  &:focus {
    outline: none;
  }
`; // Case of Small Screen
// &:hover {
//   color: #abc;
// }

const SocialMediaRow = styled("div")`
  display: block;
  background-color: #fff;
  border-left: 0px;
  text-decoration: none;
  padding-left: 5px;
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

const mapSchoolToIcon = (school) => (
  <SchoolIconItem key={school}>
    <SchoolIconImage src={schoolNameIconMap[school]} />
  </SchoolIconItem>
);

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

const getLocation = (location, t) => {
  if (location === "undecided") {
    return t("syllabus.location.undecided");
  } else {
    return location;
  }
};

const getPeriod = (period, t) => {
  if (period === -1) {
    return t("syllabus.location.undecided");
  } else if (period > 9) {
    return `${parseInt(period / 10)}-${period % 10}`;
  } else {
    return `${period}`;
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
  const yearTerm = combineYearTerm("2020", course[SYLLABUS_KEYS.TERM], t);
  const schoolIcons = mapSchoolToIcon(course[SYLLABUS_KEYS.SCHOOL]);
  const syllabusId = course[SYLLABUS_KEYS.ID];
  const shareLink = `https://wasedatime.com/courseEvals?courseID=${syllabusId}%26searchLang=${searchLang}`; // share link
  //Need to use index as keys due to Waseda's data.
  const occurrences = course[SYLLABUS_KEYS.OCCURRENCES].map(
    (occurrence, index) => {
      const day = getDay(occurrence[SYLLABUS_KEYS.OCC_DAY], t);
      const period = getPeriod(occurrence[SYLLABUS_KEYS.OCC_PERIOD], t);
      const location = getLocation(occurrence[SYLLABUS_KEYS.OCC_LOCATION], t);
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
    }
  );
  // const keywords =
  //   "kws" in course
  //     ? course.kws.map((keyword, index) => {
  //         return (
  //           <li key={keyword} style={{ display: "inline-block" }}>
  //             <Badge>
  //               {keyword === "English-based Undergraduate Program"
  //                 ? t("syllabus.EN-based Undergrad Program")
  //                 : t(`syllabus.${keyword}`)}
  //             </Badge>
  //           </li>
  //         );
  //       })
  //     : null;
  // const keywordsList =
  //   keywords !== null ? <KeywordList>{keywords}</KeywordList> : null;
  const buttonIcon = (
    <FontAwesomeIcon
      style={isAddable ? { color: "#48af37" } : { color: "#ce0115" }}
      icon={isAddable ? faPlusCircle : faMinusCircle}
      size="2x"
      transform="shrink-2"
    />
  );

  const reviewButtonBar = (
    <MediaQuery minWidth={sizes.desktop}>
      {(matches) => {
        return (
          matches &&
          !isInCourseEvalsPage && (
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
  );

  const shareButtonBar = ( // Share Button Function for large page
    <MediaQuery minWidth={sizes.desktop}>
      {(matches) => {
        if (matches && isInCourseEvalsPage) {
          return (
            <EvalButtonsWrapper>
              <ShareButton>
                <FontAwesomeIcon icon={faShareAlt} /> {t("Share")}
              </ShareButton>
            </EvalButtonsWrapper>
          );
        } else {
          return "";
        }
      }}
    </MediaQuery>
  );

  const reviewButtonIcon = ( // Share Button Function for small page
    <MediaQuery maxWidth={sizes.desktop}>
      {(matches) => {
        /* To course Evaluation Button */
        return (
          matches &&
          !isInCourseEvalsPage && (
            <ViewEvalsIconButton
              href={`/courseEvals?courseID=${syllabusId}&searchLang=${searchLang}`}
            >
              <FontAwesomeIcon icon={faCommentDots} size="2x" />{" "}
            </ViewEvalsIconButton>
          )
        );
      }}
    </MediaQuery>
  );

  const shareButtonIcon = ( // Share Button Function for small page
    <MediaQuery maxWidth={sizes.desktop}>
      {(matches) => {
        /* Share Button */
        if (matches && isInCourseEvalsPage) {
          return (
            <ShareIconButton>
              <FontAwesomeIcon icon={faShareAlt} size="2x" />{" "}
            </ShareIconButton>
          );
        } else {
          return "";
        }
      }}
    </MediaQuery>
  );

  //Sub button part ---------------------------------------------------
  const twitterButton = (
    <MediaQuery maxWidth={sizes.desktop}>
      {(matches) => {
        /* Share Button */
        return (
          matches &&
          isInCourseEvalsPage && (
            <SocialMediaRow>
              <a
                className="twitter-share-button"
                href={`https://twitter.com/intent/tweet?url=${shareLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitterSquare}
                  size="lg" // lg = slight large than 1x
                  style={{ color: "#00ACEE" }}
                />{" "}
              </a>
            </SocialMediaRow>
          )
        );
      }}
    </MediaQuery>
  );

  const facebookButton = (
    <MediaQuery maxWidth={sizes.desktop}>
      {(matches) => {
        /* Share Button */
        return (
          matches &&
          isInCourseEvalsPage && (
            <SocialMediaRow>
              <a
                className="facebook-share-button"
                href={`https://www.facebook.com/sharer/sharer.php?title=&u=${shareLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  size="lg" // lg = slight large than 1x
                  style={{ color: "#3B5998" }}
                />{" "}
              </a>
            </SocialMediaRow>
          )
        );
      }}
    </MediaQuery>
  );

  const linkedinButton = (
    <MediaQuery maxWidth={sizes.desktop}>
      {(matches) => {
        /* Share Button */
        return (
          matches &&
          isInCourseEvalsPage && (
            <SocialMediaRow>
              <a
                className="linkedin-share-button"
                href={`http://www.linkedin.com/shareArticle?mini=true&url=${shareLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="lg" // lg = slight large than 1x
                  style={{ color: "#0E76A8" }}
                />{" "}
              </a>
            </SocialMediaRow>
          )
        );
      }}
    </MediaQuery>
  );

  const lineButton = (
    <MediaQuery maxWidth={sizes.desktop}>
      {(matches) => {
        /* Share Button */
        return (
          matches &&
          isInCourseEvalsPage && (
            <SocialMediaRow>
              <a
                className="line-share-button"
                href={`https://social-plugins.line.me/lineit/share?url=${shareLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLine}
                  size="lg" // lg = slight large than 1x
                  style={{ color: "#00B400" }}
                />{" "}
              </a>
            </SocialMediaRow>
          )
        );
      }}
    </MediaQuery>
  );

  const whatappButton = (
    <MediaQuery maxWidth={sizes.desktop}>
      {(matches) => {
        /* Share Button */
        return (
          matches &&
          isInCourseEvalsPage && (
            <SocialMediaRow>
              <a
                className="whatapp-share-button"
                href={`https://wa.me/?text=${shareLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsappSquare}
                  size="lg" // lg = slight large than 1x
                  style={{ color: "#4FCE5D" }}
                />{" "}
              </a>
            </SocialMediaRow>
          )
        );
      }}
    </MediaQuery>
  );

  return (
    <RowWrapper>
      <CourseItemWrapper>
        <StyledHeading>{highlightedTitle}</StyledHeading>
        <CourseItemRow>
          <IconBadgeWrapper>
            <SchoolIconList>{schoolIcons}</SchoolIconList>
            <Badge>{t(`syllabus.${course[SYLLABUS_KEYS.LANG]}`)}</Badge>
            {/* keywordsList */}
          </IconBadgeWrapper>
          <div
            style={{
              display: "flex",
              flex: "1 0 auto",
              justifyContent: "flex-end",
              borderRadius: "5px",
            }}
          >
            <a /* Syllebus Button */
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
            <InvisibleButton /* Add Button */
              onClick={(e) => {
                e.preventDefault();
                handleOnClick(title, lng);
              }}
            >
              {buttonIcon}
            </InvisibleButton>
            {reviewButtonIcon}

            <InvisibleButton>{shareButtonIcon}</InvisibleButton>
          </div>
        </CourseItemRow>

        <DetailWrapper>
          <DescriptionWrapper>
            <Description>{yearTerm}</Description>
            <Description>
              <OccurrenceList>{occurrences}</OccurrenceList>
            </Description>
            <Description>{highlightedInstructor}</Description>
          </DescriptionWrapper>

          {facebookButton}
          {linkedinButton}
          {twitterButton}
          {whatappButton}
          {lineButton}

          <InvisibleButton>
            {reviewButtonBar}
            {shareButtonBar}
          </InvisibleButton>
        </DetailWrapper>
      </CourseItemWrapper>
    </RowWrapper>
  );
};

// <Instructors>{highlightedInstructor}</Instructors>

export default withNamespaces("translation")(CourseItem);

CourseItem.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  course: PropTypes.object.isRequired,
  isAddable: PropTypes.bool.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

/*
- Small Screen
- Large Screen
*/
