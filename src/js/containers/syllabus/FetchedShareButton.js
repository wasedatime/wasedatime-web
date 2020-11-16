import React from "react";
import ShareButton from "../../components/syllabus/ShareButton";

class FetchedShareButton extends React.Component {
  state = { isPopperOpen: false, };

  handleToggleSharePopper = (event) => {
    event.preventDefault();
    this.setState((prevState, props) => {
      return { isPopperOpen: !prevState.isPopperOpen };
    });
  };

  render() {
    // props from components/syllebus/ShareButton.js
    const {
      display,
      shareLink,
      sizesDesktop,
      isInCourseReviewsPage,
      needLineBreak,
    } = this.props;
    // sizesDesktop: Small or Large Screen

    return (
      <ShareButton
        display={display}
        shareLink={shareLink}
        sizesDesktop={sizesDesktop}
        isInCourseReviewsPage={isInCourseReviewsPage}
        isPopperOpen={this.state.isPopperOpen}
        handleToggleSharePopper={this.handleToggleSharePopper}
        needLineBreak={needLineBreak}
      />
    );
  }
}

export default FetchedShareButton;
