import React from "react";
import { withRouter } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import { Segment, Header } from "semantic-ui-react";
import styled from "styled-components";
import { Auth } from "aws-amplify";
import { setUserInfo } from "../../actions/user";

const RedirectMessage = styled(Segment)`
  margin-top: 10% !important;
  font-size: 1.5em !important;
`;

class RedirectPage extends React.Component {
  async componentDidMount() {
    await Auth.currentAuthenticatedUser()
      .then((user) => {
        setUserInfo(user);
      })
      .catch(() => {
        this.props.history.push("/");
      });
  }
  render() {
    return (
      <RedirectMessage>
        <Header>Login successfully! Redirecting...</Header>
        <br />
        <p>Now you can save your timetable and check it in any device!</p>
        <p>You can also write and edit your course reviews now!</p>
      </RedirectMessage>
    );
  }
}

export default withRouter(withNamespaces("translation")(RedirectPage));
