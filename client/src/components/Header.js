import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src="/img/logo.png" alt="Wasetime logo" width="60px" />
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
