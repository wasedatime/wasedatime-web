import React from "react";
import { withNamespaces } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import { Article } from "../../styled-components/Article";
import { media } from "../../styled-components/utils";
import oscar from "../../../img/contributors/oscar.jpg";
import mei from "../../../img/contributors/mei.jpg";
import hao from "../../../img/contributors/hao.jpg";

const ExtendedArticle = styled(Article)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  ${media.phone`
    font-size: 16px
  `};
`;

const Wrapper = styled("div")`
  display: flex;
  flex-direction: row;
`;

const Introduction = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled("span")`
  font-size: 1.2em;
`;

const Bio = styled("span")`
  font-size: 0.9em;
  margin-top: 0.2em;
  color: #555;
`;

const Position = styled("span")`
  font-size: 0.9em;
  color: #555;
`;

const StyledAvatar = styled(Avatar)`
  margin: 10px;
  width: 80px !important;
  height: 80px !important;
  ${media.phone`
    width: 60px !important;
    height: 60px !important;
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

class Contributors extends React.Component {
  handleChangeLang = event => {
    event.preventDefault();
    const lng = event.target.value;
    this.props.i18n.changeLanguage(lng);
  };

  render() {
    const { classes, t } = this.props;
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
        <Wrapper>
          <StyledAvatar alt="Oscar Wang" src={oscar} />
          <Introduction>
            <Name>Oscar Wang</Name>
            <Position>{t("welcome.Founder")}</Position>
            <Bio>
              <i>WasedaTime &gt; Course N@vi</i>
            </Bio>
          </Introduction>
        </Wrapper>
        <Wrapper>
          <StyledAvatar alt="Mei" src={mei} />
          <Introduction>
            <Name>Mei</Name>
            <Position>{t("welcome.Frontendtranslation")}</Position>
            <Bio>
              <i>Join us and let’s think!</i>
            </Bio>
          </Introduction>
        </Wrapper>
        <Wrapper>
          <StyledAvatar alt="Hao" src={hao} />
          <Introduction>
            <Name>Hao</Name>
            <Position>{t("welcome.Frontend")}</Position>
            <Bio>
              <i>{t("welcome.May WasedaTime be with you")}</i>
            </Bio>
          </Introduction>
        </Wrapper>
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
            href="https://github.com/wasetime/wasetime-web/graphs/contributors"
            target="_blank"
          >
            {t("welcome.these contributors")}
          </StyledLink>
          {t("welcome.a")}
        </Typography>
      </ExtendedArticle>
    );
  }
}

export default withNamespaces("translation")(withStyles(styles)(Contributors));
