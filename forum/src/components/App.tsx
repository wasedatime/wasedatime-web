import React from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "@bit/wasedatime.core.ts.ui.header";
import { ThemeContext } from "@app/utils/theme-context";
import Board from "@app/components/Board";
import BoardMenu from "@app/components/BoardMenu";
import Thread from "@app/components/Thread";

const App = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="flex flex-col">
      <BrowserRouter>
        <div className="basis-[67px]">
          <Header
            title={t("navigation.forum")}
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
        <div className="basis-[calc(100vh-67px)] flex flex-col lg:flex-row">
          <div className="basis-[60px] lg:basis-[20%] bg-zinc-100 dark:bg-zinc-700 dark:text-dark-text1">
            <BoardMenu />
          </div>
          <div className="basis-[calc(100vh-187px)] lg:basis-[80%] dark:text-dark-text1">
            <Routes>
              <Route element={<Board />} path="forum/:boardId" />
              <Route element={<Thread />} path="forum/:board/:threadId" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
