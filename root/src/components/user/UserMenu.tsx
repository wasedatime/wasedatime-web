import React, { useState } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { Dropdown, Image, Icon } from "semantic-ui-react";
import styled, { keyframes } from "styled-components";
import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import {
  getUserAttr,
  signOut,
  getIdToken,
} from "@bit/wasedatime.core.ts.utils.user";

export const expandLink = () =>
  keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
  `;

const UserMenuTrigger = styled("div")`
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5vh 0.5rem 1rem 1.2rem;
  ${media.tablet`padding: 0.5rem;`}

  i {
    margin: 0 !important;
    font-size: 2em !important;
    width: 40px;
    min-width: 40px;
  }

  img.ui.circular.image {
    width: 40px;
    min-width: 40px;
    ${media.phone`width: 35px; min-width: 35px;`}
  }

  &:hover {
    cursor: pointer;
  }
`;

const StyledSpan = styled("span")`
  animation-name: ${expandLink};
  animation-duration: 0.3s;
  text-align: left
  font-size: 1.1em
  font-weight: 100;
  margin-left: 1rem
  color: #fff;
  opacity: ${(props) => (props.ishovered ? "1" : "0")};
  width: ${(props) => (props.ishovered ? "145px" : "0px")};
  white-space: nowrap;
  overflow-x: hidden;
  transition: ${(props) =>
    props.ishovered
      ? "width 0.3s ease-out, opacity 0.3s ease 0.2s"
      : "opacity 0.3s ease, width 0.3s ease-out 0.2s"};
`;

const StyledMenu = styled(Dropdown.Menu)`
  width: 210px !important;
  ${media.phone`width: 60px !important;`}
  background: #555 !important;
  z-index: 999;
`;

const StyledMenuItem = styled(Dropdown.Item)`
  width: 100% !important;
  font-size: 1em !important;
  color: #fff !important;
`;

interface Props extends WithTranslation {
  openSignInModal: () => void;
  isHovered: boolean;
  isMobileMode: boolean;
}

const UserMenu = ({ openSignInModal, isHovered, isMobileMode, t }: Props) => {
  const [userAttr, setUserAttr] = useState(null);
  const notSignedIn = !userAttr;
  if (notSignedIn) getUserAttr().then((attr) => setUserAttr(attr));

  return notSignedIn ? (
    <React.Fragment>
      <UserMenuTrigger onClick={openSignInModal}>
        <Icon name="user circle outline" size="massive" />
        {!isMobileMode && (
          <StyledSpan ishovered={isHovered}>Sign in</StyledSpan>
        )}
      </UserMenuTrigger>
    </React.Fragment>
  ) : (
    <Dropdown
      trigger={
        <UserMenuTrigger>
          <Image
            src={userAttr.picture}
            width={isMobileMode ? "35" : "40"}
            height={isMobileMode ? "35" : "40"}
            circular
            alt="Image of User account"
          />
          <StyledSpan ishovered={isHovered}>{userAttr.name}</StyledSpan>
        </UserMenuTrigger>
      }
      icon={null}
      simple
      direction={isMobileMode ? "left" : "right"}
    >
      <StyledMenu>
        {/*<StyledMenuItem disabled>Profile</StyledMenuItem>*/}
        <StyledMenuItem onClick={signOut}>{t("user.Sign Out")}</StyledMenuItem>
      </StyledMenu>
    </Dropdown>
  );
};

export default withTranslation("translation")(UserMenu);
