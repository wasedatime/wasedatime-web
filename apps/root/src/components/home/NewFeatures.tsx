import React from "react"

import { useTranslation } from "react-i18next"
import { navigateToUrl } from "single-spa"

import themeToggleDarkImg from "@app/assets/img/home/theme-toggle-dark.png"
import themeToggleLightImg from "@app/assets/img/home/theme-toggle-light.png"

import forumDarkImg from "@app/assets/img/home/forum-dark.png"
import forumLightImg from "@app/assets/img/home/forum-light.png"

type Props = {
  isFirstAccess: boolean
  goToPrevPage: () => void
  closeModal: () => void
}

const NewFeatures = ({ isFirstAccess, goToPrevPage, closeModal }: Props) => {
  const { t } = useTranslation()

  return (
    <div>
      <div className="mb-6 grid grid-cols-4">
        <div className="col-span-1">
          <hr className="my-4" />
        </div>
        <div className="col-span-2">
          <h5 className="col-span-2 text-center">{t("welcome.newFeature")}</h5>
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
        <br />
        <br />
        <div className="flex flex-row items-center justify-center">
          <div className=" text-center ">
            <img
              src={forumLightImg}
              alt="reviews example"
              style={{ width: "100%" }}
            />
            <p>{t("welcome.themeToggle.lightMode")}</p>
          </div>
          {/* <div className="text-center">
            <img src={themeToggleDarkImg} alt="reviews example" width="100%" />
            <p>{t("welcome.themeToggle.darkMode")}</p>
          </div> */}
        </div>
      </div>

      <hr className="my-8 dark:border-dark-text3" />

      <div className="mt-6 text-center">
        <button
          className="mx-4 rounded-lg border-2 border-red-700 px-4 text-red-700 hover:bg-red-700 hover:text-white focus:outline-none"
          onClick={goToPrevPage}
        >
          {t("welcome.back").toUpperCase()}
        </button>
        <button
          className="mx-4 rounded-lg border-2 border-red-700 px-4 text-red-700 hover:bg-red-700 hover:text-white focus:outline-none"
          onClick={() => {
            if (isFirstAccess) {
              localStorage.setItem("isFirstAccess", "false")
              navigateToUrl("/courses/timetable")
            } else {
              closeModal()
            }
          }}
        >
          {t("welcome.done").toUpperCase()}
        </button>
      </div>
    </div>
  )
}

export default NewFeatures
