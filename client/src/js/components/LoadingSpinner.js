import React from 'react';
import styled, { keyframes } from 'styled-components';

import { Wrapper } from '../styled-components/Wrapper';
import { Overlay } from '../styled-components/Overlay';
import logo from '../../img/logo.png';

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

const ExtendedOverlay = Overlay.extend`
  align-items: center;
  justify-content: center;
  padding: 25px;
`;

const Logo = styled('img')`
  height: 100px;
  width: 100px;
  transition: transform(0, 12vh);
  animation: ${spin} 3s linear infinite;
  transform-style: preserve-3d;
`;

const Description = styled('p')`
  font-size: 2rem;
`;

const LoadingSpinner = () => {
  window.scrollTo({top: 0})
  return (
    <Wrapper>
      <ExtendedOverlay>
        <Logo src={logo} alt="WaseTime logo" />
        <Description>Loading...</Description>
      </ExtendedOverlay>
    </Wrapper>
  );
};

export default LoadingSpinner;
