import * as React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Header from "@bit/wasedatime.core.ts.ui.header";
import LoadingSpinner from "@bit/wasedatime.core.ts.ui.loading-spinner";
import { ThemeContext } from "../utils/themeContext";

const FeedsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  flex: 0 0 67px;
  h2 {
    font-size: 32px;
    font-family: Lato, Yu Gothic Medium, Segoe UI;
  }
`;

const Feeds = ({ path }: { path: string }) => {
  const [feedsLoaded, setFeedsLoaded] = React.useState(false);
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = React.useContext(ThemeContext);

  const feedsDomain = process.env.NODE_ENV === "development"
    ? "http://localhost:8083"
    : process.env.NODE_ENV === "staging"
      ? `https://${process.env.PREFIX}.${process.env.MF_FEEDS_DOMAIN}`
      : "/feeds";

  return (
    <FeedsWrapper style={{ overflow: "hidden" }}>
      <HeaderWrapper>
        <Header
          title={t("navigation.feeds")}
          onInputChange={() => {}}
          placeholder={t("search feeds placeholder")}
          inputText=""
          disabled
          isBlur={false}
          changeLang={(lng) => i18n.changeLanguage(lng)}
          // theme={theme}
          // setTheme={setTheme}
        />
      </HeaderWrapper>
      <div>
        {!feedsLoaded && <LoadingSpinner message="Loading..." />}
        <iframe
          src={`${feedsDomain}/${i18n.language}`}
          style={{ width: "100%", height: "calc(100vh - 70px)" }}
          onLoad={() => setFeedsLoaded(true)}
        />
      </div>
    </FeedsWrapper>
  );
};

export default Feeds;
