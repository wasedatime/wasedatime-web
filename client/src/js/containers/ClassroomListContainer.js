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
import FetchError from '../components/FetchError';
import allBuildings from '../data/buildingList';
import background from '../../img/nishi_waseda_campus-sm.jpg';

class ClassroomListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buildingName: props.match.params.buildingName,
      isFetching: true,
      mergedClassrooms: [],
      date: null,
      errorMessage: null
    };
  }

  mergeClassroomsById(
    buildingClassroomIds,
    buildingClassroomsById,
    occupiedClassroomIds,
    occupiedClassroomsById
  ) {
    let mergedClassroomsById = { ...buildingClassroomsById };
    occupiedClassroomIds.forEach(id => {
      mergedClassroomsById[id] = occupiedClassroomsById[id];
    });
    return mergedClassroomsById;
  }

  async fetchData() {
    let res;
    try {
      res = await axios.get(`/api/current/${this.state.buildingName}`);
    } catch (err) {
      this.setState({
        isFetching: false,
        errorMessage: err.message
      });
    }
    if (res) {
      const date = res.data.date;
      const normalizedBuildingClassrooms = normalize(
        res.data.buildingClassrooms,
        buildingClassroomsSchema
      );
      const normalizedOccupiedClassrooms = normalize(
        res.data.occupiedClassrooms,
        occupiedClassroomsSchema
      );
      const mergedClassroomsById = this.mergeClassroomsById(
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
        date,
        mergedClassrooms
      });
    }
  }

  //Avoid creating an arrow function wrapper and binds in render.
  handleRetry = async e => {
    e.preventDefault();
    this.setState({
      isFetching: true,
      errorMessage: null
    });
    await this.fetchData();
  };

  async componentDidMount() {
    await this.fetchData();
  }

  render() {
    const hasErrorMessage = this.state.errorMessage ? true : false;
    if (hasErrorMessage) {
      return (
        <FetchError
          errorMessage={this.state.errorMessage}
          onRetry={this.handleRetry}
        />
      );
    }
    const isFetching = this.state.isFetching;
    const isMergedClassroomsEmpty =
      this.state.mergedClassrooms.length === 0 ? true : false;
    if (!isFetching && isMergedClassroomsEmpty) {
      return <Redirect from={this.props.match.url} to="/roomfinder" />;
    } else {
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
}

export default ClassroomListContainer;

ClassroomListContainer.propTypes = {
  match: PropTypes.object.isRequired
};
