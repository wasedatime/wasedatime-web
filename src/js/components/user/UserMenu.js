import React from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import { Dropdown, Image, Icon } from "semantic-ui-react";
import styled, { keyframes } from "styled-components";

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
  padding-left: 0.9rem;
  padding-bottom: 1rem;

  i {
    margin: 0 !important;
    font-size: 2em !important;
  }

  &:hover {
    cursor: pointer;
  }
`;

const StyledSpan = styled("span")`
  animation-name: ${expandLink};
  animation-duration: 0.5s;
  width: 150px
  text-align: left
  font-size: 1.1em
  font-weight: 100;
  margin-left: 1rem
  color: #fff;
  opacity: ${(props) => (props.isHovered ? "1" : "0")};
  transition: opacity 0.3s;
`;

const StyledMenu = styled(Dropdown.Menu)`
  width: 210px !important;
  background: #555 !important;
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
      trigger={
        <UserMenuTrigger>
          <div>
            <Image
              src={userInfo.idToken.payload.picture}
              width={isMobileMode ? "35" : "40"}
              height={isMobileMode ? "35" : "40"}
              circular
            />
          </div>
          {isHovered && (
            <StyledSpan isHovered={isHovered}>
              {userInfo.idToken.payload.preferred_username}
            </StyledSpan>
          )}
        </UserMenuTrigger>
      }
      icon={null}
      simple
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
