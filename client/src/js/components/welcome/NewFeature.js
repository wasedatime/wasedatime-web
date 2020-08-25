import React from "react";
import { withNamespaces } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import { Article } from "../../styled-components/Article";
import { media } from "../../styled-components/utils";
import CourseItem from "../../components/syllabus/CourseItem";

const ExtendedArticle = styled(Article)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  ${media.phone`
    font-size: 16px
  `};
`;

const CourseItemWrapper = styled('div')`
  font-size: 16px;
  width: 400px;
  ${media.phone`
    width: auto;
  `};
`

const styles = {
  h3: {
    margin: "0.6em 0",
    wordBreak: "keep-all",
    fontSize: "1.6em"
  },
  h4: {
    margin: "0.35em 0",
    fontSize: "1.1em"
  }
};

const NewFeature = ({ classes, t, lng }) => {
  const course = {
    "_id": "11G100101001202011G100101011",
    "year": 2020,
    "term": "fallSem",
    "title": "Introduction to Political Analysis [E] 01",
    "title_jp": "Introduction to Political Analysis 01",
    "instructor": "KELLAM, Marisa",
    "instructor_jp": "ケラム マリサ",
    "occurrences": [{ "day": 3, "start_period": 2, "end_period": 2, "building": "-1", "classroom": "undecided", "location": "-1-undecided" }, { "day": 2, "start_period": 3, "end_period": 3, "building": "-1", "classroom": "undecided", "location": "-1-undecided" }], "lang": "EN", "keys": [{ "school": "PSE", "key": "11G100101001202011G100101011" }]
  }
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

          handleOnClick={() => { }}
          handleClickSyllabusLink={() => { }}
          isAddable={true}
          searchTerm={""}
          searchLang={lng}
          course={course}
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
        <br />
        {t("welcome.future")}
      </Typography>
    </ExtendedArticle>
  );
};

export default withNamespaces("translation")(withStyles(styles)(NewFeature));
