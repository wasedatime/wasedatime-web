import React from 'react';
import styled, { keyframes } from 'styled-components';

import { media } from '../utils/styledComponents';
import homeBackground from '../../img/home_background-sm.jpg';
import homeBackgroundMobile from '../../img/home_background-mobile.jpg';
import getStartedBackground from '../../img/nishi_waseda_campus-sm.jpg';
import logo from '../../img/logo.png';
import arrow from '../../img/arrow.png';

const slideUpIn = keyframes`
  from {
    transform: translateY(34vh);
  }
  to {
    transform: translateY(14vh);
  }
`;

const slideUpInMobile = keyframes`
  from {
    transform: translateY(25vh);
  }
  to {
    transform: translateY(5vh);
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

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const Wrapper = styled('div')`
  display: flex;
  height: 200vh;
  flex-direction: column;
  flex: 1 0 auto;
`;

const HomeWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 75px);
  background-image: url(${homeBackground});
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  ${media.phone`background-image: url(${homeBackgroundMobile});`};
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
  ${media.phone`transform: translate(0, 6vh);`};
`;

const Logo = styled('img')`
  width: 120px;
  height: 120px;
  animation-name: ${spinner};
  animation-timing-function: linear;
  animation-duration: 1.5s;
  transform-style: preserve-3d;
  ${media.phone`width: 100px; height: 100px;`};
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
  ${media.phone`animation-name: ${slideUpInMobile}; transform: translate(0, 8vh);`};
`;

const Title = styled('h1')`
  font-family: Times;
  font-size: 5rem;
  font-weight: 400;
  color: #000000;
  ${media.phone`font-size: 4.2rem;`};
`;

const Description = styled('p')`
  font-size: 2.3rem;
  font-weight: 300;
  color: #ffffff;
  ${media.phone`font-size: 2.2rem;`};
`;

const ArrowWrapper = styled('div')`
  text-align: center;
  margin-bottom: 7vh;
  animation-name: ${bounce};
  animation-timing-function: linear;
  animation-duration: 1.5s;
  animation-delay: 1.5s;
`;

const Arrow = styled('img')`
  width: 120px;
  ${media.phone`width: 100px;`};
`;

const GetStartedWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  background-image: url(${getStartedBackground});
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
`;

const DarkOverlay = Overlay.extend`
  background-color: rgba(0, 0, 0, 0.6);
`;

const Home = () => {
  return (
    <Wrapper>
      <HomeWrapper>
        <Overlay>
          <StyledHeader>
            <LogoWrapper>
              <Logo src={logo} alt="WaseTime Logo" />
            </LogoWrapper>
            <Introduction>
              <Title>WaseTime</Title>
              <Description>
                An unonfficial app for syllabus searching, classroom finding,
                and bus schedule checking at Waseda University.
              </Description>
            </Introduction>
          </StyledHeader>
          <ArrowWrapper>
            <Description>Get Started</Description>
            <Arrow src={arrow} alt="Scroll Down Arrow" />
          </ArrowWrapper>
        </Overlay>
      </HomeWrapper>
      <GetStartedWrapper>
        <DarkOverlay />
      </GetStartedWrapper>
    </Wrapper>
  );
};

export default Home;
