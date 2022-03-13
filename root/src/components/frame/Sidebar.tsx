import React, { useContext, useState } from "react";

import textLogo from "@bit/wasedatime.core.assets.text-logo";
import SidebarWrapper from "@bit/wasedatime.core.ts.styles.sidebar-wrapper";
import { SmallLogo } from "@bit/wasedatime.core.ts.ui.logo";
import styled from "styled-components";

import { IconTextGroup } from "@app/components/block/IconTextGroup";
import { NavItemsProps } from "@app/components/frame/Nav";
import OtherLinks from "@app/components/frame/OtherLinks";
import UserMenu from "@app/components/user/UserMenu";
import LinkOutsideRouter from "@app/utils/link-outside-router";
// import { ThemeContext } from "@app/utils/theme-context";

type TextLogoWrapperProps = {
  expanded: boolean;
};

type TextLogoProps = {
  expanded: boolean;
};

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

export type SidebarProps = {
  navItems: NavItemsProps[];
  openSignInModal: () => void;
};

const Sidebar = ({ navItems, openSignInModal }: SidebarProps) => {
  // const { theme } = useContext(ThemeContext);

  const [expanded, setExpanded] = useState<boolean>(false);
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname
  );

  const expandSidebar = () => {
    if (!expanded) setExpanded(true);
  };

  const foldSidebar = () => {
    if (expanded) setExpanded(false);
  };

  return (
    <SidebarWrapper
      className="bg-light-bgSide dark:bg-dark-bgSide"
      // theme={theme}
      expanded={expanded}
      onMouseEnter={expandSidebar}
      onTouchStart={expandSidebar}
      onMouseLeave={foldSidebar}
    >
      <LinkOutsideRouter
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
      </LinkOutsideRouter>
      <div style={{ width: "100%", margin: "0px" }}>
        {navItems.map((item) => (
          <LinkOutsideRouter
            to={item.path}
            customOnClick={() => setCurrentPath(item.path)}
            key={item.name}
          >
            <IconTextGroup
              icon={item.icon}
              text={item.name}
              iconPath={item.path}
              expanded={expanded}
              currentPath={currentPath}
            />
          </LinkOutsideRouter>
        ))}
      </div>
      <div className="absolute" style={{ bottom: "100px" }}>
        <OtherLinks expanded={expanded} setCurrentPath={setCurrentPath} />
        <UserMenu
          openSignInModal={openSignInModal}
          isHovered={expanded}
          isMobileMode={false}
        />
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
