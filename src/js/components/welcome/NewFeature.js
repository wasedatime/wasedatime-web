import React from "react";
import {withNamespaces} from "react-i18next";
import {withStyles} from "@material-ui/core/styles";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import {Article} from "../../styled-components/Article";
import {media} from "../../styled-components/utils";
import CourseItem from "../syllabus/CourseItem";

const ExtendedArticle = styled(Article)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  ${media.phone`
    font-size: 16px
  `};
`;

const CourseItemWrapper = styled("div")`
  pointer-events: none !important;
  font-size: 16px;
  width: 500px;
  ${media.phone`
    width: auto;
  `};
`;

const styles = {
  h3: {
    margin: "0.6em 0",
    wordBreak: "keep-all",
    fontSize: "1.6em",
  },
  h4: {
    margin: "0.35em 0",
    fontSize: "1.1em",
  },
};

const NewFeature = ({ classes, t, lng }) => {
  const dummyCourse = {
    _id: "11G100101001202011G100101011",
    y: 2020,
    tm: "fallSem",
    t: "Introduction to Political Analysis [E] 01",
    tj: "Introduction to Political Analysis 01",
    i: "KELLAM, Marisa",
    ij: "ケラム マリサ",
    e: true,
    os: [
      {
        d: 3,
        s: 2,
        e: 2,
        b: "-1",
        c: "undecided",
        l: "-1-undecided",
      },
      {
        d: 2,
        s: 3,
        e: 3,
        b: "-1",
        c: "undecided",
        l: "-1-undecided",
      },
    ],
    l: "EN",
    ks: [{ s: "PSE", k: "11G100101001202011G100101011" }],
  };
  return (
    <ExtendedArticle>
      <Typography
        variant="h3"
        component="h3"
        align="center"
        gutterBottom
        className={classes.h3}
      >
        {t("welcome.courseEvals")}
      </Typography>
      <CourseItemWrapper>
        <CourseItem
          handleOnClick={() => {}}
          handleClickSyllabusLink={() => {}}
          isAddable={true}
          searchTerm={""}
          searchLang={lng}
          course={dummyCourse}
          isInCourseEvalsPage={false}
        />
      </CourseItemWrapper>
      <Typography
        className={classes.h4}
        variant="h4"
        component="p"
        align="center"
        gutterBottom
      >
        {t("welcome.courseEvalsDetails1")}
        <br />
        {t("welcome.courseEvalsDetails2")}
      </Typography>
    </ExtendedArticle>
  );
};

export default withNamespaces("translation")(withStyles(styles)(NewFeature));
