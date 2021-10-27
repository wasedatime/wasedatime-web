import * as React from "react";
import styled from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";
import Header from "@bit/wasedatime.core.ts.ui.header";

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

interface Props extends WithTranslation {
  path: string;
}

class Feeds extends React.Component<Props, {}> {
  render() {
    const { t, i18n } = this.props;

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
          <iframe
            src="http://localhost:8083"
            style={{ width: '100%', height: 'calc(100vh - 70px)' }}
          >
          </iframe>
        </div>
      </FeedsWrapper>
    );
  }
}

export default withTranslation("translation")(Feeds);
