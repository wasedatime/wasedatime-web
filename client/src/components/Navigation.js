import React from 'react';

import NavLink from './NavLink';

const Navigation = () => {
  return (
    <nav className="header__nav">
      <NavLink link="/timetable" children="TimeTable" />
      <NavLink link="/roomfinder" children="RoomFinder" />
      <NavLink link="/bus" children="Bus" />
    </nav>
  );
};

export default Navigation;
