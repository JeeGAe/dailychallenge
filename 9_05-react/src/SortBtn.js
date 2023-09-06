import React, { Component } from 'react';

class SortBtn extends Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <button className='sort-btns' onClick={this.props.priceToggleState}>{this.props.priceToggle? "기본순":"가격순"}</button>
    )
  }
}

export default SortBtn;