import React from 'react';
import './Modal.css'

function Modal({ modalOpen, children }){
  return (
    <div className={`Modal ${modalOpen? "open":"close"}`}>
      {children}
    </div>
  )
}

export default Modal;