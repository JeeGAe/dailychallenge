import React, { Component } from 'react';

class SortBtn extends Component{
  constructor(props){
    super(props);
  }

  render() {
    console.log(this.props)
    return (
      <button className='sort-btns' onClick={this.props.priceToggleState}>가격</button>
    )
  }
}

export default SortBtn;