import React from 'react';

import NavLink from './NavLink';

const Navigation = () => {
  return (
    <nav className="header__nav">
      <NavLink name="TimeTable" link="/timetable" />
      <NavLink name="RoomFinder" link="/roomfinder" />
      <NavLink name="Bus" link="/bus" />
    </nav>
  );
};

export default Navigation;
