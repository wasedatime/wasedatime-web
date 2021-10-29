import * as React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Header from "@bit/wasedatime.core.ts.ui.header";
import LoadingSpinner from "@bit/wasedatime.core.ts.ui.loading-spinner";

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
  const [ feedsLoaded, setFeedsLoaded ] = React.useState(false);
  const { t, i18n } = useTranslation();

  return (
    <FeedsWrapper>
      <HeaderWrapper>
        <Header
          title={t("navigation.feeds")}
          onInputChange={() => {}}
          placeholder={t("search placeholder")}
          inputText={""}
          disabled={true}
          isBlur={false}
          changeLang={(lng) => i18n.changeLanguage(lng)}
        />
      </HeaderWrapper>
      <div>
        {!feedsLoaded && <LoadingSpinner message="Loading..." />}
        <iframe
          src={"http://localhost:8083?locale=" + i18n.language}
          style={{ width: '100%', height: 'calc(100vh - 70px)' }}
          onLoad={() => setFeedsLoaded(true)}
        >
        </iframe>
      </div>
    </FeedsWrapper>
  )
}

export default Feeds;
