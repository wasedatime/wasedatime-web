import React from "react";
import { withRouter } from "react-router-dom";
import { Auth, Hub } from "aws-amplify";
import { connect } from "react-redux";
import { getUserInfo } from "../reducers/user";
import { setUserInfo, clearUserInfo, updateUserSession } from "../actions/user";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Navigation from "./Navigation";
import LanguangeMenu from "./LanguageMenu";
import UserMenu from "./user/UserMenu";
import SignInModal from "./user/SignInModal";
import SignInButton from "./user/SignInButton";
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
    needSignInAgain: false,
    isUserSessionExpired: false,
  };

  timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  signIn() {
    Auth.federatedSignIn({
      provider: "Google",
      customState: window.location.pathname + window.location.search,
    });
  }

  signOut(dispatchAfterSignOut) {
    Auth.signOut().then(() => {
      dispatchAfterSignOut();
    });
  }

  openSignInModal = () => {
    this.setState({ needSignInAgain: true });
  };

  closeSignInModal = () => {
    this.setState({ needSignInAgain: false });
  };

  letUserSignInAfterExpired = () => {
    this.setState({ isUserSessionExpired: true });
    this.props.clearUserInfo();
    this.openSignInModal();
  };

  async componentDidMount() {
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

    await this.timeout(3600000);
    this.letUserSignInAfterExpired();
  }

  render() {
    const { userInfo } = this.props;
    return (
      <StyledHeader>
        <StyledLink to="/about">
          <Logo src={logo} alt="WasedaTime logo" width="50" height="50" />
        </StyledLink>
        <Navigation />
        <LanguangeMenu />
        {userInfo ? (
          <UserMenu userInfo={userInfo} signOut={this.signOut} />
        ) : (
          <SignInButton onClickFunc={this.openSignInModal} inModal={false} />
        )}
        <SignInModal
          isModalOpen={this.state.needSignInAgain}
          isExpired={this.state.isUserSessionExpired}
          signIn={this.signIn}
          closeModal={this.closeSignInModal}
        />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
