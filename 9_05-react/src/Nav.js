import React, { Component } from 'react';
import SortBtn from './SortBtn';

class Nav extends Component{
  constructor(props){
    super(props);
  }

  render() {
    const { priceToggle } = this.props;
    console.log(priceToggle);
    return (
      <div className='header'><SortBtn priceToggle={priceToggle} priceToggleState={this.props.priceToggleState}></SortBtn></div>
    )
  }
}

export default Nav;