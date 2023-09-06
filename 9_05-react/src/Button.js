import React, { Component } from 'react';

class Button extends Component{
  constructor(props){
    super(props);
  }
  render() {
    const { keyword } = this.props;
    return (
      <button onClick={() => this.props.getSearch(keyword)}>검색</button>
    )
  }
}

export default Button;