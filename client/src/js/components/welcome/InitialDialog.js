import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import { WrapperWithBackground } from "../../styled-components/Wrapper";
import HorizontalLinearStepper from "./HorizontalLinearStepper";
import TextMobileStepper from "./TextMobileStepper";
import homeBackground from "../../../img/home_background.jpg";
import homeBackgroundPhone from "../../../img/home_background-phone.jpg";

const styles = {
  dialogPaper: {
    margin: "40px"
  }
};

class InitialDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lang: null };
  }
  render() {
    const { classes } = this.props;
    return (
      <WrapperWithBackground
        background={homeBackground}
        backgroundPhone={homeBackgroundPhone}
      >
        <Dialog
          open={true}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          classes={{ paper: classes.dialogPaper }}
        >
          <TextMobileStepper />
        </Dialog>
      </WrapperWithBackground>
    );
  }
}

const mapDispatchToProps = {
  change
};

export default withStyles(styles)(InitialDialog);
