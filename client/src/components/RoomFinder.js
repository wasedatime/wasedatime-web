import React from 'react';
import { Route } from 'react-router-dom';

import NishiBuildingList from '../containers/NishiBuildingList';
import ClassroomListContainer from '../containers/ClassroomListContainer';

const RoomFinder = ({ match }) => {
  return (
    <div className="roomfinder">
      <Route exact path={`${match.url}`} component={NishiBuildingList} />
      <Route
        path={`${match.url}/:buildingName`}
        component={ClassroomListContainer}
      />
    </div>
  );
};

export default RoomFinder;
