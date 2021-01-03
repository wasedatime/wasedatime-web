import logo from "../../img/logo.png";
import textLogo from "../../img/text-logo.svg";
import Navigation from "./Navigation";
import UserMenu from "./user/UserMenu";
import SignInModal from "./user/SignInModal";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import styled, { keyframes } from "styled-components";
import { Auth, Hub } from "aws-amplify";
import { connect } from "react-redux";
import { getUserInfo } from "../reducers/user";
import { setUserInfo, clearUserInfo, updateUserSession } from "../actions/user";

export const expandSideBar = () =>
  keyframes`
    from { width: 65px; }
    to { width: 210px; }
  `;

const StyledSidebar = styled("aside")`
  background: ${(props) => props.theme.grey2};
  width: 65px;
  height: 100vh;
  position: fixed;
  z-index: 4000;
  box-shadow: rgba(0, 0, 0, 0.45) 4px 0px 12px;
  &:hover {
    animation-name: ${expandSideBar};
    animation-duration: 0.5s;
    width: 210px;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 7.5px;
  border-bottom: 2px solid ${(props) => props.theme.colorPrimary};
`;

const Logo = styled("img")`
  width: 50px;
  height: 50px;
`;

const TextLogo = styled("img")`
  height: 25px;
  margin: 0.5rem;
  overflow-x: hidden;
`;

class Sidebar extends React.Component {
  state = {
    isHovered: false,
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

  signOut() {
    Auth.signOut();
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
    const { isHovered, needSignInAgain, isUserSessionExpired } = this.state;
    return (
      <React.Fragment>
        <StyledSidebar
          onMouseEnter={() => this.setState({ isHovered: true })}
          onMouseLeave={() => this.setState({ isHovered: false })}
        >
          <StyledLink to="/about">
            <Logo src={logo} alt="WasedaTime logo" width="50" height="50" />
            {isHovered && (
              <TextLogo src={textLogo} alt="WasedaTime text logo" height="50" />
            )}
          </StyledLink>
          <Navigation isHovered={isHovered} />
          <div style={{ position: "absolute", bottom: "5em" }}>
            <UserMenu
              userInfo={userInfo}
              signOut={this.signOut}
              openSignInModal={this.openSignInModal}
              isHovered={isHovered}
            />
          </div>
        </StyledSidebar>
        <SignInModal
          isModalOpen={needSignInAgain}
          isExpired={isUserSessionExpired}
          signIn={this.signIn}
          closeModal={this.closeSignInModal}
        />
      </React.Fragment>
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
    connect(mapStateToProps, mapDispatchToProps)(Sidebar)
  )
);
