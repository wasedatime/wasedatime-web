import React from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({ link, name }) => {
  return (
    <Link to={link} className="header__nav__elem">
      {name}
    </Link>
  );
};

export default NavLink;

NavLink.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
