import logo from "../../img/logo.png";
import textLogo from "../../img/text-logo.svg";
import Navigation from "./Navigation";
import UserMenu from "./user/UserMenu";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

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

const Footer = styled("div")`
  width: 100%;
  position: absolute;
  bottom: 70px;
  align-items: center;
  text-align: center;
`;

const OtherLinks = styled("div")`
  ${(props) => (props.isHovered ? "width: 210px;" : "width: 100%;")}
  overflow-x: hidden;
  padding: 0px;
  margin-bottom: 3em;
  font-size: 1rem;
  color: ${(props) => props.theme.grey7};
  a {
    color: ${(props) => props.theme.grey7};
  }
  opacity: ${(props) => (props.isHovered ? "1" : "0")};
  transition: ${(props) =>
    props.isHovered
      ? "opacity 0.4s ease 0.2s"
      : "opacity 0.3s ease, width 0.3s ease-out 0.2s"};
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
      <StyledSidebar
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
      >
        <div style={{ position: "relative", height: "100%" }}>
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
          <Footer>
            <OtherLinks isHovered={isHovered}>
              <a href="/privacy-policy">Privacy Policy</a>
              <br />
              <a
                href="https://github.com/wasedatime/wasedatime-web"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  transform="shrink-2"
                />
              </a>
              <a
                href="https://twitter.com/WasedaTime"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="2x"
                  transform="shrink-2"
                />
              </a>
              <a
                href="https://www.facebook.com/wasedatime"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2x"
                  transform="shrink-2"
                />
              </a>
              <a
                href="https://www.instagram.com/wasedatime/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  transform="shrink-2"
                />
              </a>
              <br />
              Copyright © 2021 WasedaTime
            </OtherLinks>
            <UserMenu
              userInfo={userInfo}
              signOut={signOut}
              openSignInModal={toggleSignInModal}
              isHovered={isHovered}
            />
          </Footer>
        </div>
      </StyledSidebar>
    );
  }
}

export default withRouter(withNamespaces("translation")(Sidebar));
