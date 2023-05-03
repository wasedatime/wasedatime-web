import React, { lazy } from "react";

import { Header } from "wasedatime-ui";
import { useTranslation } from "react-i18next";

import { ThemeContext } from "@app/utils/theme-context";
import "@app/styles/wasedatime-campus.scss";

const Bus = lazy(() => import("@app/bus/Bus"));
const RoomFinder = lazy(() => import("@app/room/RoomFinder"));

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
};

export default App;
