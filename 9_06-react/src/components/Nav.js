import React from 'react';
import './Nav.css';
import Button from './Button';

function Nav(){
  const navigate = (url) => {
    window.location.href = url;
  }

  return (
    <div className='nav-container'>
      <Button handleClick={() => navigate('https://sssssqew.github.io/dictionary/')}>이동하기</Button>
    </div>
  )
}

export default Nav;