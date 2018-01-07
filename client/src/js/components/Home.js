import React from 'react';
import styled, { keyframes } from 'styled-components';

import background from '../../img/home_background-sm.jpg';
import backgroundMobile from '../../img/home_background-mobile.jpg';
import logo from '../../img/logo.png';

const slideUpIn = keyframes`
  from {
    transform: translate(0, 30vh);
  }
  to {
    transform: translate(0, 14vh);
  }
`;

const slideUpInMobile = keyframes`
  from {
    transform: translate(0, 30vh);
  }
  to {
    transform: translate(0, 11vh);
  }
`;

const spinner = keyframes`
  from {
    transform: rotateY(360deg);
  }
  15% {
    transform: rotateY(-360deg);
  }
  30% {
    transform: rotateY(0deg);
  }
  45% {
    transform: rotateY(360deg);
  }
  60% {
    transform: rotateY(180deg);
  }
  to {
    transform: rotateY(0deg);
  }
`;

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  background-image: url(${background});
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 430px) {
    background-image: url(${backgroundMobile});
  }
`;

const Overlay = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding: 0 25px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const StyledHeader = styled('header')`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  text-align: center;
`;

const LogoWrapper = styled('div')`
  text-align: center;
  transform: translate(0, 13vh);
  @media screen and (max-width: 430px) {
    transform: translate(0, 9vh);
  }
`;

const Logo = styled('img')`
  width: 120px;
  height: 120px;
  animation-name: ${spinner};
  animation-timing-function: linear;
  animation-duration: 1.5s;
  transform-style: preserve-3d;
  @media screen and (max-width: 430px) {
    width: 100px;
    height: 100px;
  }
`;

const Introduction = styled('div')`
  text-align: center;
  max-width: 100%;
  transform: translate(0, 14vh);
  animation-delay: 0ms;
  animation-name: ${slideUpIn};
  animation-duration: 1000ms;
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.5, 1.275);
  animation-fill-mode: forwards;
  @media screen and (max-width: 430px) {
    animation-name: ${slideUpInMobile};
    transform: translate(0, 11vh);
  }
`;

const Title = styled('h1')`
  font-family: Times;
  font-size: 5rem;
  font-weight: 400;
  color: #000000;
  @media screen and (max-width: 430px) {
    font-size: 4.2rem;
  }
`;

const Description = styled('p')`
  font-size: 2.3rem;
  font-weight: 300;
  color: #ffffff;
  @media screen and (max-width: 430px) {
    font-size: 2.2rem;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <Overlay>
        <StyledHeader>
          <LogoWrapper>
            <Logo src={logo} alt="WaseTime Logo" />
          </LogoWrapper>
          <Introduction>
            <Title>WaseTime</Title>
            <Description>
              An unonfficial app for syllabus searching, classroom finding, and
              bus schedule checking at Waseda University.
            </Description>
          </Introduction>
        </StyledHeader>
      </Overlay>
    </Wrapper>
  );
};

export default Home;
