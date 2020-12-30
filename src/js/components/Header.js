import React from "react";
import { withRouter } from "react-router-dom";
import { Auth, Hub } from "aws-amplify";
import { connect } from "react-redux";
import { getUserInfo } from "../reducers/user";
import { setUserInfo, clearUserInfo, updateUserSession } from "../actions/user";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Icon } from "semantic-ui-react";
import { withNamespaces } from "react-i18next";

import Navigation from "./Navigation";
import UserMenu from "./user/UserMenu";
import LanguangeMenu from "./LanguageMenu";
import logo from "../../img/logo.png";

const StyledHeader = styled("header")`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.3rem 1rem;
  height: ${(props) => props.theme.headerHeight};
  background: ${(props) => props.theme.grey2};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
`;

const StyledLink = styled(Link)`
  display: flex;
  margin-right: 0.5rem;
`;

const Logo = styled("img")`
  width: 50px;
  height: 50px;
`;

class Header extends React.Component {
  state = {
    currentPath: window.location.pathname,
  };

  componentDidMount() {
    // await setTimeout(
    //   Auth.currentSession().then((session) => {
    //     console.log("update session");
    //     this.props.updateUserSession(session);
    //   }),
    //   3540000
    // );

    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          Auth.currentAuthenticatedUser()
            .then((user) => {
              this.props.setUserInfo(user);
            })
            .catch((e) => {
              console.error(e);
            });
          this.props.setUserInfo(data);
          break;
        case "signOut":
          this.props.clearUserInfo();
          break;
        case "customOAuthState":
          this.props.history.push(data);
          break;
        default:
          console.log(event);
          console.log(data);
      }
    });
  }

  render() {
    const { userInfo, t } = this.props;
    return (
      <StyledHeader>
        <StyledLink to="/about">
          <Logo src={logo} alt="WasedaTime logo" width="50" height="50" />
        </StyledLink>
        <Navigation />
        <LanguangeMenu />
        {userInfo ? (
          <UserMenu userInfo={userInfo} />
        ) : (
          <Button
            color="red"
            onClick={() =>
              Auth.federatedSignIn({
                provider: "Google",
                customState: window.location.pathname + window.location.search,
              })
            }
            style={{
              fontSize: "1.5rem",
              padding: "1rem",
              marginLeft: "1rem",
              background: "#b51e36",
            }}
            icon
            labelPosition="left"
          >
            <Icon name="sign-in" />
            {t(`user.Sign In`)}
          </Button>
        )}
      </StyledHeader>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: getUserInfo(state),
});

const mapDispatchToProps = {
  setUserInfo,
  clearUserInfo,
  updateUserSession,
};

export default withRouter(
  withNamespaces("translation")(
    connect(mapStateToProps, mapDispatchToProps)(Header)
  )
);
