import React, { Component } from 'react';

class Product extends Component{
  constructor(props){
    super(props);

    this.state = {
      loading : true,
      products : []
    }
  }

  componentDidMount(){
    const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
    fetch(API_URL)
    .catch(e => console.log(e))
    .then(res => res.json())
    .then(res => {
      this.setState({ loading : false, products : res });
    })
  }

  render() {
    const { loading, products } = this.state;
    console.log('로딩:',loading)
    if(loading){
      return (
        <h1>로딩중 입니다...</h1>
      )
    }
    if(!this.props.priceToggle){
      console.log('일반')
      return (
        <>
          {products.map(product => {
            return(
                <div key={product.id} className="product">
                <div className="product-img">
                  <img src={product.image_link} alt={product.name}/>
                </div>
                <div className='product-name'>{product.name}({product.price})</div>
                <div className='product-description'>{product.description}</div>
              </div>
            )
          })}
        </>
      )
    }else{
      console.log('가격')
      let priceProduct = [...products];
      return (
        <>
          {priceProduct.sort((a, b) => a.price - b.price).map(product => {
          return(
              <div key={product.id} className="product">
              <div className="product-img">
                <img src={product.image_link} alt={product.name}/>
              </div>
              <div className='product-name'>{product.name}({product.price})</div>
              <div className='product-description'>{product.description}</div>
            </div>
          )
          })}
        </>
      )
      
    }
  }
}

export default Product;