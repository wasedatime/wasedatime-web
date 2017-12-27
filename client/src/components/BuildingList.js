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
        <div className="buildingList__title__wrapper">
          <h3 className="buildingList__title">{props.name}</h3>
        </div>
        <div className="buildingList__wrapper">
          <ul className="buildingList">{listItems}</ul>
        </div>
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
