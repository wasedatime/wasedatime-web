import React from "react";
import Bus from "./bus/Bus";
import Lang from "@bit/wasedatime.core.ts.constants.langs";
import i18nConfig from "@bit/wasedatime.core.ts.utils.i18n";
import translationEN from "./constants/locales/en/translation.json";
import translationJP from "./constants/locales/ja/translation.json";
import RoomFinder from "./room/RoomFinder";
import "./styles/styles.scss";
import Header from "@bit/wasedatime.core.ts.ui.header";
import { useTranslation } from "react-i18next";

i18nConfig({
  [Lang.EN]: translationEN,
  [Lang.JA]: translationJP,
});

export default function Root(props) {
  const { t, i18n } = useTranslation();
  return (
    <section>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: '0 0 67px' }}>
          <Header
            title={t("navigation.campus")}
            onInputChange={() => {}}
            placeholder={t("search placeholder")}
            inputText={""}
            disabled={true}
            isBlur={false}
            changeLang={(lng) => i18n.changeLanguage(lng)}
          />
        </div>
        <div className="campus-container">
          {/* <RoomFinder /> */}
          <Bus />
        </div>
      </div>
    </section>
  );
}
