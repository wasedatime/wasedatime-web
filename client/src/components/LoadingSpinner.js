import React from 'react';
import styled, { keyframes } from 'styled-components';

import logo from '../img/logo.png';

const spin = keyframes`
  from {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(360deg);
  }
  to {
    transform: rotateY(0deg);
  }
`;

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1 0 auto;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Logo = styled('img')`
  height: 120px;
  width: 120px;
  animation: ${spin} 2s linear infinite;
  transform-style: preserve-3d;
`;

const LoadingSpinner = () => {
  return (
    <Wrapper>
      <Logo src={logo} alt="Wasetime logo" />
    </Wrapper>
  );
};

export default LoadingSpinner;
