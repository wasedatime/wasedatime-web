import React from 'react';
import Navigation from './Navigation';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div>
          <a href="/">
            <img src="/img/logo.png" width="70" />
          </a>
          <Navigation />
        </div>
      </header>
    );
  }
}
