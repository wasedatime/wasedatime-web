import React from 'react';
import { Route, Link } from 'react-router-dom';

export default class NavLink extends React.Component {
  render() {
    return (
      <Link to={this.props.link} className="header__nav__elem">
        {this.props.name}
      </Link>
    );
  }
}
