import React, { useState } from "react";
import { Link } from "@reach/router";
import { Menu } from "semantic-ui-react";
import styled, { ThemeProvider } from "styled-components";
import { normalTheme } from "@bit/wasedatime.core.js.constants.theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarWrapper from "@bit/wasedatime.core.js.styles.sidebar-wrapper";
import { SmallLogo } from "@bit/wasedatime.core.js.ui.logo";
import textLogo from "@bit/wasedatime.core.assets.text-logo";

const LogoWrapper = styled.a`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 7.5px;
  border-bottom: 2px solid ${(props) => props.theme.colorPrimary};
`;

const TextLogo = styled.img`
  height: 25px;
  margin: 0.5rem;
  overflow-x: hidden;
  opacity: ${(props) => (props.expanded ? "1" : "0")};
  transition: opacity 0.3s;
`;

const NavItem = styled(Menu.Item)`
  padding: 0px;
  overflow-x: hidden;
`;

const NavItemBlock = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  font-size: 18px;
  font-weight: 100;
  padding: 1vh 0px;
  width: 100%;
  text-align: center;
  padding-left: ${(props) => (props.expanded ? "40px" : "12px")};
  svg {
    width: 40px !important;
    height: 40px;
    text-align: center;
  }
  transition: padding-left 0.5s;
  &:hover {
    color: ${(props) => props.theme.colorPrimary};
  }
`;

const NavItemText = styled.span`
  overflow-x: hidden;
  margin-left: 1rem;
  text-align: left;
  color: #fff;
  margin: 0px;
  margin-left: 1rem;
  line-height: 2;
  height: 40px;
  opacity: ${(props) => (props.expanded ? "1" : "0")};
  width: ${(props) => (props.expanded ? "120px" : "0px")};
  transition: opacity 0.3s, width 0.5s;
`;

const Sidebar = ({ navItems }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <ThemeProvider theme={normalTheme}>
      <SidebarWrapper
        onMouseEnter={() => setExpanded(true)}
        onTouchStart={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <LogoWrapper>
          <SmallLogo />
          <TextLogo
            src={textLogo}
            alt="WasedaTime text logo"
            width="150"
            height="50"
            expanded={expanded}
          />
        </LogoWrapper>
        <Menu text vertical style={{ width: "100%", margin: "0px" }}>
          {navItems.map((item) => (
            <NavItem
              as={Link}
              to={item.path}
              key={item.name}
              onClick={() => {}}
              expanded={expanded ? 1 : 0}
            >
              <NavItemBlock expanded={expanded ? 1 : 0}>
                <FontAwesomeIcon
                  icon={item.icon}
                  size="2x"
                  transform="shrink-2"
                />
                <NavItemText expanded={expanded ? 1 : 0}>
                  {item.name}
                </NavItemText>
              </NavItemBlock>
            </NavItem>
          ))}
        </Menu>
      </SidebarWrapper>
    </ThemeProvider>
  );
};

export default Sidebar;
