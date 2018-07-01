import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

// import RoomFinderNavigation from './RoomFinderNavigation';
import UnderConstruction from './UnderConstruction';
// import NishiBuildingList from '../containers/NishiBuildingList';
// import ClassroomListContainer from '../containers/ClassroomListContainer';
import { Wrapper } from '../styled-components/Wrapper';

const RoomFinder = ({ match }) => {
  return (
    <Wrapper>
      <Helmet>
        <title>WaseTime - Classroom Usage</title>
        <meta name="description" content="Classroom Usage Checking at Waseda University." />
        <meta property="og:title" content="WaseTime - Classroom Usage" />
        <meta property="og:description" content="Classroom Usage Checking at Waseda University." />
        <meta property="og:site_name" content="WaseTime - Classroom Usage" />
      </Helmet>
      {/* <RoomFinderNavigation /> */}
      <Switch>
        {/* <Route exact path={`${match.url}`} component={NishiBuildingList} />
        <Route
          path={`${match.url}/:buildingName`}
          component={ClassroomListContainer}
        /> */}
        <Route component={UnderConstruction} />
      </Switch>
    </Wrapper>
  );
};

export default RoomFinder;

RoomFinder.propTypes = {
  match: PropTypes.object.isRequired
};
