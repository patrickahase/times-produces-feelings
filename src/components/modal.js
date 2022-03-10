import React from 'react';

export const Modal = (props) => {
  return (
    <div id="info-modal-wrapper">
      <div id="info-modal">
        info modal
        <button id="info-modal-close" onClick={props.closeModal}>&times;</button>
      </div>
    </div>
  )
};