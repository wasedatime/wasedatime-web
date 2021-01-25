import React from "react";
import { withRouter } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import { Segment, Header } from "semantic-ui-react";
import styled from "styled-components";

const RedirectMessage = styled(Segment)`
  margin-top: 10% !important;
  font-size: 1.5em !important;
`;

const WarningAndRedirect = ({
  title,
  contents,
  redirectPath,
  redirectSec,
  history,
  t,
}) => {
  const pathToNameMap = {
    "/": t("navigation.home"),
    "/timetable": t("navigation.timetable"),
    "/syllabus": t("navigation.syllabus"),
  };

  setTimeout(() => history.push(redirectPath), 5000);

  return (
    <RedirectMessage>
      <Header>{title}</Header>
      <br />
      {contents.map((c) => (
        <p>{c}</p>
      ))}
      <p>
        {t("redirect.countdown 1") +
          redirectSec +
          t("redirect.countdown 2") +
          pathToNameMap[redirectPath] +
          t("redirect.countdown 3")}
      </p>
    </RedirectMessage>
  );
};

export default withRouter(withNamespaces("translation")(WarningAndRedirect));
