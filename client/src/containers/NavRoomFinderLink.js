import { connect } from 'react-redux';

import { fetchNishiBldgs } from '../actions/index';
import NavLink from '../components/NavLink';

//Need to pass down ownProps.link as props to children
const mapStateToProps = (state, ownProps) => {
  return { chidren: ownProps.children, link: ownProps.link };
};

//Need to pass down onClick() callback as props to children
const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(fetchNishiBldgs());
    }
  };
};

const NavRoomFinderLink = connect(mapStateToProps, mapDispatchToProps)(NavLink);

export default NavRoomFinderLink;
