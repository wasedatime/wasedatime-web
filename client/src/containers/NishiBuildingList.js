import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchNishiBldgs } from '../actions/index';
import BuildingList from '../components/BuildingList';

class NishiBuildingList extends React.Component {
  constructor(props) {
    super(props);
    this.name = 'Nishi-Waseda Campus';
    this.backgroundUrl = '../img/nishi_waseda_campus-sm.jpg';
  }

  componentDidMount() {
    this.props.fetchNishiBldgs();
  }

  render() {
    return (
      <BuildingList
        name={this.name}
        bldgNames={this.props.bldgNames}
        backgroundUrl={this.backgroundUrl}
      />
    );
  }
}

const getBldgNames = (nishiBldgIds, nishiBldgsById) => {
  if (nishiBldgIds.length !== 0) {
    return nishiBldgIds.map(id => nishiBldgsById[id]['name']);
  }
  return [];
};

const mapStateToProps = (state, ownProps) => {
  return {
    bldgNames: getBldgNames(state.nishiBldgIds, state.nishiBldgsById)
  };
};

//shorthand syntax
const mapDispatchToProps = {
  fetchNishiBldgs
};

export default connect(mapStateToProps, mapDispatchToProps)(NishiBuildingList);

NishiBuildingList.propTypes = {
  bldgNames: PropTypes.array.isRequired,
  fetchNishiBldgs: PropTypes.func.isRequired
};
