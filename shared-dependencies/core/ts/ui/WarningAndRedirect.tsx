import React from "react";
import { Segment, Header } from "semantic-ui-react";
import "node";
import styled from "styled-components";

const RedirectMessage = styled(Segment)`
  margin-top: 10% !important;
  font-size: 1.5em !important;
`;

type Props = {
  title: string;
  contents: string[];
  redirectPath: string;
  redirectSec: number;
};

const WarningAndRedirect = ({ title, contents, redirectPath, redirectSec }) => {
  setTimeout(() => (window.location.href = redirectPath), redirectSec);

  return (
    <RedirectMessage>
      <Header>{title}</Header>
      <br />
      {contents.map((c) => (
        <p>{c}</p>
      ))}
    </RedirectMessage>
  );
};

export default WarningAndRedirect;
