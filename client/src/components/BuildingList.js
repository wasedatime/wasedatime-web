import React from 'react';

import BuildingItem from '../components/BuildingItem';
import PropTypes from 'prop-types';

const BuildingList = props => {
  if (props.bldgNames !== 0) {
    const listItems = props.bldgNames.map(bldgName => (
      <BuildingItem key={bldgName} name={bldgName} />
    ));
    return (
      <div>
        <h3>{props.name}</h3>
        <ul>{listItems}</ul>
      </div>
    );
  } else {
    return <div />;
  }
};

export default BuildingList;

BuildingList.propTypes = {
  name: PropTypes.string.isRequired,
  bldgNames: PropTypes.array.isRequired
};
