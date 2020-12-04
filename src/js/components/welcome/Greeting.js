import React from "react";
import { withNamespaces } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import { Article } from "../../styled-components/Article";
import { media } from "../../styled-components/utils";
import LANGS from "../../config/langs";
import logo from "../../../img/logo.png";

const ExtendedArticle = styled(Article)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled("img")`
  width: 100px;
  height: 100px;
  margin: 10px;
  ${media.phone`width: 90px; height: 90px;`};
`;

const styles = {
  h3: {
    wordBreak: "keep-all",
  },
  h4: {
    wordBreak: "keep-all",
    color: "#0b35c8 !important",
  },
  formControlLabelLabel: {
    fontSize: "1em",
  },
  radioChecked: {
    color: "#b51e36 !important",
  },
};

class Greeting extends React.Component {
  handleChangeLang = (event) => {
    event.preventDefault();
    const lng = event.target.value;
    this.props.i18n.changeLanguage(lng);
  };

  render() {
    const { classes, t, lng } = this.props;
    return (
      <ExtendedArticle>
        <Logo src={logo} alt="" width="50" height="50" />
        <Typography
          variant="h3"
          component="h3"
          align="center"
          gutterBottom
          className={classes.h3}
        >
          {t("welcome.welcome")}
        </Typography>
        <Typography
          variant="h4"
          component="h4"
          align="center"
          gutterBottom
          className={classes.h4}
        >
          {`${t("welcome.newFeature")} ${t("welcome.newSchoolsAdded")}`}
        </Typography>
        <Typography variant="h4" component="p" align="center" gutterBottom>
          {t("welcome.returningUsers")}
        </Typography>
        <FormControl component="fieldset" className={undefined}>
          <RadioGroup
            aria-label="Language"
            name="language"
            value={lng}
            onChange={this.handleChangeLang}
            row
          >
            <FormControlLabel
              classes={{ label: classes.formControlLabelLabel }}
              value={LANGS.JP}
              control={<Radio classes={{ checked: classes.radioChecked }} />}
              label="日本語"
            />
            <FormControlLabel
              classes={{ label: classes.formControlLabelLabel }}
              value={LANGS.EN}
              control={<Radio classes={{ checked: classes.radioChecked }} />}
              label="English"
            />
          </RadioGroup>
        </FormControl>
      </ExtendedArticle>
    );
  }
}

export default withNamespaces("translation")(withStyles(styles)(Greeting));
