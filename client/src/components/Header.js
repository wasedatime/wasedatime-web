import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';
import logo from '../img/logo.png';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo__wrapper">
        <img className="header__logo" src={logo} alt="Wasetime logo" />
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
