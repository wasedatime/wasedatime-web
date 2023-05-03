import React, { useContext } from "react";

import { Logo } from "wasedatime-ui";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { ThemeContext } from "@app/utils/theme-context";

type Props = {
  goToNextPage: () => void;
};

const LogoWrapper = styled("div")`
  transform: translate(0, 5vh);
  img {
    text-align: center;
    margin: auto;
  }
`;

const Welcome = ({ goToNextPage }: Props) => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="w-full">
      <LogoWrapper style={{ transform: "none" }}>
        <Logo />
      </LogoWrapper>

      <h3 className="text-center my-4">{t("welcome.welcome")}</h3>
      <h6 className="text-center my-4">{t("welcome.slogan")}</h6>

      <div className="text-center my-4">
        <button
          className={`border-2 border-red-700 rounded-lg px-4 mx-2 hover:bg-red-700 hover:text-white focus:outline-none ${
            i18n.language === "en" ? "bg-red-700 text-white" : "text-red-700"
          }`}
          onClick={() => i18n.changeLanguage("en")}
        >
          English
        </button>
        <button
          className={`border-2 border-red-700 rounded-lg px-4 mx-2 hover:bg-red-700 hover:text-white focus:outline-none ${
            i18n.language === "ja" ? "bg-red-700 text-white" : "text-red-700"
          }`}
          onClick={() => i18n.changeLanguage("ja")}
        >
          日本語
        </button>
        <button
          className="ml-4 text-icon-sun dark:text-icon-moon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <FontAwesomeIcon
            icon={theme === "light" ? faSun : faMoon}
            size="lg"
          />
        </button>
      </div>

      <hr className="my-8 dark:border-dark-text3" />

      <div className="text-center mt-6">
        <button
          className="border-2 border-red-700 text-red-700 rounded-lg px-4 hover:bg-red-700 hover:text-white focus:outline-none"
          onClick={goToNextPage}
        >
          {t("welcome.next").toUpperCase()}
        </button>
      </div>
    </div>
  );
};

export default Welcome;
