import React from "react";
import { useTranslation } from "react-i18next";
import Bus from "@app/bus/Bus";
import RoomFinder from "@app/room/RoomFinder";
import Header from "@bit/wasedatime.core.ts.ui.header";
import { ThemeContext } from "@app/utils/theme-context";
import "@app/styles/styles.scss";

const App = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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
        <div className="campus-container">
          <RoomFinder />
          <Bus />
        </div>
      </div>
  );
}

export default App;