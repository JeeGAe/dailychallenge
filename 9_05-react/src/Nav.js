import React, { Component } from 'react';
import SortBtn from './SortBtn';
import Input from './Input';
import Button from './Button';
import DropMenu from './Dropmenu';

class Nav extends Component{
  constructor(props){
    super(props);

    this.state = {
      keyword : null,
      menuName : '',
      menuLoc : '',
      navShadow : false
    }
  }

  handleChange = (e) => {
    this.setState({ keyword : e.target.value })
  }

  openDropmenu = (e) => {
    const menuName = e.target.innerText;
    const menuLoc = e.target.getBoundingClientRect().left;
    console.log(menuLoc);
    this.setState({ menuName, menuLoc });
  }

  closeDropmenu = () => {
    this.setState({ menuName : '' });
  }

  componentDidMount(){
    window.addEventListener('scroll', () => {
      if(window.pageYOffset > 10){
        this.setState({ navShadow : true })
      }else{
        this.setState({ navShadow : false })
      }
    })
    
  }

  render() {
    const { priceToggle } = this.props;
    const { keyword, menuName, menuLoc, navShadow } = this.state;
    return (
      <div className='header' style={navShadow? {boxShadow: '1px 1px 5px 5px darkgray'}:{}} onMouseLeave={this.closeDropmenu}>
        <Input handleChange={this.handleChange}/>
        <Button getSearch={this.props.getSearch} keyword={keyword}></Button>
        <div className="menus" onMouseEnter={this.openDropmenu} >안내</div>
        <div className="menus" onMouseEnter={this.openDropmenu} >상품</div>
        <div className="menus" onMouseEnter={this.openDropmenu} >고객지원</div>
        <DropMenu menuName={menuName} menuLoc={menuLoc}></DropMenu>
        <SortBtn priceToggle={priceToggle} priceToggleState={this.props.priceToggleState}></SortBtn>
      </div>
    )
  }
}

export default Nav;