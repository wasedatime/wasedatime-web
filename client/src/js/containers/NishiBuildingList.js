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
import nishiBuildings from '../data/buildingList';
import background from '../../img/nishi_waseda_campus-sm.jpg';

class NishiBuildingList extends React.Component {
  constructor(props) {
    super(props);
    this.name = 'Nishi-Waseda Campus';
    this.background = background;
  }

  componentDidMount() {
    this.props.fetchBuildings();
  }

  render() {
    return (
      <BuildingList
        name={this.name}
        buildings={this.props.buildings}
        background={this.background}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: getIsFetching(state.buildings),
    buildings: getBuildings(state.buildings, nishiBuildings),
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
