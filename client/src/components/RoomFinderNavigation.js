import React from 'react';

import NavLink from './NavLink';

const RoomFinderNavigation = () => {
  return (
    <div>
      <nav className="roomfinder__nav">
        <img
          className="roomfinder__logo"
          src="/img/campus.png"
          alt="Campus logo"
        />
        <NavLink
          link="/roomfinder#mainCampus"
          children="Main"
          className="roomfinder__nav__elem"
        />
        <NavLink
          link="/roomfinder#nishiWasedaCampus"
          children="Nishi"
          className="roomfinder__nav__elem"
        />
        <NavLink
          link="/roomfinder#toyamaCampus"
          children="Toyama"
          className="roomfinder__nav__elem"
        />
      </nav>
      <div className="roomfinder__comingsoon__main">Coming Soon</div>
      <div className="roomfinder__comingsoon__toyama">Coming Soon</div>
    </div>
  );
};

export default RoomFinderNavigation;
