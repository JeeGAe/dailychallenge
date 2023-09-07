import React from 'react';
import './css/Modal.css';

function Modal({ open, children }){
  return <div className={`Modal ${open? "open":"close"}`}>{children}</div>
}

export default Modal;

Modal.defualtProps = {
  open : false,
}