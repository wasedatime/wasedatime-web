import React from 'react';

import NavLink from './NavLink';

const Navigation = () => {
  return (
    <nav className="header__nav">
      <NavLink
        link="/syllabus"
        children="Syllabus"
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
