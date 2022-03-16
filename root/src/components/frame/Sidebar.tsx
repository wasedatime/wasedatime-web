import React, { useState } from "react";

import textLogo from "@bit/wasedatime.core.assets.text-logo";
import { SmallLogo } from "@bit/wasedatime.core.ts.ui.logo";
import styled from "styled-components";

import { IconTextGroup } from "@app/components/block/IconTextGroup";
import { NavItemsProps } from "@app/components/frame/Nav";
import OtherLinks from "@app/components/frame/OtherLinks";
import UserMenu from "@app/components/user/UserMenu";
import LinkOutsideRouter from "@app/utils/link-outside-router";

type TextLogoWrapperProps = {
  expanded: boolean;
};

type TextLogoProps = {
  expanded: boolean;
};

interface SideWrapperProps {
  expanded: boolean;
}

const SidebarWrapper = styled.aside<SideWrapperProps>`
  position: relative;
  width: 65px;
  height: 100%;
  position: fixed;
  z-index: 400;
  box-shadow: rgba(0, 0, 0, 0.45) 4px 0px 12px;
  transition: width 0.5s;
  ${(props) => props.expanded && "width: 210px; transition: width 0.5s;"};
`;

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
