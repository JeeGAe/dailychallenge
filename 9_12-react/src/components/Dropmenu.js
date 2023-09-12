import React from 'react';

function Dropmenu({ dropmenus, location }){
  // props로 받은 메뉴 위치 값으로 드랍메뉴 위치 조정ㄴ

  return (
    <div className='dropmenu' style={{left : `${location}px`}}>
      {dropmenus.map(menu => <div key={menu}>{menu}</div>)}
    </div>
  )
}

export default Dropmenu;