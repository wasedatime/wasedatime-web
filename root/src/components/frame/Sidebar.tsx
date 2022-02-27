import React, { useState } from "react";

import textLogo from "@bit/wasedatime.core.assets.text-logo";
import { normalTheme } from "@bit/wasedatime.core.ts.constants.theme";
import SidebarWrapper from "@bit/wasedatime.core.ts.styles.sidebar-wrapper";
import { SmallLogo } from "@bit/wasedatime.core.ts.ui.logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";
import styled, { ThemeProvider } from "styled-components";

import OtherLinks from "@app/components/frame/OtherLinks";
import UserMenu from "@app/components/user/UserMenu";

type TextLogoWrapperProps = {
  expanded: boolean;
}

type TextLogoProps = {
  expanded: boolean;
}

type NavItemBlockProps = {
  expanded: boolean;
  isCurrentPath: boolean;
  theme: {
    [colorLabel: string]: string;
  };
}

type NavItemTextProps = {
  expanded: boolean;
}

const TextLogoWrapper = styled.div<TextLogoWrapperProps>`
  ${(props) => props.expanded && "flex: 0 0 130px;"}
`;

const TextLogo = styled.img<TextLogoProps>`
  height: 25px;
  margin: 0 0 0 10px !important;
  overflow-x: hidden;
  width: ${(props) => (props.expanded ? "130px" : "0px")};
  opacity: ${(props) => (props.expanded ? "1" : "0")};
  transition: ${(props) =>
      props.expanded ? "opacity 0.5s ease-out 0.1s" : "opacity 0.3s"},
    width 0.3s ${(props) => !props.expanded && "0.2s"};
  display: inline-block;
`;

const NavItemBlock = styled.div<NavItemBlockProps>`
  display: flex;
  flex-direction: row;
  /* color: ${(props) =>
    props.isCurrentPath ? props.theme.colorPrimary : "#fff"}; */
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

const NavItemText = styled.span<NavItemTextProps>`
  overflow: hidden;
  margin: 0px;
  margin-left: 10px;
  text-align: left;
  /* color: #fff; */
  line-height: 2;
  height: 40px;
  opacity: ${(props) => (props.expanded ? "1" : "0")};
  width: ${(props) => (props.expanded ? "120px" : "0px")};
  transition: opacity 0.3s ease-out, width 0.5s;
`;

type Props = {
  navItems: {
    name: string;
    path: string;
    icon: any;
  }[];
  openSignInModal: () => void;
};

const Sidebar = ({ navItems, openSignInModal }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const expandSidebar = () => {
    if (!expanded) setExpanded(true);
  };

  const foldSidebar = () => {
    if (expanded) setExpanded(false);
  };

  return (
    <ThemeProvider theme={normalTheme}>
      <SidebarWrapper
        expanded={expanded}
        onMouseEnter={expandSidebar}
        onTouchStart={expandSidebar}
        onMouseLeave={foldSidebar}
      >
        <Link
          to="/home"
          className="flex flex-row items-center"
          style={{
            height: "67px",
            borderBottom: "2px solid #b51e36",
            padding: "8px",
          }}
        >
          <div style={{ flex: "0 0 50px", textAlign: "center" }}>
            <SmallLogo />
          </div>
          <TextLogoWrapper expanded={expanded}>
            <TextLogo
              src={textLogo}
              alt="WasedaTime text logo"
              width="130"
              height="50"
              expanded={expanded}
            />
          </TextLogoWrapper>
        </Link>
        <div style={{ width: "100%", margin: "0px" }}>
          {navItems.map((item) => (
            <Link
              to={item.path}
              key={item.name}
              onClick={() => setCurrentPath(item.path)}
              expanded={expanded ? 1 : 0}
            >
              <NavItemBlock
                className="group text-white dark:text-dark-text1"
                expanded={expanded}
                isCurrentPath={item.path === currentPath}
              >
                <FontAwesomeIcon
                  className="group-hover:text-primaryDarker dark:group-hover:text-primaryDarker"
                  icon={item.icon}
                  size="2x"
                  transform="shrink-2"
                />
                <NavItemText
                  className="group-hover:text-primaryDarker dark:group-hover:text-primaryDarker"
                  expanded={expanded}
                >
                  {item.name}
                </NavItemText>
              </NavItemBlock>
            </Link>
          ))}
        </div>
        <div className="absolute" style={{ bottom: "100px" }}>
          <OtherLinks expanded={expanded} />
          <UserMenu
            openSignInModal={openSignInModal}
            isHovered={expanded}
            isMobileMode={false}
          />
        </div>
      </SidebarWrapper>
    </ThemeProvider>
  );
};

export default Sidebar;
