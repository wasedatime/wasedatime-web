import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Wrapper } from "./common/Wrapper";
import { Button } from "./common/Button";
import { Overlay } from "./common/Overlay";

const ExtendedOverlay = styled(Overlay)`
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 25px;
`;

const NotFound = () => {
  return (
    <Wrapper>
      <ExtendedOverlay>
        <h3>Oops! 404</h3>
        <p>Looks like this page doesn't exist.</p>
        <Link to="/">
          <Button>Take Me Home</Button>
        </Link>
      </ExtendedOverlay>
    </Wrapper>
  );
};

export default NotFound;
