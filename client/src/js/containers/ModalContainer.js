//Credits: Adapted from the awesome tutorial by Sergio Pedercini at
//https://medium.com/@pppped/build-a-simple-modal-window-with-react-and-jss-f05041d899cc
import React from 'react';

import Modal from '../components/Modal';

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  //Avoid creating an arrow function wrapper and binds in render.
  handleToggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const {linkText, text, children} = this.props;
    const {showModal} = this.state;
    //TODO remove styling from container components
    return (
      <div>
        <span>
          <a style={{color: '#0000FF', textDecoration: 'underline', cursor: 'pointer'}}
            onClick={this.handleToggleModal}>
          {linkText}
          </a>
          {' '}{text}
        </span>
        {showModal &&
          <Modal onClose={this.handleToggleModal}>
            {children}
          </Modal>}
      </div>
    )
  }
}

export default ModalContainer;
