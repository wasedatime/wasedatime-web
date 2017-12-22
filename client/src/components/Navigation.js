import React from 'react';
import NavLink from './NavLink';

export default class Navigation extends React.Component {
  render() {
    return (
      <nav className="header__nav">
        <NavLink name="TimeTable" href="/timetable/" />
        <NavLink name="RoomFinder" href="/roomfinder/" />
        <NavLink name="Bus" href="/bus/" />
      </nav>
    );
  }
}
