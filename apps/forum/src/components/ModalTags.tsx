import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const ModalTags: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button type="button" onClick={handleShow}>
        Select Tags
      </button>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Select Your Tags</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tags here.</Modal.Body>
        <Modal.Footer>
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalTags;
