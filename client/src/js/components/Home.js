import React from 'react';
import styled, { keyframes } from 'styled-components';
import smoothScroll from 'smoothscroll';

import { media } from '../utils/styledComponents';
import { Wrapper, WrapperWithBackground } from '../styledComponents/Wrapper';
import { Overlay } from '../styledComponents/Overlay';
import homeBackground from '../../img/home_background.jpg';
import homeBackgroundPhone from '../../img/home_background-phone.jpg';
import mainBackground from '../../img/main_campus.jpg';
import nishiwasedaBackground from '../../img/nishi_waseda_campus.jpg';
import toyamaBackground from '../../img/toyama_campus.jpg';
import logo from '../../img/logo.png';
import arrow from '../../img/arrow.png';
import syllabus from '../../img/syllabus-480.gif';
import syllabusResult from '../../img/syllabusResult-480.gif';
import bus from '../../img/bus-480.gif';
import roomFinder from '../../img/roomFinder-480.gif';

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

const HomeWrapper = WrapperWithBackground.extend`
  height: calc(100vh - 75px);
`;

const ExtendedOverlay = Overlay.extend`
  padding: 0 25px;
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

const MainHeading = styled('h1')`
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

const GetStartedButton = styled('button')`
  align-self: center;
  text-align: center;
  background: transparent;
  border: none !important;
  animation-name: ${bounce};
  animation-timing-function: linear;
  animation-duration: 1.5s;
  animation-delay: 1.5s;
  z-index: 1000;
`;

const Arrow = styled('img')`
  width: 120px;
  ${media.phone`width: 100px;`};
`;

const StyledSection = styled('section')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

const StyledArticle = WrapperWithBackground.withComponent('article');

const DarkOverlay = Overlay.extend`
  padding: 60px;
  background-color: rgba(0, 0, 0, 0.6);
  ${media.phone`padding: 40px 50px;`};
`;

const SubHeading = styled('h2')`
  margin: 0px;
  font-size: 3.8rem;
  font-weight: 300;
  color: #ffffff;
  ${media.phone`font-size: 3.2rem;`};
`;

const DemoFigure = styled('figure')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  align-items: center;
  text-align: center;
`;

const DemoImage = styled('img')`
  width: 400px;
  ${media.phone`width: 100%;`};
`;

const DemoDescription = styled('p')`
  font-size: 2.4rem;
  font-weight: 300;
  color: #dddddd;
  ${media.phone`font-size: 1.8rem;`};
`;

const clickHandler = e => {
  e.preventDefault();
  const destination = document.querySelector('#get-started');
  smoothScroll(destination, 600);
};

const Home = () => {
  return (
    <Wrapper>
      <HomeWrapper
        background={homeBackground}
        backgroundPhone={homeBackgroundPhone}
      >
        <ExtendedOverlay>
          <StyledHeader>
            <LogoWrapper>
              <Logo src={logo} alt="WaseTime Logo" />
            </LogoWrapper>
            <Introduction>
              <MainHeading>WaseTime</MainHeading>
              <Description>
                An unonfficial app for syllabus searching, classroom finding,
                and bus schedule checking at Waseda University.
              </Description>
            </Introduction>
          </StyledHeader>
          <GetStartedButton onClick={clickHandler}>
            <Description>Get Started</Description>
            <Arrow src={arrow} alt="Scroll Down Arrow" id="get-started" />
          </GetStartedButton>
        </ExtendedOverlay>
      </HomeWrapper>
      <StyledSection>
        <StyledArticle
          background={mainBackground}
          backgroundPhone={mainBackground}
        >
          <DarkOverlay>
            <StyledHeader>
              <SubHeading>Syllabus</SubHeading>
            </StyledHeader>
            <DemoFigure>
              <DemoDescription>
                Search by course names and instructors instantly.
              </DemoDescription>
              <DemoImage src={syllabus} alt="Syllabus Search Demo" />
            </DemoFigure>
            <DemoFigure>
              <DemoDescription>
                Click for more details and easy access to official syllabus.
              </DemoDescription>
              <DemoImage
                src={syllabusResult}
                alt="Syllabus Search Result Demo"
              />
            </DemoFigure>
          </DarkOverlay>
        </StyledArticle>
        <StyledArticle
          background={nishiwasedaBackground}
          backgroundPhone={nishiwasedaBackground}
        >
          <DarkOverlay>
            <StyledHeader>
              <SubHeading>RoomFinder</SubHeading>
            </StyledHeader>
            <DemoFigure>
              <DemoDescription>
                Find vacant classrooms and view real-time usage.
              </DemoDescription>
              <DemoImage src={roomFinder} alt="Room Finder Demo" />
            </DemoFigure>
          </DarkOverlay>
        </StyledArticle>
        <StyledArticle
          background={toyamaBackground}
          backgroundPhone={toyamaBackground}
        >
          <DarkOverlay>
            <StyledHeader>
              <SubHeading>Bus</SubHeading>
            </StyledHeader>
            <DemoFigure>
              <DemoDescription>
                Easy access to official schedule.
              </DemoDescription>
              <DemoImage src={bus} alt="Room Finder Demo" />
              <DemoDescription>More features coming soon!</DemoDescription>
            </DemoFigure>
          </DarkOverlay>
        </StyledArticle>
      </StyledSection>
    </Wrapper>
  );
};

export default Home;
