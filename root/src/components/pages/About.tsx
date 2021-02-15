import React from "react";
import styled from "styled-components";
import { WithTranslation, withTranslation } from "react-i18next";
import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import Header from "@bit/wasedatime.core.ts.ui.header";
import { Logo } from "@bit/wasedatime.core.ts.ui.logo";
import titleLogo from "../../assets/img/title-logo.svg";
import homeBackground from "../../assets/img/home_background-lg.jpg";
import { WrapperWithBackground } from "@bit/wasedatime.core.ts.styles.wrapper";
import MediaQuery from "react-responsive";
import { sizes } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import reviewsImg from "../../assets/img/reviews-example.png";
import timetableImg1 from "../../assets/img/timetable-example-1.png";
import timetableImg2 from "../../assets/img/timetable-example-2.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faExchangeAlt } from "@fortawesome/free-solid-svg-icons";

const StyledWrapper = styled(WrapperWithBackground)`
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100%;
  overflow-y: auto;
`;

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
  padding-top: 1em;
  img {
    margin: 1em auto 0px auto;
  }
`;

// to be imported from Bit
const Description = styled("p")`
  font-size: 1.5em;
  font-weight: 300;
  color: #ffffff;
  text-shadow: 0px 0px 3px #000000;
  ${media.phone`font-size: 1em;`};
`;

interface Props extends WithTranslation {
  path: string;
}

const Home = ({ path, t, i18n }: Props) => {
  if(localStorage.getItem("isFirstAccess") === null) localStorage.setItem("isFirstAccess", "false");
  return (
    <StyledWrapper background={homeBackground}>
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
              width="200"
              height="50"
              src={titleLogo}
              alt="WasedaTime Text Logo"
            />
          </MainHeading>
          <Description>{t("about.description")}</Description>
          <button className={`rounded px-4 py-2 mx-2 ${i18n.language === "en" ? "bg-gray-500 text-white" : "bg-white"}`} onClick={() => i18n.changeLanguage("en")}>English</button>
          <button className={`rounded px-4 py-2 mx-2 ${i18n.language === "ja" ? "bg-gray-500 text-white" : "bg-white"}`} onClick={() => i18n.changeLanguage("ja")}>日本語</button>
        </Introduction>
        <div className="px-10 py-4 md:px-32 xl:px-80">
          <div className="segment grid grid-cols-3 md:grid-cols-5">
            <h3 className="col-span-1 m-0 px-1 py-6 xl:pl-4 2xl:py-8 2xl:pl-8">
              {t("welcome.userLogin")}
            </h3>
            <div className="col-span-2 md:col-span-4">
              {t("welcome.loginExplain1")}
              <FontAwesomeIcon icon={faUserCircle} size="2x" />
              {t("welcome.loginExplain2")}
              <br />
              {t("welcome.useWasedaGmail1")}
              <b style={{ color: "#b51e36" }}>{t("welcome.Waseda Gmail")}</b>
              {t("welcome.useWasedaGmail2")}
              <br />( ***@***.waseda.jp )
            </div>              
          </div>
          
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20 mt-10">
            <div className="segment">
              <h3>
                {t("welcome.writeReviews")}
              </h3>
              {t("welcome.writeReviewsExplain1")}
              <br />
              {t("welcome.writeReviewsExplain2")}
              <br />
              <img src={reviewsImg} alt="reviews example" width="100%" />
            </div>

            <div className="segment">
              <h3>
                {t("welcome.timetableSync")}
              </h3>
              {t("welcome.timetableSyncExplain")}
              <br />
              {t("welcome.timetableDisplayCredits")}
              <div className="grid grid-cols-8">
                <div className="col-span-5">
                  <img src={timetableImg1} alt="timetable example 1" width="100%" />
                </div>
                <div style={{ padding: "0px", paddingTop: "20%" }}>
                  <FontAwesomeIcon icon={faExchangeAlt} size="2x" />
                </div>
                <div className="col-span-2">
                  <img src={timetableImg2} alt="timetable example 2" width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledArticle>
    </StyledWrapper>
  );
};

export default withTranslation("translation")(Home);
