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
  redirectPageName,
  redirectSec,
}) => {
  setTimeout(() => (window.location.href = redirectPath), 5000);

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
          redirectPageName +
          t("redirect.countdown 3")}
      </p>
    </RedirectMessage>
  );
};

export default withNamespaces("translation")(WarningAndRedirect);
