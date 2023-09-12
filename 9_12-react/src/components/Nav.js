import React, { useState } from 'react';
import Dropmenu from './Dropmenu';
import menus from '../asset/dropmenuData';
import './css/Nav.css';
import Button from './Button';

// 메뉴의 이름만 데이터에서 추출
let menuNames = [];
for(let menu in menus){
  menuNames.push(`${menu}`);
}

function Nav({ priceToggle, handlePriceToggle, getSearch, shadowToggle }){
  // 메뉴의 이름과 위치를 state 값으로 설정
  const [dropmenu, setDropmenu] = useState({
    name : '',
    locX : ''
  });
  // 메뉴에 마우스를 올렸을때 이름과 그 위치를 state값에 저장
  const handlerEnter = (e) => {
    const name = e.target.innerText;
    const locX = e.target.getBoundingClientRect().x
    setDropmenu({ name , locX });
  }
  // Nav 컴포넌트에서 마우스를 벗어날때 dropmenu state 초기화
  const handleLeave = () => {
    setDropmenu({ name : '', locX : '' });
  }

  const [keyword, setKeyword] = useState('');

  const handleOnChange = (e) => {
    setKeyword(e.target.value)
  }

  return (
    <div className='header' onMouseLeave={handleLeave} style={shadowToggle?{boxShadow : '1px 1px 5px 5px darkgray' }:{}}>
      <input type='text' value={keyword} onChange={handleOnChange}/><Button handleClick={() => getSearch(keyword)}>검색</Button>
      {menuNames.map(menu => <div className='menus' key={menu} onMouseEnter={handlerEnter}>{menu}</div>)}
      {dropmenu.name? <Dropmenu dropmenus={menus[dropmenu.name]} location={dropmenu.locX}></Dropmenu> : <></>}
      <Button handleClick={handlePriceToggle}>{priceToggle ? '가격순' : '기본순'}</Button>
    </div>
  )
}

export default Nav;