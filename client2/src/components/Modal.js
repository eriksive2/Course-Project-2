// Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ show, children, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <React.Fragment>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal">
        <span className="close-button" onClick={onClose}>&times;</span>
        {children}
      </div>
    </React.Fragment>
  );
};

export default Modal;
