//Credits: Adapted from the awesome tutorial by Sergio Pedercini at
//https://medium.com/@pppped/build-a-simple-modal-window-with-react-and-jss-f05041d899cc
import React from 'react';
import styled, {keyframes} from 'styled-components';

import { media } from '../utils/styledComponents';
import {Overlay} from '../styled-components/Overlay';

const show = keyframes`
  0% {
    display: none;
    opacity: 0;
  }
  1% {
    display: flex;
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const ExtendedOverlay = Overlay.extend`
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 1rem;
  z-index: 9999;
  opacity: 1;
  overflow-x: hidden;
  ${'' /* overflow-y: auto; */}
  animation: ${show} .5s ease;
`

const Window = styled('div')`
  width: 50vw;
  padding: 10px 25px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  ${media.phone`width: 80vw;`};
`

const Content = styled('div')`
  display: flex;
  flex-direction: column;
`

const CloseLink = styled('a')`
  position: relative;
  top: -5px;
  right: -20px;
  align-self: flex-end;
  margin-bottom: -35px;
  cursor: pointer;
`


class Modal extends React.Component {
  // Init of the component before it is mounted.
  constructor(props) {
    super(props);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.setModalWindow = element => {
      this.modalWindow = element;
    }
  }

  // Add listeners immediately after the component is mounted.
  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick, false);
    document.body.style.overflow = 'hidden';
  }

  // Remove listeners immediately before a component is unmounted and destroyed.
  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, false);
    document.body.style.overflow = '';
  }

  // Handle the mouse click on browser window.
  handleOutsideClick(e) {
    const { onClose } = this.props;

    if (this.modalWindow != null) {
      if (!this.modalWindow.contains(e.target)) {
        onClose();
        document.removeEventListener('click', this.handleOutsideClick, false);
      }
    }
  }

  render() {
    const {onClose, children} = this.props;
    return(
      <ExtendedOverlay>
        <Window innerRef={this.setModalWindow}>
          <Content>
              <CloseLink onClick={onClose}>
                <i className="fas fa-times-circle fa-2x"></i>
              </CloseLink>
            {children}
          </Content>
        </Window>
      </ExtendedOverlay>
    )
  }
}



export default Modal;
