import React from "react";
import { withNamespaces } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import { Article } from "../../styled-components/Article";
import Developers from "./Developers";
import { media } from "../../styled-components/utils";

const ExtendedArticle = styled(Article)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  ${media.phone`
    font-size: 16px
  `};
`;

const StyledLink = styled("a")`
  color: #b51e36;
  text-decoration: none;
`;

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

const Contributors = ({ classes, t }) => {
  return (
    <ExtendedArticle>
      <Typography
        variant="h3"
        component="h3"
        align="center"
        gutterBottom
        className={classes.h3}
      >
        {t("welcome.Meet our developers!")}
      </Typography>
      <Developers t={t} />
      <Typography
        className={classes.h4}
        variant="h4"
        component="p"
        align="center"
        gutterBottom
      >
        {t("welcome.We also received help from")}
        <br />
        <StyledLink
          href="https://github.com/wasedatime/wasedatime-web#contributors"
          target="_blank"
        >
          {t("welcome.these contributors")}
        </StyledLink>
        {t("welcome.a")}
      </Typography>
    </ExtendedArticle>
  );
};

export default withNamespaces("translation")(withStyles(styles)(Contributors));
