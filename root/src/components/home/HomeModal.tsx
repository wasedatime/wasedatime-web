import React, { useState } from "react";
import Modal from "@bit/wasedatime.core.ts.ui.modal";
import { sizes } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import ReactGA from "react-ga";
import { WithTranslation, withTranslation } from "react-i18next";
import MediaQuery from "react-responsive";

import NewFeatures from "@app/components/home/NewFeatures";
import Welcome from "@app/components/home/Welcome";
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
    background: "rgba(30, 30, 30, 0.5)",
  },
  content: {
    position: "absolute",
    top: "calc((100vh - 495px) / 2)",
    width: "450px",
    height: "auto",
    maxHeight: "450px",
    left: "calc((100vw - 450px) / 2)",
    overflowY: "auto",
    overflowScrolling: "touch",
    WebkitOverflowScrolling: "touch",
    outline: "none",
    fontSize: "16px",
    border: "none",
    borderRadius: "20px",
    backgroundColor: "transparent",
    padding: 0,
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

interface Props extends WithTranslation {
  isModalOpen: boolean;
  closeModal: () => void;
  isFirstAccess: boolean;
}

const HomeModal = ({
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
    <Welcome goToNextPage={() => setPageIndex(pageIndex + 1)} />,
    <NewFeatures
      goToPrevPage={() => setPageIndex(pageIndex - 1)}
      closeModal={closeModal}
      isFirstAccess={isFirstAccess}
    />,
  ];

  return (
    <div>
      <MediaQuery maxWidth={sizes.tablet}>
        {(matches) =>
          matches ? (
            <Modal
              isOpen={isModalOpen}
              style={mobileModalStyle}
              onRequestClose={closeModal}
            >
              <div className="h-full p-6 flex items-center bg-light-bgMain dark:bg-dark-bgMain dark:text-dark-text1">
                {pages[pageIndex]}
              </div>
            </Modal>
          ) : (
            <Modal
              isOpen={isModalOpen}
              style={modalStyle}
              onRequestClose={closeModal}
            >
              <div className="h-full p-6 flex items-center bg-light-bgMain dark:bg-dark-bgMain dark:text-dark-text1">
                {pages[pageIndex]}
              </div>
            </Modal>
          )
        }
      </MediaQuery>
    </div>
  );
};

export default withTranslation("translation")(HomeModal);
