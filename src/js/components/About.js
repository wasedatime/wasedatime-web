import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { withNamespaces } from "react-i18next";
// import smoothScroll from "smoothscroll";
import { media } from "../styled-components/utils";
import { Wrapper, WrapperWithBackground } from "../styled-components/Wrapper";
// import { InvisibleButton } from "../styled-components/Button";
import homeBackground from "../../img/home_background-lg.jpg";
import homeBackgroundPhone from "../../img/home_background-phone.jpg";
import Header from "./Header";
// import mainBackground from "../../img/main_campus.jpg";
// import nishiwasedaBackground from "../../img/nishi_waseda_campus.jpg";
// import toyamaBackground from "../../img/toyama_campus.jpg";
import logo from "../../img/logo.png";
import titleLogo from "../../img/title-logo.svg";
// import arrow from "../../img/arrow.png";
// import navigation from "../../img/navigation-480.gif";
// import syllabusResult from "../../img/syllabusResult-480.gif";
// import bus from "../../img/bus-480.gif";
// import roomFinder from "../../img/roomFinder-480.gif";

const HomeWrapper = styled(WrapperWithBackground)`
  min-height: calc(100vh - ${(props) => props.theme.headerHeight});
`;

const StyledArticle = styled("article")`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  text-align: center;
  padding-top: 67px;
`;

const LogoWrapper = styled("div")`
  text-align: center;
  transform: translate(0, 6vh);
`;

const Logo = styled("img")`
  width: 120px;
  height: 120px;
  ${media.phone`width: 100px; height: 100px;`};
`;

const Introduction = styled("div")`
  text-align: center;
  max-width: 100%;
  transform: translate(0, 6vh);
`;

const MainHeading = styled("h1")`
  padding-top: 1em;
`;

const Description = styled("p")`
  font-size: 2.4rem;
  font-weight: 300;
  color: #ffffff;
  text-shadow: 0px 0px 3px #000000;
  ${media.phone`font-size: 2.2rem;`};
`;

// const LearnMoreButton = styled(InvisibleButton)`
//   align-self: center;
//   text-align: center;
//   background: transparent;
//   border: none !important;
//   z-index: 1000;
//   text-shadow: 0px 0px 3px #000000;
// `;
//
// const Arrow = styled("img")`
//   width: 120px;
//   ${media.phone`width: 100px;`};
// `;
//
// const StyledSection = styled("section")`
//   display: flex;
//   flex-direction: column;
//   flex: 1 0 auto;
// `;

// const StyledArticle = WrapperWithBackground.withComponent("article");
//
// const DarkOverlay = styled(Overlay)`
//   padding: 60px 60px 30px 60px;
//   background-color: rgba(0, 0, 0, 0.7);
//   ${media.phone`padding: 40px 50px;`};
// `;
//
// const SubHeading = styled("h2")`
//   margin: 0px;
//   font-size: 3.8rem;
//   font-weight: 300;
//   color: #ffffff;
//   ${media.phone`font-size: 3.2rem;`};
// `;
//
// const DemoFigure = styled("figure")`
//   margin-bottom: 40px;
//   display: flex;
//   flex-direction: column;
//   flex: 1 0 auto;
//   align-items: center;
//   text-align: center;
// `;
//
// const DemoImage = styled("img")`
//   width: 400px;
//   margin: 10px;
//   ${media.phone`width: 100%;`};
// `;
//
// const DemoDescription = styled("p")`
//   font-size: 2.4rem;
//   font-weight: 300;
//   color: #dddddd;
//   ${media.phone`font-size: 1.8rem;`};
// `;
//
// const clickHandler = e => {
//   e.preventDefault();
//   const destination = document.querySelector("#get-started");
//   smoothScroll(destination, 600);
// };

const Home = ({ t }) => {
  return (
    <Wrapper>
      <Helmet>
        <title>WasedaTime - Home</title>
        <meta
          name="description"
          content="An unofficial app for Syllabus Searching, Classroom Usage Checking, and Shuttle Bus Arrival Time Checking at Waseda University."
        />
        <meta property="og:title" content="WasedaTime - Home" />
        <meta
          property="og:description"
          content="An unofficial app for Syllabus Searching, Classroom Usage Checking, and Shuttle Bus Arrival Time Checking at Waseda University."
        />
        <meta property="og:site_name" content="WasedaTime - Home" />
      </Helmet>
      <HomeWrapper
        background={homeBackground}
        backgroundPhone={homeBackgroundPhone}
      >
        <Header
          placeholder="Search course (in construction...)"
          disabled={true}
          isBlur={true}
        />
        <StyledArticle>
          <LogoWrapper>
            <Logo src={logo} alt="WasedaTime Logo" />
          </LogoWrapper>
          <Introduction>
            <MainHeading>
              <img src={titleLogo} />
            </MainHeading>
            <Description>{t("about.description")}</Description>
          </Introduction>
        </StyledArticle>
        {
          // <LearnMoreButton onClick={clickHandler}>
          //   <Description>Learn More</Description>
          //   <Arrow src={arrow} alt="Scroll Down Arrow" id="get-started" />
          // </LearnMoreButton>
        }
      </HomeWrapper>
      {
        // {<StyledSection>
        //   <StyledArticle
        //     background={mainBackground}
        //     backgroundPhone={mainBackground}
        //   >
        //     <DarkOverlay>
        //       <StyledHeader>
        //         <SubHeading>Navigation</SubHeading>
        //       </StyledHeader>
        //       <DemoFigure>
        //         <DemoDescription>Navigate easily by clicking.</DemoDescription>
        //         <DemoImage src={navigation} alt="Syllabus Search Demo" />
        //       </DemoFigure>
        //       <StyledHeader>
        //         <SubHeading>Syllabus</SubHeading>
        //       </StyledHeader>
        //       <DemoFigure>
        //         <DemoDescription>
        //           Search and view results instantly.
        //         </DemoDescription>
        //         <DemoImage
        //           src={syllabusResult}
        //           alt="Syllabus Search Result Demo"
        //         />
        //       </DemoFigure>
        //     </DarkOverlay>
        //   </StyledArticle>
        //   <StyledArticle
        //     background={nishiwasedaBackground}
        //     backgroundPhone={nishiwasedaBackground}
        //   >
        //     <DarkOverlay>
        //       <StyledHeader>
        //         <SubHeading>RoomFinder</SubHeading>
        //       </StyledHeader>
        //       <DemoFigure>
        //         <DemoDescription>
        //           Find vacant classrooms and view real-time usage.
        //         </DemoDescription>
        //         <DemoImage src={roomFinder} alt="Room Finder Demo" />
        //       </DemoFigure>
        //     </DarkOverlay>
        //   </StyledArticle>
        //   <StyledArticle
        //     background={toyamaBackground}
        //     backgroundPhone={toyamaBackground}
        //   >
        //     <DarkOverlay>
        //       <StyledHeader>
        //         <SubHeading>Bus</SubHeading>
        //       </StyledHeader>
        //       <DemoFigure>
        //         <DemoDescription>
        //           Easy access to official schedule.
        //         </DemoDescription>
        //         <DemoImage src={bus} alt="Room Finder Demo" />
        //         <DemoDescription>More features coming soon!</DemoDescription>
        //       </DemoFigure>
        //     </DarkOverlay>
        //   </StyledArticle>
        // </StyledSection>}
      }
    </Wrapper>
  );
};

export default withNamespaces("translation")(Home);
