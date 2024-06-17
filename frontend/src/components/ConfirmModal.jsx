import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const ConfirmModal = ({ show, handleClose, handleConfirm, title, body }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          style={{ background: 'red', color: 'white' }}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          style={{ background: 'green', color: 'white' }}
          onClick={handleConfirm}
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ConfirmModal
