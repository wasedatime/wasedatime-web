import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import HeaderWithModal from "@app/components/common/HeaderWithModal";
import { ThemeContext } from "@app/utils/theme-context";
import Board from "./Board";
import BoardMenu from "@app/components/BoardMenu";
import Thread from "@app/components/Thread";
import FilterMenu from "./FilterMenu";
import SearchTags from "./SearchTags";
import FeedBackBox from "./FeedBackBox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { API } from "@aws-amplify/api";
import { getUserAttr, getIdToken, LoadingSpinner } from "wasedatime-ui";
import { storeDate } from "@app/utils/storeDate";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        <InnerApp />
      </BrowserRouter>
    </div>
  );
};

export default App;

const NotFound = () => {
  const { theme } = React.useContext(ThemeContext);
  const navigate = useNavigate();
  useEffect(() => navigate("/"));

  return <LoadingSpinner theme={theme} message="Not found! Redirecting..." />;
};

const InnerApp = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const { theme, setTheme } = React.useContext(ThemeContext);
  const [refresh, setRefresh] = useState(false);
  const [board, setBoard] = useState("");
  const [commentNotify, setCommentNotify] = useState(false);
  const navigate = useNavigate();
  const [filterButtonClicked, setFilterButtonClicked] = useState(false);

  const isThreadRoute =
    location.pathname.includes("forum/") &&
    location.pathname.split("/").length === 4;

  const handleReset = () => {
    navigate("/forum");
    setRefresh(!refresh);
  };

  const fetchNotification = async () => {
    let idToken = "";
    if (idToken?.length <= 0) {
      idToken = await getIdToken();
      if (idToken?.length <= 0) return;
    }
    const res = await API.get("wasedatime-dev", `/forum/user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: idToken,
      },
      response: true,
    });

    const commentFlag = res.data.data.new_comment_flag;
    setCommentNotify(commentFlag);
  };

  useEffect(() => {
    fetchNotification();
    storeDate();
  }, []);

  const handleFilterButtonClick = () => {
    setFilterButtonClicked(!filterButtonClicked);
  };

  return (
    <>
      <div className="flex h-[67px] shrink-0 grow-0">
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
          boardSlug={board}
          disabled={true}
          commentNotify={commentNotify}
        />
      </div>
      <div className="flex flex-col h-[calc(100vh-50px)] mt-[23px]">
        <div className="flex justify-between pl-2 gap-4 h-[calc(100vh-100px)]">
          <div className="left-side flex flex-col w-1/5">
            <div className="pl-2 lg:pl-10">
              <button
                onClick={handleReset}
                className="p-2 bg-light-main text-white rounded-lg my-1 w-full"
              >
                <ArrowBackIcon fontSize="large" />
              </button>
            </div>
            <FilterMenu />
            <BoardMenu />
            <FeedBackBox />
          </div>
          {!isThreadRoute && (
            <button
              className="filterButton p-2 bg-light-main text-white rounded-lg h-10"
              onClick={handleFilterButtonClick}
            >
              Filter
            </button>
          )}
          {filterButtonClicked && (
            <div className="filterModal rounded-lg bg-black">
              <button
                onClick={handleReset}
                className="p-2 bg-light-main text-white rounded-lg my-1 w-full"
              >
                <ArrowBackIcon fontSize="large" />
              </button>
              <FilterMenu />
              <BoardMenu />
              <FeedBackBox />
            </div>
          )}

          <div className="flex flex-col md:w-3/5">
            <Routes>
              <Route
                element={<Board triggerRefresh={refresh} setBoard={setBoard} />}
                path="forum"
              />
              <Route
                element={<Board triggerRefresh={refresh} setBoard={setBoard} />}
                path="forum/:boardSlug"
              />
              <Route element={<Thread />} path="forum/:boardSlug/:threadUuid" />
              <Route element={<NotFound />} path="*" />
            </Routes>
          </div>
          <div className="flex flex-col lg:w-1/5 ">
            <div className="hidden md:h-[500px] md:w-[250px] justify-self-end">
              <h1></h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
