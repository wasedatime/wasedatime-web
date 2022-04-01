import React, { useContext, useState } from "react";

import { WrapperWithBackground } from "@bit/wasedatime.core.ts.styles.wrapper";
import Header from "@bit/wasedatime.core.ts.ui.header";
import { Logo } from "@bit/wasedatime.core.ts.ui.logo";
import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import ReactGA from "react-ga";
import { WithTranslation, withTranslation } from "react-i18next";
import { navigateToUrl } from "single-spa";
import styled from "styled-components";

import homeBackgroundDark from "@app/assets/img/home/home_background-dark.png";
import homeBackgroundLight from "@app/assets/img/home/home_background-light.jpg";
import { TitleLogo } from "@app/assets/img/home/TitleLogo";
import HomeModal from "@app/components/home/HomeModal";
import { gaAppendActionWithLng, gaChangeLanguage } from "@app/ga/eventActions";
import { gaLanguage } from "@app/ga/eventCategories";
import { ThemeContext } from "@app/utils/theme-context";

const StyledWrapper = styled(WrapperWithBackground)`
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: calc(100vw - 65px);
  ${media.tablet`width: 100vw;`}
  position: fixed;
`;

const StyledArticle = styled("article")`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  text-align: center !important;
  align-item: center;
  padding-top: 5em;
  height: 100vh;
`;

const LogoWrapper = styled("div")`
  transform: translate(0, 5vh);
  img {
    text-align: center;
    margin: auto;
  }
`;

const Introduction = styled("div")`
  text-align: center;
  max-width: 100%;
`;

const MainHeading = styled("h1")`
  padding-top: 48px;
  margin: 0.5em 0px;
  img {
    margin: 1em auto 0px auto;
  }
  align-items: "center";
`;

// to be imported from Bit
const Description = styled("p")`
  font-size: 1.5em;
  font-weight: 300;
  /* color: #ffffff; */
  /* text-shadow: 0px 0px 3px #000000; */
  ${media.phone`font-size: 1em;`}
`;

interface Props extends WithTranslation {
  isFirstAccess: boolean;
}

const Home = ({ isFirstAccess, t, i18n }: Props) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const [modalOpen, setModalOpen] = useState(isFirstAccess);
  const closeModal = () => {
    setModalOpen(false);
    if (isFirstAccess) navigateToUrl("/courses/timetable");
  };

  const changeLanguage = (lng) => {
    ReactGA.event({
      category: gaLanguage,
      action: gaAppendActionWithLng(gaChangeLanguage, lng),
      label: lng,
    });
    i18n.changeLanguage(lng);
  };

  return (
    <StyledWrapper
      background={theme === "dark" ? homeBackgroundDark : homeBackgroundLight}
    >
      <Header
        title=""
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onInputChange={() => {}}
        placeholder={t("search placeholder")}
        inputText=""
        disabled
        isBlur
        changeLang={changeLanguage}
        theme={theme}
        setTheme={setTheme}
      />
      <StyledArticle>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Introduction>
          <MainHeading>
            <TitleLogo
              className="fill-light-text1 dark:fill-white block m-auto"
              width="200"
              height="50"
            />
          </MainHeading>
          <Description className="text-white dark:text-dark-text1 text-shadow-sm dark:text-shadow-sm my-2">
            {t("about.description")}
          </Description>
          <br />
          <button
            type="button"
            className="bg-light-main hover:bg-light-lighter rounded-lg text-white px-4 py-2 mx-2"
            onClick={() => setModalOpen(true)}
          >
            {t("welcome.newFeature")}
          </button>
        </Introduction>

        <HomeModal
          isModalOpen={modalOpen}
          closeModal={closeModal}
          isFirstAccess={isFirstAccess}
        />
      </StyledArticle>
    </StyledWrapper>
  );
};

export default withTranslation("translation")(Home);
