import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

import Greeting from "./Greeting";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default
  },
  dotActive: {
    backgroundColor: "#000"
  }
});

class TextMobileStepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0
    };
  }

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  render() {
    const { classes, lang } = this.props;
    const { activeStep } = this.state;
    const setupSteps = [<Greeting lang={lang} />, <Greeting lang={lang} />];
    const maxSteps = setupSteps.length;
    const isNotFirstStep = activeStep !== 0;
    const isNotLastStep = activeStep !== maxSteps - 1;
    return (
      <div className={classes.root}>
        {setupSteps[activeStep]}
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          classes={{
            root: classes.mobileStepper,
            dotActive: classes.dotActive
          }}
          nextButton={
            isNotLastStep ? (
              <Button size="small" onClick={this.handleNext}>
                Next
                <KeyboardArrowRight />
              </Button>
            ) : (
              <Button size="small" onClick={this.handleNext} disabled>
                Finish
                <KeyboardArrowRight />
              </Button>
            )
          }
          backButton={
            isNotFirstStep ? (
              <Button size="small" onClick={this.handleBack}>
                <KeyboardArrowLeft />
                Back
              </Button>
            ) : (
              <Button size="small" disabled />
            )
          }
        />
      </div>
    );
  }
}

TextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(TextMobileStepper);
