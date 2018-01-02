import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({ link, children }) => {
  return <Link to={link}>{children}</Link>;
};

export default NavLink;

NavLink.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};
