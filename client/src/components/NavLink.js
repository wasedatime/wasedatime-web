import React from 'react';

export default class NavLink extends React.Component {
  render() {
    return <a href={this.props.href}>{this.props.name}</a>;
  }
}
