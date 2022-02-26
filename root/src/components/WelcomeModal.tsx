import React, { useState } from "react";

import { Logo } from "@bit/wasedatime.core.ts.ui.logo";
import Modal from "@bit/wasedatime.core.ts.ui.modal";
import { sizes } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import { faUserCircle, faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactGA from "react-ga";
import { WithTranslation, withTranslation } from "react-i18next";
import MediaQuery from "react-responsive";
import { navigateToUrl } from "single-spa";
import styled from "styled-components";

import reviewsImg from "@app/assets/img/home/reviews-example.png";
import timetableImg1 from "@app/assets/img/home/timetable-example-1.png";
import timetableImg2 from "@app/assets/img/home/timetable-example-2.png";
import { gaSetLanguage } from "@app/ga/eventActions";
import { gaLanguage } from "@app/ga/eventCategories";

const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: "1001",
    background: "rgba(153, 153, 153, 0.5)",
  },
  content: {
    position: "absolute",
    top: "calc((100vh - 495px) / 2)",
    width: "450px",
    height: "auto",
    maxHeight: "495px",
    left: "calc((100vw - 450px) / 2)",
    background: "#fff",
    overflowY: "auto",
    overflowScrolling: "touch",
    WebkitOverflowScrolling: "touch",
    outline: "none",
    fontSize: "16px",
    borderRadius: "20px",
  },
};

const mobileModalStyle = {
  overlay: modalStyle.overlay,
  content: {
    ...modalStyle.content,
    top: "calc((100vh - 540px) / 2)",
    width: "300px",
    maxHeight: "540px",
    left: "calc((100vw - 300px) / 2)",
    fontSize: "14px",
  },
};

const LogoWrapper = styled("div")`
  transform: translate(0, 5vh);
  img {
    text-align: center;
    margin: auto;
  }
`;

interface Props extends WithTranslation {
  isModalOpen: boolean;
  closeModal: () => void;
  isFirstAccess: boolean;
}

const WelcomeModal = ({
  isModalOpen,
  closeModal,
  isFirstAccess,
  t,
  i18n,
}: Props) => {
  const [pageIndex, setPageIndex] = useState(0);
  const changeLanguage = (lng) => {
    ReactGA.event({
      category: gaLanguage,
      action: gaSetLanguage,
      label: lng,
    });
    i18n.changeLanguage(lng);
  };

  const pages = [
    <div>
      <LogoWrapper style={{ transform: "none" }}>
        <Logo />
      </LogoWrapper>

      <h3 className="text-center">{t("welcome.welcome")}</h3>

      <div className="text-center my-4">
        <button
          className={`border-2 border-red-700 rounded-lg px-4 mx-2 hover:bg-red-700 hover:text-white focus:outline-none ${
            i18n.language === "en" ? "bg-red-700 text-white" : "text-red-700"
          }`}
          onClick={() => changeLanguage("en")}
        >
          English
        </button>
        <button
          className={`border-2 border-red-700 rounded-lg px-4 mx-2 hover:bg-red-700 hover:text-white focus:outline-none ${
            i18n.language === "ja" ? "bg-red-700 text-white" : "text-red-700"
          }`}
          onClick={() => changeLanguage("ja")}
        >
          日本語
        </button>
      </div>

      <br />
      <div className="grid grid-cols-4 mb-6">
        <div className="col-span-1">
          <hr className="my-4" />
        </div>
        <div className="col-span-2">
          <h5 className="text-center col-span-2">{t("welcome.newFeature")}</h5>
        </div>
        <div className="col-span-1">
          <hr className="my-4" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <h4 className="col-span-1 m-0 px-1 py-6 xl:pl-4 2xl:py-8 2xl:pl-8">
          {t("welcome.userLogin")}
        </h4>
        <div className="col-span-2">
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

      <div className="text-center mt-6">
        <button
          className="border-2 border-red-700 text-red-700 rounded-lg px-4 hover:bg-red-700 hover:text-white focus:outline-none"
          onClick={() => setPageIndex(pageIndex + 1)}
        >
          {t("welcome.next").toUpperCase()}
        </button>
      </div>
    </div>,
    <div>
      <div className="grid grid-cols-4 mb-6">
        <div className="col-span-1">
          <hr className="my-4" />
        </div>
        <div className="col-span-2">
          <h5 className="text-center col-span-2">{t("welcome.newFeature")}</h5>
        </div>
        <div className="col-span-1">
          <hr className="my-4" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20 mt-10">
        <div>
          <h4>{t("welcome.writeReviews")}</h4>
          {t("welcome.writeReviewsExplain1")}
          <br />
          {t("welcome.writeReviewsExplain2")}
          <br />
          <img
            src={reviewsImg}
            alt="reviews example"
            width="100%"
            height="100%"
          />
        </div>

        <div>
          <h4>{t("welcome.timetableSync")}</h4>
          {t("welcome.timetableSyncExplain")}
          <br />
          {t("welcome.timetableDisplayCredits")}
          <div className="grid grid-cols-8">
            <div className="col-span-5">
              <img
                src={timetableImg1}
                alt="timetable example 1"
                width="100%"
                height="100%"
              />
            </div>
            <div style={{ padding: "0px", paddingTop: "20%" }}>
              <FontAwesomeIcon icon={faExchangeAlt} size="2x" />
            </div>
            <div className="col-span-2">
              <img
                src={timetableImg2}
                alt="timetable example 2"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          className="border-2 border-red-700 text-red-700 rounded-lg px-4 mx-4 hover:bg-red-700 hover:text-white focus:outline-none"
          onClick={() => setPageIndex(pageIndex - 1)}
        >
          {t("welcome.back").toUpperCase()}
        </button>
        <button
          className="border-2 border-red-700 text-red-700 rounded-lg px-4 mx-4 hover:bg-red-700 hover:text-white focus:outline-none"
          onClick={() => {
            if (isFirstAccess) {
              localStorage.setItem("isFirstAccess", "false");
              navigateToUrl("/courses/timetable");
            } else {
              closeModal();
            }
          }}
        >
          {t("welcome.done").toUpperCase()}
        </button>
      </div>
    </div>,
  ];

  return (
    <MediaQuery maxWidth={sizes.tablet}>
      {(matches) =>
        matches ? (
          <Modal
            isOpen={isModalOpen}
            style={mobileModalStyle}
            onRequestClose={closeModal}
          >
            {pages[pageIndex]}
          </Modal>
        ) : (
          <Modal
            isOpen={isModalOpen}
            style={modalStyle}
            onRequestClose={closeModal}
          >
            {pages[pageIndex]}
          </Modal>
        )
      }
    </MediaQuery>
  );
};

export default withTranslation("translation")(WelcomeModal);
