import React from 'react';
import Product from './Product';
import './css/Product.css'

function ProductList({ product, getProduct }){
  return (
    <div className='ProductList-container'>
      <Product product={product} getProduct={getProduct}></Product>
    </div>
  )
}

export default ProductList;