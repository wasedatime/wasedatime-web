import React from 'react';
import NavLink from './NavLink';

export default class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <NavLink name="TimeTable" href="/" />
        <NavLink name="RoomFinder" href="/roomfinder/" />
        <NavLink name="Bus" href="/" />
      </nav>
    );
  }
}
