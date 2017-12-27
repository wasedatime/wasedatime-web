import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({ link, children, className }) => {
  return (
    <Link to={link} className={className}>
      {children}
    </Link>
  );
};

export default NavLink;

NavLink.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};
