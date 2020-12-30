import React from "react";
import { withNamespaces } from "react-i18next";
import { Segment, Header } from "semantic-ui-react";
import styled from "styled-components";

const RedirectMessage = styled(Segment)`
  margin-top: 10% !important;
  font-size: 1.5em !important;
`;

const RedirectPage = () => (
  <RedirectMessage>
    <Header>Login successfully! Redirecting...</Header>
    <br />
    <p>Now you can save your timetable and check it in any device!</p>
    <p>You can also write and edit your course reviews now!</p>
  </RedirectMessage>
);

export default withNamespaces("translation")(RedirectPage);
