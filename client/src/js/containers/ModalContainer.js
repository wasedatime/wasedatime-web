//Credits: Adapted from the awesome tutorial by Sergio Pedercini at
//https://medium.com/@pppped/build-a-simple-modal-window-with-react-and-jss-f05041d899cc
import React from 'react';

import BusModal from '../components/BusModal';
import { InvisibleButton } from '../styled-components/Button';

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  //Avoid creating an arrow function wrapper and binds in render.
  handleToggleModal = () => {
    this.setState((prevState, props) => {
      return { showModal: !this.state.showModal };
    });
  };

  render() {
    const { linkText, text, children } = this.props;
    const { showModal } = this.state;
    //TODO remove styling from container components
    return (
      <div>
        <span>
          <InvisibleButton
            style={{
              color: '#0000FF',
              textDecoration: 'underline',
              cursor: 'pointer'
            }}
            onClick={this.handleToggleModal}
          >
            {linkText}
          </InvisibleButton>{' '}
          {text}
        </span>
        {showModal && (
          <BusModal onClose={this.handleToggleModal}>{children}</BusModal>
        )}
      </div>
    );
  }
}

export default ModalContainer;
