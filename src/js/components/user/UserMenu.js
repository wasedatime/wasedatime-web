import React from "react";
import PropTypes from "prop-types";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withNamespaces } from "react-i18next";
import { Dropdown, Icon } from "semantic-ui-react";
import { media } from "../../styled-components/utils";
import styled, { keyframes } from "styled-components";

export const expandLink = () =>
  keyframes`
    from { width: 0px; }
    to { width: 140px; }
  `;

const UserMenuTrigger = styled("div")`
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 1rem;

  i {
    margin: 0 !important;
    font-size: 2.5em !important;
  }

  &:hover {
    cursor: pointer;
  }
`;

const StyledSpan = styled("span")`
  animation-name: ${expandLink};
  animation-duration: 0.5s;
  width: 140px
  text-align: left
  font-size: 1.1em
  font-weight: 100;
  margin-left: 1rem
  color: #fff;
`;

const StyledMenu = styled(Dropdown.Menu)`
  width: 205px;
  margin-top: 1rem !important;
  background: #555 !important;
`;

const StyledMenuItem = styled(Dropdown.Item)`
  font-size: 1em !important;
  color: #fff !important;
`;

const UserMenu = ({ userInfo, signOut, openSignInModal, isHovered, t }) =>
  userInfo ? (
    <Dropdown
      trigger={
        <UserMenuTrigger>
          <div>
            <Icon name="user circle outline" size="big" />
          </div>
          {isHovered && <StyledSpan>Welcome!</StyledSpan>}
        </UserMenuTrigger>
      }
      direction="bottom"
      icon={null}
    >
      <StyledMenu>
        <StyledMenuItem disabled>Profile</StyledMenuItem>
        <StyledMenuItem onClick={signOut}>{t(`user.Sign Out`)}</StyledMenuItem>
      </StyledMenu>
    </Dropdown>
  ) : (
    <UserMenuTrigger onClick={openSignInModal}>
      <Icon name="user circle outline" size="big" />
      {isHovered && <StyledSpan>Sign in</StyledSpan>}
    </UserMenuTrigger>
  );

export default withNamespaces("translation")(UserMenu);

UserMenu.propTypes = {
  lng: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};
