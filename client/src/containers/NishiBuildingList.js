import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchBuildings } from '../actions/index';
import {
  getIsFetching,
  getBuildings,
  getErrorMessage
} from '../reducers/buildings';
import BuildingList from '../components/BuildingList';

const buildings = [
  '51',
  '52',
  '53',
  '54',
  '55',
  '56',
  '57',
  '58',
  '59',
  '60',
  '61',
  '62',
  '63'
];

class NishiBuildingList extends React.Component {
  constructor(props) {
    super(props);
    this.name = 'Nishi-Waseda Campus';
    this.backgroundUrl = '../img/nishi_waseda_campus-sm.jpg';
  }

  componentDidMount() {
    this.props.fetchBuildings();
  }

  render() {
    return (
      <BuildingList
        name={this.name}
        buildings={this.props.buildings}
        backgroundUrl={this.backgroundUrl}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    buildings: getBuildings(state.buildings, buildings),
    isFetching: getIsFetching(state.buildings),
    errorMessage: getErrorMessage(state.buildings)
  };
};

const mapDispatchToProps = {
  fetchBuildings
};

export default connect(mapStateToProps, mapDispatchToProps)(NishiBuildingList);

NishiBuildingList.propTypes = {
  buildings: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  fetchBuildings: PropTypes.func.isRequired
};
