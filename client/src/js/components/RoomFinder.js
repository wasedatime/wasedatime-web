import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import RoomFinderNavigation from './RoomFinderNavigation';
import NishiBuildingList from '../containers/NishiBuildingList';
import ClassroomListContainer from '../containers/ClassroomListContainer';
import { Wrapper } from '../styled-components/Wrapper';

const RoomFinder = ({ match }) => {
  return (
    <Wrapper>
      <RoomFinderNavigation />
      <Switch>
        <Route exact path={`${match.url}`} component={NishiBuildingList} />
        <Route
          path={`${match.url}/:buildingName`}
          component={ClassroomListContainer}
        />
        <Route component={NishiBuildingList} />
      </Switch>
    </Wrapper>
  );
};

export default RoomFinder;

RoomFinder.propTypes = {
  match: PropTypes.object.isRequired
};
