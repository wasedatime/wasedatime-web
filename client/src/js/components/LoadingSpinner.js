import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

import { Wrapper } from "../styled-components/Wrapper";
import { Overlay } from "../styled-components/Overlay";
import logo from "../../img/logo.png";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ExtendedWrapper = styled(Wrapper)`
  flex: 1 0 0;
`;

const ExtendedOverlay = styled(Overlay)`
  align-items: center;
  justify-content: center;
  padding: 25px;
`;

const Logo = styled("img")`
  height: 100px;
  width: 100px;
  transition: transform(0, 12vh);
  animation: ${spin} 3s linear infinite;
  transform-style: preserve-3d;
`;

const Description = styled("p")`
  font-size: 2rem;
`;

const LoadingSpinner = (props) => {
  return (
    <ExtendedWrapper>
      <ExtendedOverlay>
        <Logo src={logo} alt="WasedaTime logo" />
        <Description>{props.message || "Loading..."}</Description>
      </ExtendedOverlay>
    </ExtendedWrapper>
  );
};

export default LoadingSpinner;

LoadingSpinner.propTypes = {
  message: PropTypes.string.isRequired,
};
