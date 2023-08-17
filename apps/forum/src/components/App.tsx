import React from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderWithModal from "@app/components/common/HeaderWithModal";

import { ThemeContext } from "@app/utils/theme-context";
import BoardMenu from "@app/components/BoardMenu";
import SearchTags from "./SearchTags";
import BoardPages from "./BoardPages";
import ForumHomepage from "./ForumHomepage";

const App = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="flex flex-col">
      <BrowserRouter>
        <div className="basis-[67px]">
          <HeaderWithModal
            modal={SearchTags}
            title={t("navigation.forum")}
            onInputChange={() => {}}
            placeholder={t("search placeholder")}
            inputText=""
            isBlur={false}
            theme={theme}
            setTheme={setTheme}
            changeLang={(lng: string | undefined) => i18n.changeLanguage(lng)}
          />
        </div>
        <div className="basis-[calc(100vh-67px)] flex flex-col">
          {/* <div className="basis-[60px] lg:basis-[20%] bg-zinc-100 dark:bg-zinc-700 dark:text-dark-text1">
            <BoardMenu />
          </div> */}

          {/* keep */}
          <div className="justify-between">
            <BoardMenu />
          </div>
          {/* <div className="basis-[calc(100vh-187px)] lg:basis-[80%] dark:text-dark-text1"> */}

          {/* 2 Routes: home / boards - method failed*/}
          {/* <Routes>
            <Route element={<ForumHomepage />} path="/forum" />
            <Route element={<BoardPages />} path="/forum/boards/:boardSlug"/>
          </Routes> */}
          <ForumHomepage />
          <BoardPages />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
