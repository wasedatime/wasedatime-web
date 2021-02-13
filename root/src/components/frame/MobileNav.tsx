import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";

type Props = {
  navItems: any;
};

const MobileNav = ({ navItems }: Props) => {
  const styledLinks = navItems.map((item) => {
    const itemName = item["name"];
    const itemPath = item["path"];
    const itemIcon = item["icon"];
    const fontBase = (
      <FontAwesomeIcon icon={itemIcon} className="text-white" size="2x" />
    );
    return (
      <Link
        to={itemPath}
        key={itemPath}
        onClick={(e) => !itemPath && e.preventDefault()}
        className="flex-1 text-center"
      >
        <button className="focus:outline-none">
          {fontBase}
          <br />
          <span className="text-white">{itemName}</span>
        </button>
      </Link>
    );
  });

  return (
    <nav
      className="fixed bottom-0 flex flex-row p-4 bg-black w-full"
      style={{ height: "67px", zIndex: 1000 }}
    >
      {styledLinks}
    </nav>
  );
};

export default MobileNav;
