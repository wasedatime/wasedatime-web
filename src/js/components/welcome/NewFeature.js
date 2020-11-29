import React from "react";
import { withNamespaces } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import { Article } from "../../styled-components/Article";
import { media } from "../../styled-components/utils";
import CourseItem from "../syllabus/CourseItem";
import { Divider } from "semantic-ui-react";

import { allSchoolNameIconMap } from "../../utils/schoolNameIconMap";

const ExtendedArticle = styled(Article)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  ${media.phone`
    font-size: 16px
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
  const schoolNameIconMap = allSchoolNameIconMap(lng);
  return (
    <ExtendedArticle>
      <Divider horizontal style={{ fontSize: "1.3em" }}>
        {t("welcome.newSchoolsAdded")}
      </Divider>

      <Typography
        className={classes.h4}
        variant="h4"
        component="p"
        align="center"
        gutterBottom
      >
        {t("welcome.allSchoolsAdded")}
        <br />
        {Object.keys(schoolNameIconMap).map((name) => (
          <img src={schoolNameIconMap[name]} style={{ width: "3em" }} />
        ))}
      </Typography>
    </ExtendedArticle>
  );
};

export default withNamespaces("translation")(withStyles(styles)(NewFeature));
