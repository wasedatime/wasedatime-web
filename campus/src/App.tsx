import React from "react";

import Header from "@bit/wasedatime.core.ts.ui.header";
import { useTranslation } from "react-i18next";

import { Frame } from "@app/components/Frame";
import Bus from "@app/pages/Bus/Bus";
import RoomFinder from "@app/pages/Room/RoomFinder";
import { ThemeContext } from "@app/utils/theme-context";
import "@app/styles/styles.scss";

const App = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <>
      <div style={{ flex: "0 0 67px" }}>
        <Header
          title={t("navigation.campus")}
          onInputChange={() => {}}
          placeholder={t("search placeholder")}
          inputText=""
          disabled
          isBlur={false}
          theme={theme}
          setTheme={setTheme}
          changeLang={(lng) => i18n.changeLanguage(lng)}
        />
      </div>
      <Frame
        primary={
          <div className="campus-container flex flex-col items-center">
            <RoomFinder />
            <Bus />
          </div>
        }
      />
    </>
  );
};

export default App;
