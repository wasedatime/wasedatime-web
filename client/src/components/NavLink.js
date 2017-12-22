import React from 'react';

export default class NavLink extends React.Component {
  render() {
    return (
      <a className="header__nav__elem" href={this.props.href}>
        {this.props.name}
      </a>
    );
  }
}
