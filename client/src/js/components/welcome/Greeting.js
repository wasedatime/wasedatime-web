import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

import { Article } from "../../styled-components/Article";
import logo from "../../../img/logo.png";
import { media } from "../../styled-components/utils";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

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
  formControlLabel_label: {
    fontSize: "1em"
  }
};

const Greeting = ({ classes }) => {
  return (
    <ExtendedArticle>
      <Logo src={logo} />
      <Typography
        variant="h3"
        component="h3"
        align="center"
        gutterBottom
        className={classes.h3}
      >
        WasedaTime へようこそ!
      </Typography>
      <Typography
        variant="h3"
        component="h3"
        align="center"
        gutterBottom
        className={classes.h3}
      >
        Welcome to WasedaTime!
      </Typography>
      <FormControl component="fieldset" className={undefined}>
        <RadioGroup
          aria-label="Language"
          name="language"
          className={undefined}
          value={"en"}
          onChange={undefined}
          row
        >
          <FormControlLabel
            classes={{ label: classes.formControlLabel_label }}
            value="jp"
            control={<Radio />}
            label="日本語"
          />
          <FormControlLabel
            classes={{ label: classes.formControlLabel_label }}
            value="en"
            control={<Radio />}
            label="English"
          />
        </RadioGroup>
      </FormControl>
    </ExtendedArticle>
  );
};

export default withStyles(styles)(Greeting);
