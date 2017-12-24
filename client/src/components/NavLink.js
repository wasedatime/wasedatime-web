import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({ link, children, onClick }) => {
  return (
    <Link to={link} onClick={onClick} className="header__nav__elem">
      {children}
    </Link>
  );
};

export default NavLink;

NavLink.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
