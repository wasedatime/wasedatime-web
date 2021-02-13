import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { WithTranslation, withTranslation } from "react-i18next";

import MobileNav from "./MobileNav";
import LanguangeMenu from "@bit/wasedatime.core.ts.ui.language-menu";
import UserMenu from "../user/UserMenu";
import { SmallLogo } from "@bit/wasedatime.core.ts.ui.logo";
import MobileHeaderWrapper from "@bit/wasedatime.core.ts.styles.mobile-header-wrapper";

const StyledLink = styled(Link)`
  display: flex;
  margin-right: 0.5rem;
`;

const Logo = styled("img")`
  width: 50px;
  height: 50px;
`;

const MobileHeader = ({ navItems, openSignInModal, i18n }) => {
  return (
    <MobileHeaderWrapper>
      <StyledLink to="/about">
        <SmallLogo />
      </StyledLink>

      <MobileNav navItems={navItems} />
      <div className="ml-auto">
        <LanguangeMenu changeLang={(lng) => i18n.changeLanguage(lng)} />
      </div>
    </MobileHeaderWrapper>
  );
};

export default withTranslation("translation")(MobileHeader);
