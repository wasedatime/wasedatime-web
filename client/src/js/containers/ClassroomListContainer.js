import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { normalize } from 'normalizr';
import {
  buildingClassroomsSchema,
  occupiedClassroomsSchema
} from '../data/schema';
import PropTypes from 'prop-types';

import ClassroomList from '../components/ClassroomList';
import allBuildings from '../data/buildingList';
import background from '../../img/nishi_waseda_campus-sm.jpg';

const mergeClassroomsById = (
  buildingClassroomIds,
  buildingClassroomsById,
  occupiedClassroomIds,
  occupiedClassroomsById
) => {
  let mergedClassroomsById = { ...buildingClassroomsById };
  occupiedClassroomIds.forEach(id => {
    mergedClassroomsById[id] = occupiedClassroomsById[id];
  });
  return mergedClassroomsById;
};

class ClassroomListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buildingName: props.match.params.buildingName,
      isFetching: true,
      mergedClassrooms: [],
      date: null
    };
  }

  async componentDidMount() {
    const res = await axios.get(`/api/current/${this.state.buildingName}`);
    const date = res.data.date;
    const normalizedBuildingClassrooms = normalize(
      res.data.buildingClassrooms,
      buildingClassroomsSchema
    );
    const normalizedOccupiedClassrooms = normalize(
      res.data.occupiedClassrooms,
      occupiedClassroomsSchema
    );
    const mergedClassroomsById = mergeClassroomsById(
      normalizedBuildingClassrooms.result,
      normalizedBuildingClassrooms.entities.classrooms,
      normalizedOccupiedClassrooms.result,
      normalizedOccupiedClassrooms.entities.occupiedClassrooms
    );

    const mergedClassrooms = normalizedBuildingClassrooms.result.map(id => {
      return mergedClassroomsById[id];
    });

    this.setState({
      isFetching: false,
      mergedClassrooms,
      date
    });
  }

  render() {
    return (
      <ClassroomList
        buildingName={this.state.buildingName}
        backgroundUrl={background}
        classrooms={this.state.mergedClassrooms}
        date={this.state.date}
      />
    );
  }
}

export default ClassroomListContainer;

ClassroomListContainer.propTypes = {
  match: PropTypes.object.isRequired
};
