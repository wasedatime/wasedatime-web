import React from 'react';
import BuildingItem from './BuildingItem';

export default class BuildingList extends React.Component {
  constructor(props) {
    super(props);
    const buildings = [51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 66];
    const listItems = buildings.map(building => (
      <BuildingItem key={building.toString()} name={building} />
    ));
    this.state = {
      //TODO MongoDB routing
      buildings: buildings,
      listItems: listItems
    };
  }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <ul>{this.state.listItems}</ul>
      </div>
    );
  }
}
