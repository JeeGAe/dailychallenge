import React, { Component } from 'react';
import dropmenuData from './dropmenuData';

class Dropmenu extends Component{
  constructor(props){
    super(props);
    this.dropmenus = dropmenuData[`${this.props.menuName}`] || [];
  }
  

  render() {
    console.log(this.props.menuName)
    console.log(this.dropmenus)
    console.log(dropmenuData[`${this.props.menuName}`])
    const style ={
      left : this.props.menuLoc
    }
    return (
      <>
        <div className={`dropmenu ${this.props.menuName? 'open':''}`} style={style}>{ dropmenuData[`${this.props.menuName}`] && dropmenuData[`${this.props.menuName}`].map((menu, id) => {
          return <div key={id}>{menu}</div>
        })}</div>
        
      </>
    )
  }
}

export default Dropmenu;