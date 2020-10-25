import React from "react";
import ShareButton from "../../components/syllabus/ShareButton";

// function WindowResize() {
//     FetchedShareButton.setState(() => {
//       console.log("Screen Re-sized!!");
//       return { isPopperOpen: false };
//     });
// }

class FetchedShareButton extends React.Component {
  state = {
    isPopperOpen: false,
    //isWindowResize: false
  };

  handleToggleSharePopper = (event) => {
    event.preventDefault();
    this.setState((prevState, props) => {
      return { isPopperOpen: !prevState.isPopperOpen };
    });
  };

  // handleWindowResize = () => {
  //   window.addEventListener('resize',WindowResize());
  // }

  render() {
    // props from components/syllebus/ShareButton.js
    const {
      display,
      shareLink,
      sizesDesktop,
      isInCourseEvalsPage,
    } = this.props;
    // sizesDesktop: Small or Large Screen

    return (
      <ShareButton
        display={display}
        shareLink={shareLink}
        sizesDesktop={sizesDesktop}
        isInCourseEvalsPage={isInCourseEvalsPage}
        isPopperOpen={this.state.isPopperOpen}
        handleToggleSharePopper={this.handleToggleSharePopper}
      />
    );
  }
}

export default FetchedShareButton;
