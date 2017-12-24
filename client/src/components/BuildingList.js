import React from 'react';
import BuildingItem from './BuildingItem';
import PropTypes from 'prop-types';

export default class BuildingList extends React.Component {
  constructor(props) {
    super(props);
    const buildings = ['51', '52', '53'];
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

BuildingItem.propTypes = {
  name: PropTypes.string.isRequired
};
