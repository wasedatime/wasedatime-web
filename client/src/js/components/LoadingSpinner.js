import React from 'react';
import styled, { keyframes } from 'styled-components';

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

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 0 auto;
  background-color: rgba(0, 0, 0, 0.2);
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
  return (
    <Wrapper>
      <Logo src={logo} alt="WaseTime logo" />
      <Description>Loading...</Description>
    </Wrapper>
  );
};

export default LoadingSpinner;
