import React from 'react';

import NavLink from './NavLink';

export default class Navigation extends React.Component {
  render() {
    return (
      <nav className="header__nav">
        <NavLink name="TimeTable" link="/timetable" />
        <NavLink name="RoomFinder" link="/roomfinder" />
        <NavLink name="Bus" link="/bus" />
      </nav>
    );
  }
}
