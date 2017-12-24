import React from 'react';

import NavRoomFinderLink from '../containers/NavRoomFinderLink';

const Navigation = () => {
  return (
    <nav className="header__nav">
      <NavRoomFinderLink link="/roomfinder" children="RoomFinder" />
    </nav>
  );
};

export default Navigation;
