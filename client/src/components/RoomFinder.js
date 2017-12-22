import React from 'react';
import BuildingList from './BuildingList.js';

export default class RoomFinder extends React.Component {
  render() {
    return (
      <div className="roomfinder">
        <BuildingList
          className="bldglist"
          name="Nishi-Waseda Campus Buildings"
        />
      </div>
    );
  }
}
