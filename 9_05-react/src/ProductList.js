import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='root'>
        <Product priceToggle={this.props.priceToggle}></Product>
      </div>
    )
  }
}

export default ProductList;