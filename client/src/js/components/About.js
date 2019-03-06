import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import smoothScroll from 'smoothscroll';

import { media } from '../styled-components/utils';
import { Wrapper, WrapperWithBackground } from '../styled-components/Wrapper';
import { Overlay } from '../styled-components/Overlay';
import { InvisibleButton } from '../styled-components/Button';
import homeBackground from '../../img/home_background.jpg';
import homeBackgroundPhone from '../../img/home_background-phone.jpg';
import mainBackground from '../../img/main_campus.jpg';
import nishiwasedaBackground from '../../img/nishi_waseda_campus.jpg';
import toyamaBackground from '../../img/toyama_campus.jpg';
import logo from '../../img/logo.png';
import arrow from '../../img/arrow.png';
import navigation from '../../img/navigation-480.gif';
import syllabusResult from '../../img/syllabusResult-480.gif';
import bus from '../../img/bus-480.gif';
import roomFinder from '../../img/roomFinder-480.gif';
import PropTypes from 'prop-types';

const HomeWrapper = styled(WrapperWithBackground)`
  min-height: calc(100vh - ${props => props.theme.headerHeight});
`;

const ExtendedOverlay = styled(Overlay)`
  padding: 0 25px;
  padding-bottom: 30px;
`;

const StyledHeader = styled('header')`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  text-align: center;
`;

const LogoWrapper = styled('div')`
  text-align: center;
  transform: translate(0, 6vh);
`;

const Logo = styled('img')`
  width: 120px;
  height: 120px;
  ${media.phone`width: 100px; height: 100px;`};
`;

const Introduction = styled('div')`
  text-align: center;
  max-width: 100%;
  transform: translate(0, 6vh);
`;

const MainHeading = styled('h1')`
  font-family: Times;
  font-size: 5rem;
  font-weight: 400;
  color: #000000;
  ${media.phone`font-size: 4.2rem;`};
`;

const Description = styled('p')`
  font-size: 2.4rem;
  font-weight: 300;
  color: #ffffff;
  text-shadow: 0px 0px 3px #000000;
  ${media.phone`font-size: 2.2rem;`};
`;

const LearnMoreButton = styled(InvisibleButton)`
  align-self: center;
  text-align: center;
  background: transparent;
  border: none !important;
  z-index: 1000;
  text-shadow: 0px 0px 3px #000000;
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

const DarkOverlay = styled(Overlay)`
  padding: 60px 60px 30px 60px;
  background-color: rgba(0, 0, 0, 0.7);
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
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  align-items: center;
  text-align: center;
`;

const DemoImage = styled('img')`
  width: 400px;
  margin: 10px;
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
      <Helmet>
        <title>WaseTime - Home</title>
        <meta
          name="description"
          content="An unofficial app for Syllabus Searching, Classroom Usage Checking, and Shuttle Bus Arrival Time Checking at Waseda University."
        />
        <meta property="og:title" content="WaseTime - Home" />
        <meta
          property="og:description"
          content="An unofficial app for Syllabus Searching, Classroom Usage Checking, and Shuttle Bus Arrival Time Checking at Waseda University."
        />
        <meta property="og:site_name" content="WaseTime - Home" />
      </Helmet>
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
                An unofficial app for syllabus searching, classroom finding, and
                bus schedule checking at Waseda University.
              </Description>
            </Introduction>
          </StyledHeader>
          <LearnMoreButton onClick={clickHandler}>
            <Description>Learn More</Description>
            <Arrow src={arrow} alt="Scroll Down Arrow" id="get-started" />
          </LearnMoreButton>
        </ExtendedOverlay>
      </HomeWrapper>
      <StyledSection>
        <StyledArticle
          background={mainBackground}
          backgroundPhone={mainBackground}
        >
          <DarkOverlay>
            <StyledHeader>
              <SubHeading>Navigation</SubHeading>
            </StyledHeader>
            <DemoFigure>
              <DemoDescription>Navigate easily by clicking.</DemoDescription>
              <DemoImage src={navigation} alt="Syllabus Search Demo" />
            </DemoFigure>
            <StyledHeader>
              <SubHeading>Syllabus</SubHeading>
            </StyledHeader>
            <DemoFigure>
              <DemoDescription>
                Search and view results instantly.
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
