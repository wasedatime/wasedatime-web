import React from 'react';

export default class BuildingItem extends React.Component {
  render() {
    return (
      <li>
        <a>{this.props.name}</a>
      </li>
    );
  }
}
