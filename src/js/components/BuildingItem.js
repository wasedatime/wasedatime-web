import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import {Button} from "../styled-components/Button";

const BuildingItem = ({ name }) => {
  return (
    <li>
      <Link to={`/roomfinder/${name}`}>
        <Button>{name}</Button>
      </Link>
    </li>
  );
};

BuildingItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BuildingItem;
