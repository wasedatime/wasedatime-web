import React, { useState } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import { getUserAttr, signOut } from "@bit/wasedatime.core.ts.utils.user";

type Props = {
  navItems: any;
};

const MobileNav = ({ navItems }: Props) => {
  const [userAttr, setUserAttr] = useState(null);
  const [signOutAvailable, setSignOutAvailable] = useState(false);
  const notSignedIn = !userAttr;
  if (notSignedIn) getUserAttr().then((attr) => setUserAttr(attr));

  const styledLinks = navItems.map((item) => {
    const itemName = item["name"];
    const itemPath = item["path"];
    const itemIcon = item["icon"];
    const itemOnClickFunc = item["onClickFunc"];
    const fontBase =
      !itemPath && userAttr ? (
        <img
          src={userAttr.picture}
          width="30"
          height="30"
          className="rounded-full"
          alt="Image of User account"
        />
      ) : (
        <FontAwesomeIcon
          icon={itemIcon}
          className="text-white"
          size="2x"
          transform="shrink-2"
        />
      );
    return (
      <Link
        to={itemPath}
        key={itemPath}
        onClick={(e) => {
          if (!itemPath) {
            e.preventDefault();
            userAttr ? setSignOutAvailable(true) : itemOnClickFunc();
          }
        }}
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
      className="fixed bottom-0 flex flex-row p-1 bg-black w-full"
      style={{ height: "50px", zIndex: 1000 }}
    >
      {styledLinks}
      {signOutAvailable && (
        <button
          className="absolute -top-8 right-0 bg-gray-700 rounded text-white p-2 w-1/4 focus:outline-none"
          onClick={signOut}
        >
          Sign Out
        </button>
      )}
    </nav>
  );
};

export default MobileNav;
