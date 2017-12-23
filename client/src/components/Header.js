import React from 'react';
import { Route, Link } from 'react-router-dom';

import Navigation from './Navigation';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link to="/" className="header__logo">
          <img src="/img/logo.png" alt="Wasetime logo" width="60px" />
        </Link>
        <Navigation />
      </header>
    );
  }
}
