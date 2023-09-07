import React from 'react';
import './css/Button.css'

function Button({ children, size, color, width, handleClick, disabled, rf }){

  return (
    <button className={`Button ${size} ${color} ${width} ${disabled? 'blocked': ''}`} ref={rf} onClick={handleClick} disabled={disabled}>{children}</button>
  )
}

export default Button;

Button.defaultProps = {
  size : 'medium',
  color : 'tomato',
  disabled : false,
}