import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { Grid } from "semantic-ui-react";

import MobileNav from "./MobileNav";
import LanguangeMenu from "@bit/wasedatime.core.ts.ui.language-menu";
// import UserMenu from "./user/UserMenu";
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

const StyledGrid = styled(Grid)`
  width: calc(100vw - 70px) !important;
`;

const StyledGridColumn = styled(Grid.Column)`
  padding: 0.5rem !important;
`;

const StyledNavWrapper = styled(StyledGridColumn)`
  padding: 0px 0.5rem !important;
`;

const MobileHeader = ({ navItems, openSignInModal }) => {
  return (
    <MobileHeaderWrapper>
      <StyledLink to="/about">
        <SmallLogo />
      </StyledLink>

      <StyledGrid>
        <StyledNavWrapper width={12} floated="left">
          <MobileNav navItems={navItems} />
        </StyledNavWrapper>
        <StyledGridColumn width={2} floated="right">
          {/*<LanguangeMenu />*/}
        </StyledGridColumn>
        <StyledGridColumn width={2} floated="right">
          {/*<UserMenu
            userInfo={userInfo}
            signOut={signOut}
            openSignInModal={toggleSignInModal}
            isHovered={false}
            isMobileMode={true}
          />*/}
        </StyledGridColumn>
      </StyledGrid>
    </MobileHeaderWrapper>
  );
};

export default MobileHeader;
