import React from "react";
import { useTranslation } from "react-i18next";
import { navigateToUrl } from "single-spa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import themeToggleLightImg from "@app/assets/img/home/theme-toggle-light.png";
import themeToggleDarkImg from "@app/assets/img/home/theme-toggle-dark.png";

type Props = {
  isFirstAccess: boolean;
  goToPrevPage: () => void;
  closeModal: () => void;
}

const NewFeatures = ({ isFirstAccess, goToPrevPage, closeModal }: Props) => {
  const { t } = useTranslation();

  return (
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

      <div>
        <h4>{t("welcome.themeToggle.title")}</h4>
        {t("welcome.themeToggle.themeToggleExplain1")}
        <br />
        {t("welcome.themeToggle.themeToggleExplain2")}
        <br />
        {t("welcome.themeToggle.themeToggleExplain3")}
        <br /><br />
        <div className="flex flex-row gap-8">
          <div className="text-center">
            <img
              src={themeToggleLightImg}
              alt="reviews example"
              width="100%"
            />
            <p>{t("welcome.themeToggle.lightMode")}</p>
          </div>
          <div className="text-center">
            <img
              src={themeToggleDarkImg}
              alt="reviews example"
              width="100%"
            />
            <p>{t("welcome.themeToggle.darkMode")}</p>
          </div>
        </div>
      </div>

      <hr className="my-8 dark:border-dark-text3" />

      <div className="text-center mt-6">
        <button
          className="border-2 border-red-700 text-red-700 rounded-lg px-4 mx-4 hover:bg-red-700 hover:text-white focus:outline-none"
          onClick={goToPrevPage}
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
    </div>
  )
}

export default NewFeatures;