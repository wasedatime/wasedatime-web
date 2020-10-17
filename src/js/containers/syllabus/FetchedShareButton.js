import React from "react";
import ShareButton from "../../components/syllabus/ShareButton"

class FetchedShareButton extends React.Component {
  state = { isPopperOpen: false, };

  handleToggleSharePopper = (event) => {
    event.preventDefault();
    this.setState((prevState, props) => {
      return { isPopperOpen: !prevState.isPopperOpen };
    });
  };

  render() {
    return (
      <ShareButton
        // passed from components/syllebus/ShareButton.js
        display={this.props.display}
        shareLink={this.props.shareLink}
        sizesDesktop={this.props.sizesDesktop} // = Small or Large Screen
        isInCourseEvalsPage={this.props.isInCourseEvalsPage}
        // logic in containers/syllebus/FetchedShareButton.js
        isPopperOpen={this.state.isPopperOpen}
        handleToggleSharePopper={this.handleToggleSharePopper}
      />
    );
  }
}

export default FetchedShareButton;