import React, { useContext, useEffect } from "react";

import Lang from "@bit/wasedatime.core.ts.constants.langs";
import Header from "@bit/wasedatime.core.ts.ui.header";
import i18nConfig from "@bit/wasedatime.core.ts.utils.i18n";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

import Bus from "@app/bus/Bus";
import translationEN from "@app/constants/locales/en/translation.json";
import translationJA from "@app/constants/locales/ja/translation.json";
import RoomFinder from "@app/room/RoomFinder";
import "@app/styles/styles.scss";

i18nConfig({
  i18n: i18next,
  customTranslations: {
    [Lang.EN]: translationEN,
    [Lang.JA]: translationJA,
  }
});

const Root = (props) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("wasedatime-lng"));
  }, [])

  return (
    <section>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ flex: "0 0 67px" }}>
          <Header
            title={t("navigation.campus")}
            onInputChange={() => {}}
            placeholder={t("search placeholder")}
            inputText=""
            disabled
            isBlur={false}
            // theme={"light"}
            // setTheme={() => {}}
            changeLang={(lng) => i18n.changeLanguage(lng)}
          />
        </div>
        <div className="campus-container">
          <RoomFinder />
          <Bus />
        </div>
      </div>
    </section>
  );
};

export default Root;
