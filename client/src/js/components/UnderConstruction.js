import React from "react";
import styled from "styled-components";

import { media } from "../styled-components/utils";
import { Wrapper } from "../styled-components/Wrapper";
import { Overlay } from "../styled-components/Overlay";
import logo from "../../img/logo.png";

import { withNamespaces } from "react-i18next";
import Developers from "./welcome/Developers";

const ExtendedWrapper = styled(Wrapper)`
  flex: 1 0 auto;
`;

const ExtendedOverlay = styled(Overlay)`
  align-items: center;
  justify-content: center;
  padding: 25px;
`;

const Logo = styled("img")`
  height: 100px;
  width: 100px;
  ${media.phone`height: 80px;
  width: 80px;`};
`;

const Description = styled("p")`
  font-size: 1.3em;
  text-align: center;
  word-break: keep-all;
  ${media.phone`font-size: 1.1em; margin: 0.3em;`};
`;

const UnderConstruction = ({ t }) => {
  window.scrollTo({ top: 0 });
  return (
    <ExtendedWrapper>
      <ExtendedOverlay>
        <Logo src={logo} alt="WasedaTime logo" />
        <h2>{t("room.Under Construction")}</h2>
        <Description>
          {t("room.Want to help?")} <br />
          {t("room.Check out our")}
          <a href="https://www.facebook.com/wasedatime">{t("room.facebook")}</a>
          {t("room.or")}
          <a href="https://twitter.com/wasedatime">{t("room.twitter")}</a>
          {t("room.!")}
        </Description>
        <Developers t={t} />
      </ExtendedOverlay>
    </ExtendedWrapper>
  );
};

export default withNamespaces("translation")(UnderConstruction);
