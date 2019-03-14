import React from "react";
import styled from "styled-components";

import { media } from "../styled-components/utils";
import { Wrapper } from "../styled-components/Wrapper";
import { Overlay } from "../styled-components/Overlay";
import logo from "../../img/logo.png";

import { withNamespaces } from "react-i18next";

const ExtendedWrapper = styled(Wrapper)`
  flex: 1 0 0;
`;

const ExtendedOverlay = styled(Overlay)`
  align-items: center;
  justify-content: center;
  padding: 25px;
`;

const Logo = styled("img")`
  height: 100px;
  width: 100px;
  transition: transform(0, 12vh);
`;

const Description = styled("p")`
  font-size: 1.3em;
  text-align: center;
  ${media.phone`font-size: 1.1em;`};
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
          {t("room.Check out")}
          <a href="https://github.com/wasetime/wasetime-web">
            {t("room.here")}
          </a>{" "}
          {t("room.or")}{" "}
          <a href="mailto:wasedatime@gmail.com">{t("room.send an email")}</a>
          {t("room.!")}
          <br />
          {t("room.We sincerely welcome any contributors!")}
        </Description>
      </ExtendedOverlay>
    </ExtendedWrapper>
  );
};

export default withNamespaces("translation")(UnderConstruction);
