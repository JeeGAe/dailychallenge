import React from 'react';

function Input({size, color, handleChange, disabled, label, placeholder}){
  console.log(size)
  return (
    <label className={`${size} ${color}`}>{label}<input type='text' className={`${size} ${color}`} onChange={handleChange} disabled={disabled} placeholder={placeholder}/></label>
  )
}

export default Input;

Input.defaultProps = {
  size : 'medium',
  color : 'tomato',
}