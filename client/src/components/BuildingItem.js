import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BuildingItem = ({ match, name }) => {
  return (
    <li>
      <Link to={`/roomfinder/${name}`}>
        <button className="buildingItem__button">{name}</button>
      </Link>
    </li>
  );
};

BuildingItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default BuildingItem;
