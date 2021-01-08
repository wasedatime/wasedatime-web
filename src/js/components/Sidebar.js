import logo from "../../img/logo.png";
import textLogo from "../../img/text-logo.svg";
import Navigation from "./Navigation";
import UserMenu from "./user/UserMenu";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import styled from "styled-components";

const StyledSidebar = styled("aside")`
  background: ${(props) => props.theme.grey2};
  width: 65px;
  height: 100vh;
  position: fixed;
  z-index: 400;
  box-shadow: rgba(0, 0, 0, 0.45) 4px 0px 12px;
  transition: width 0.5s;

  &:hover {
    width: 210px;
    transition: width 0.5s;
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
  opacity: ${(props) => (props.isHovered ? "1" : "0")};
  transition: opacity 0.3s;
`;

class Sidebar extends React.Component {
  state = {
    isHovered: false,
  };

  render() {
    const { userInfo, signOut, toggleSignInModal } = this.props;
    const { isHovered } = this.state;
    return (
      <React.Fragment>
        <StyledSidebar
          onMouseEnter={() => this.setState({ isHovered: true })}
          onMouseLeave={() => this.setState({ isHovered: false })}
        >
          <StyledLink to="/about">
            <Logo src={logo} alt="WasedaTime logo" width="50" height="50" />
            <TextLogo
              src={textLogo}
              alt="WasedaTime text logo"
              height="50"
              isHovered={isHovered}
            />
          </StyledLink>
          <Navigation isHovered={isHovered} />
          <div style={{ position: "absolute", bottom: "5em" }}>
            <UserMenu
              userInfo={userInfo}
              signOut={signOut}
              openSignInModal={toggleSignInModal}
              isHovered={isHovered}
            />
          </div>
        </StyledSidebar>
      </React.Fragment>
    );
  }
}

export default withRouter(withNamespaces("translation")(Sidebar));
