import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled('button')`
  padding: 12px;
  margin: 10px 0;
  width: 160px;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  border-bottom: none;
  background-color: #fff;
  box-shadow: 0 5px #999;
  font-size: 1.7rem;
  &:hover {
    background-color: #ccc;
  }
  &:active {
    background-color: #ccc;
    box-shadow: 0 5px #666;
    transform: translateY(3px);
  }
`;

const BuildingItem = ({ name }) => {
  return (
    <li>
      <Link to={`/roomfinder/${name}`}>
        <StyledButton>{name}</StyledButton>
      </Link>
    </li>
  );
};

BuildingItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default BuildingItem;
