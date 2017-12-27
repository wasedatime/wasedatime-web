import React from 'react';

import NavLink from './NavLink';

const Navigation = () => {
  return (
    <nav className="header__nav">
      <NavLink
        link="/timetable"
        children="TimeTable"
        className="header__nav__elem"
      />
      <NavLink
        link="/roomfinder"
        children="RoomFinder"
        className="header__nav__elem"
      />
      <NavLink link="/bus" children="Bus" className="header__nav__elem" />
    </nav>
  );
};

export default Navigation;
