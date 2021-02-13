import React from "react";
import styled from "styled-components";
import { WithTranslation, withTranslation } from "react-i18next";
import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import Header from "@bit/wasedatime.core.ts.ui.header";
import { Logo } from "@bit/wasedatime.core.ts.ui.logo";
import titleLogo from "../../assets/img/title-logo.svg";
import homeBackground from "../../assets/img/home_background-lg.jpg";
import { WrapperWithBackground } from "@bit/wasedatime.core.ts.styles.wrapper";

const StyledArticle = styled("article")`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  text-align: center !important;
  align-item: center;
  padding-top: 67px;
  height: 100vh;
`;

const LogoWrapper = styled("div")`
  transform: translate(0, 6vh);
  img {
    text-align: center;
    margin: auto;
  }
`;

const Introduction = styled("div")`
  text-align: center;
  max-width: 100%;
  transform: translate(0, 6vh);
`;

const MainHeading = styled("h1")`
  padding-top: 1em;
  img {
    margin: 1rem auto 1em auto;
  }
`;

// to be imported from Bit
const Description = styled("p")`
  font-size: 2.4rem;
  font-weight: 300;
  color: #ffffff;
  text-shadow: 0px 0px 3px #000000;
  ${media.phone`font-size: 2.2rem;`};
`;

interface Props extends WithTranslation {
  path: string;
}

const Home = ({ path, t, i18n }: Props) => {
  return (
    <WrapperWithBackground background={homeBackground}>
      <Header
        title={""}
        onInputChange={() => {}}
        placeholder={"Search course (in construction...)"}
        inputText={""}
        disabled={true}
        isBlur={true}
        changeLang={(lng) => i18n.changeLanguage(lng)}
      />
      <StyledArticle>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Introduction>
          <MainHeading>
            <img
              width="250"
              height="50"
              src={titleLogo}
              alt="WasedaTime Text Logo"
            />
          </MainHeading>
          <Description>{t("about.description")}</Description>
        </Introduction>
      </StyledArticle>
    </WrapperWithBackground>
  );
};

export default withTranslation("translation")(Home);
