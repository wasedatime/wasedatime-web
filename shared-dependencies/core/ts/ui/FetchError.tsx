import React from "react";
import "@types/node";
import styled from "styled-components";

import { Wrapper } from "@bit/wasedatime.shared-library-js.core.ui.wrapper";
import { Button } from "@bit/wasedatime.shared-library-js.core.ui.button";
import { Overlay } from "@bit/wasedatime.shared-library-js.core.ui.overlay";

const ExtendedWrapper = styled(Wrapper)`
  flex: 1 0 0;
`;

const ExtendedOverlay = styled(Overlay)`
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 25px;
`;

type CardProps = {
  onRetry(): void;
  email: string;
};

const FetchError = ({ onRetry, email }: CardProps) => {
  return (
    <ExtendedWrapper>
      <ExtendedOverlay>
        <h3>Uh oh, something went wrong.</h3>
        <Button onClick={onRetry}>Retry</Button>
        <p>
          Kindly <a href={email}>send me an email</a> if this keeps happening.
        </p>
      </ExtendedOverlay>
    </ExtendedWrapper>
  );
};

export default FetchError;
