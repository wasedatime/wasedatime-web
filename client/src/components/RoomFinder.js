import React from 'react';
import NishiBuildingList from '../containers/NishiBuildingList';

export default class RoomFinder extends React.Component {
  render() {
    return (
      <div className="roomfinder">
        <NishiBuildingList />
      </div>
    );
  }
}
