import React from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import { Dropdown, Image, Icon } from "semantic-ui-react";
import styled, { keyframes } from "styled-components";
import { media } from "../../styled-components/utils";

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
  padding: 1rem 0.5rem 1rem 1.2rem;
  ${media.phone`padding: 0.5rem;`}

  i {
    margin: 0 !important;
    font-size: 2em !important;
  }

  img.ui.circular.image {
    width: 40px !important;
    min-width: 40px !important;
    ${media.phone`width: 35px !important; min-width: 35px !important;`}
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
  opacity: ${(props) => (props.isHovered ? "1" : "0")};
  width: ${(props) => (props.isHovered ? "145px" : "0px")};
  white-space: nowrap;
  overflow-x: hidden;
  transition: ${(props) =>
    props.isHovered
      ? "width 0.3s ease-out, opacity 0.5s ease 0.2s"
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

const UserMenu = ({
  userInfo,
  signOut,
  openSignInModal,
  isHovered,
  isMobileMode,
  t,
}) =>
  userInfo ? (
    <Dropdown
      isHovered={isHovered}
      trigger={
        <UserMenuTrigger>
          <Image
            src={userInfo.idToken.payload.picture}
            width={isMobileMode ? "35" : "40"}
            height={isMobileMode ? "35" : "40"}
            circular
          />
          <StyledSpan isHovered={isHovered}>
            {userInfo.idToken.payload.preferred_username}
          </StyledSpan>
        </UserMenuTrigger>
      }
      icon={null}
      simple
      direction={isMobileMode ? "left" : "right"}
    >
      <StyledMenu>
        <StyledMenuItem disabled>Profile</StyledMenuItem>
        <StyledMenuItem onClick={signOut}>{t(`user.Sign Out`)}</StyledMenuItem>
      </StyledMenu>
    </Dropdown>
  ) : (
    <UserMenuTrigger onClick={openSignInModal}>
      <Icon name="user circle outline" size="massive" />
      {!isMobileMode && <StyledSpan isHovered={isHovered}>Sign in</StyledSpan>}
    </UserMenuTrigger>
  );

export default withNamespaces("translation")(UserMenu);

UserMenu.propTypes = {
  lng: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};
