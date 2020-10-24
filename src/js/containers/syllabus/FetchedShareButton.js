import React, { version } from "react";

import ShareButton from "../../components/syllabus/ShareButton"

// function WindowResize() {
//     FetchedShareButton.setState(() => {
//       console.log("Screen Re-sized!!");
//       return { isPopperOpen: false };
//     });
// }

class FetchedShareButton extends React.Component {
  state = { isPopperOpen: false, 
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
          //isWindowResize={this.isWindowResize}
          //handleWindowResize={this.handleWindowResize}
      />
    );
  }
}

export default FetchedShareButton;