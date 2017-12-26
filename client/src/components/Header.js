import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo__wrapper">
        <img className="header__logo" src="/img/logo.png" alt="Wasetime logo" />
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
