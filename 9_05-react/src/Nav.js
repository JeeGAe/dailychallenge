import React, { Component } from 'react';
import SortBtn from './SortBtn';
import Input from './Input';
import Button from './Button';

class Nav extends Component{
  constructor(props){
    super(props);

    this.state = {
      keyword : null
    }
  }

  handleChange = (e) => {
    this.setState({ keyword : e.target.value })
  }

  render() {
    const { priceToggle } = this.props;
    const { keyword } = this.state;
    return (
      <div className='header'>
        <Input handleChange={this.handleChange}/>
        <Button getSearch={this.props.getSearch} keyword={keyword}></Button>
        <SortBtn priceToggle={priceToggle} priceToggleState={this.props.priceToggleState}></SortBtn>
      </div>
    )
  }
}

export default Nav;