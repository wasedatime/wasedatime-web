import React from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderWithModal from "@app/components/common/HeaderWithModal";

import { ThemeContext } from "@app/utils/theme-context";
import Board from "./Board";
import BoardMenu from "@app/components/BoardMenu";
import Thread from "@app/components/Thread";
import FilterMenu from "./FilterMenu";
import SearchTags from "./SearchTags";

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
          <div className="justify-between">
            <BoardMenu />
          </div>
          {/* <div className="basis-[calc(100vh-187px)] lg:basis-[80%] dark:text-dark-text1"> */}
          <div className="flex h-screen justify-between pl-2 gap-4">
            <div className="flex flex-row w-full">
              <FilterMenu />
              <div className="w-5/6">
                <Routes>
                  <Route element={<Board />} path="forum/:boardSlug" />
                  <Route
                    element={<Thread />}
                    path="forum/:boardSlug/:threadUuid"
                  />
                </Routes>
              </div>
              {/* <div className="bg-gray-100 md:h-full flex w-1/6">
                <h1 className="my-auto">Advertisement</h1>
              </div> */}
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
