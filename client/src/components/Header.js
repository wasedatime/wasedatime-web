import React from 'react';
import Navigation from './Navigation';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <a className="header__logo" href="/">
          <img src="/img/logo.png" alt="Wasetime logo" width="70" />
        </a>
        <Navigation />
      </header>
    );
  }
}
