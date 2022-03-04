import React, { useState, useContext, lazy, Suspense } from "react";

import { Wrapper } from "@bit/wasedatime.core.ts.styles.wrapper";
import Header from "@bit/wasedatime.core.ts.ui.header";
import LoadingSpinner from "@bit/wasedatime.core.ts.ui.loading-spinner";
import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import JoinUs from "@app/components/aboutUs/JoinUs";
import OurMission from "@app/components/aboutUs/OurMission";
import Partners from "@app/components/aboutUs/Partners";
import { gaAppendActionWithLng, gaChangeLanguage } from "@app/ga/eventActions";
import { gaLanguage } from "@app/ga/eventCategories";
import { ThemeContext } from "@app/utils/theme-context";

const MeetOurTeam = lazy(
  () => import("@app/components/aboutUs/MeetOurTeam/MeetOurTeam")
);

const AboutUsWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  flex: 67px;
`;

const AboutUsFlex = styled.div`
  flex: calc(100% - 67px);
  padding: 10px;
`;

const AboutUsMenu = styled.div`
  ${media.tablet`text-align: center;`}
  ${media.phone`
    text-align: center;
    font-size:3.5vw;
    `}
`;

const AboutUs = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [activePage, setActivePage] = useState("our mission");
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    ReactGA.event({
      category: gaLanguage,
      action: gaAppendActionWithLng(gaChangeLanguage, lng),
      label: lng,
    });
    i18n.changeLanguage(lng);
  };

  return (
    <AboutUsWrapper id="aboutus_wrapper">
      <Helmet>
        <title>WasedaTime - About Us</title>
        <meta
          name="description"
          content="Introduce Wasedatime's mission and meet the team."
        />
        <meta property="og:title" content="WasedaTime - About Us" />
        <meta
          property="og:description"
          content="Introduce Wasedatime's mission and meet the team."
        />
        <meta property="og:site_name" content="WasedaTime - About Us" />
      </Helmet>
      <HeaderWrapper>
        <Header
          title={t("navigation.aboutus")}
          onInputChange={() => {}}
          placeholder={t("search placeholder")}
          inputText=""
          disabled
          isBlur={false}
          theme={theme}
          setTheme={setTheme}
          changeLang={changeLanguage}
        />
      </HeaderWrapper>
      <AboutUsFlex>
        <AboutUsMenu>
          <button
            type="button"
            className={`
            border-2 border-red-800 border-r-0 ${
              activePage === "our mission"
                ? "bg-red-800 text-white"
                : "bg-white text-red-800"
            } hover:bg-red-800 hover:text-white px-4 py-2 mx-0 outline-none focus:outline-none rounded-l-lg
          `}
            onClick={() =>
              activePage !== "our mission" && setActivePage("our mission")
            }
          >
            {t("aboutus.our mission")}
          </button>
          <button
            type="button"
            className={`
            border-2 border-red-800 border-l-0 border-r-0 ${
              activePage === "join us"
                ? "bg-red-800 text-white"
                : "bg-white text-red-800"
            } hover:bg-red-800 hover:text-white px-4 py-2 mx-0 outline-none focus:outline-none
          `}
            onClick={() => activePage !== "join us" && setActivePage("join us")}
          >
            {t("aboutus.join us")}
          </button>
          <button
            type="button"
            className={`
            border-2 border-red-800 border-l-0 border-r-0 ${
              activePage === "meet our team"
                ? "bg-red-800 text-white"
                : "bg-white text-red-800"
            } hover:bg-red-800 hover:text-white px-4 py-2 mx-0 outline-none focus:outline-none
          `}
            onClick={() =>
              activePage !== "meet our team" && setActivePage("meet our team")
            }
          >
            {t("aboutus.meet our team")}
          </button>
          <button
            type="button"
            className={`
            border-2 border-red-800 border-l-0 ${
              activePage === "partners"
                ? "bg-red-800 text-white"
                : "bg-white text-red-800"
            } hover:bg-red-800 hover:text-white px-4 py-2 mx-0 outline-none focus:outline-none rounded-r-lg
          `}
            onClick={() =>
              activePage !== "partners" && setActivePage("partners")
            }
          >
            {t("aboutus.partners")}
          </button>
        </AboutUsMenu>

        {activePage === "our mission" && <OurMission />}
        {activePage === "join us" && <JoinUs />}
        {activePage === "meet our team" && (
          <Suspense
            fallback={
              <LoadingSpinner message="Loading members information..." />
            }
          >
            <MeetOurTeam />
          </Suspense>
        )}
        {activePage === "partners" && (
          <Suspense
            fallback={
              <LoadingSpinner message="Loading partners information..." />
            }
          >
            <Partners />
          </Suspense>
        )}
      </AboutUsFlex>
    </AboutUsWrapper>
  );
};

export default AboutUs;
