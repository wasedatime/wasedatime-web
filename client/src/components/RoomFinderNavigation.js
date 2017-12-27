import React from 'react';

import NavLink from './NavLink';

const RoomFinderNavigation = () => {
  return (
    <nav className="roomfinder__nav">
      {/* <div className="comingsoon">Coming soon</div> */}
      <NavLink
        link="/roomfinder#mainCampus"
        children="Main Campus"
        className="roomfinder__nav__elem"
      />
      <NavLink
        link="/roomfinder#nishiWasedaCampus"
        children="Nishi Waseda Campus"
        className="roomfinder__nav__elem"
      />
      {/* <div className="comingsoon">Coming soon</div> */}
      <NavLink
        link="/roomfinder#toyamaCampus"
        children="Toyama Campus"
        className="roomfinder__nav__elem"
      />
    </nav>
  );
};

export default RoomFinderNavigation;
