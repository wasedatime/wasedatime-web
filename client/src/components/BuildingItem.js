import React from 'react';
import PropTypes from 'prop-types';

const BuildingItem = ({ name }) => {
  return (
    <li>
      <a>{name}</a>
    </li>
  );
};

BuildingItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default BuildingItem;
