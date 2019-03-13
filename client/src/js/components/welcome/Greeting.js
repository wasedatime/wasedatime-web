import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import { changeUserDisplayLang } from "../../actions/user";
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
    wordBreak: "keep-all"
  },
  formControlLabelLabel: {
    fontSize: "1em"
  },
  radioChecked: {
    color: "#b51e36 !important"
  }
};

class Greeting extends React.Component {
  handleChangeLang = event => {
    event.preventDefault();
    const lang = event.target.value;
    this.props.changeUserDisplayLang(lang);
  };

  render() {
    const { classes, lang } = this.props;
    return (
      <ExtendedArticle>
        <Logo src={logo} />
        {lang === LANGS.JP ? (
          <Typography
            variant="h3"
            component="h3"
            align="center"
            gutterBottom
            className={classes.h3}
          >
            WasedaTime へようこそ!
          </Typography>
        ) : (
          <Typography
            variant="h3"
            component="h3"
            align="center"
            gutterBottom
            className={classes.h3}
          >
            Welcome to WasedaTime!
          </Typography>
        )}
        <FormControl component="fieldset" className={undefined}>
          <RadioGroup
            aria-label="Language"
            name="language"
            value={lang}
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

const mapDispatchToProps = {
  changeUserDisplayLang
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(Greeting));
