import React, { Component } from 'react';
import SuccessFetch from './SuccessFetch';

class Product extends Component{
  constructor(props){
    super(props);

    this.state = {
      loading : true,
    }

  }


  componentDidMount(){
    const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
    fetch(API_URL)
    .catch(e => console.log(e))
    .then(res => res.json())
    .then(res => {
      this.props.getProducts(res);
      this.setState({ loading : false });
    })
  }

  render() {
    const { loading } = this.state;
    // 상품 패치 전 로딩화면
    if(loading){
      return (
        <h1>로딩중 입니다...</h1>
      )
    }
    // 가격 순 토글이 true 일때 가격순으로 정렬
    // let priceProduct = [...this.props.products];
    // if(this.props.priceToggle){
    //   priceProduct.sort((a, b) => a.price - b.price)
    // }
    // // 상품 카드 랜더링
    // return (
    //   <>
    //     {priceProduct.map(product => {
    //       return(
    //           <div key={product.id} className="product">
    //           <div className="product-img">
    //             <img src={product.image_link} alt={product.name}/>
    //           </div>
    //           <div className='product-name'>{product.name}({product.price})</div>
    //           <div className='product-description'>{product.description}</div>
    //         </div>
    //       )
    //     })}
    //   </>
    // )
    if(!this.props.priceToggle){
      console.log('일반')
      // console.log(this.props.products)
      return (
        <>
          {this.props.products.map(product => {
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
          {!loading && <SuccessFetch></SuccessFetch>}
        </>
      )
    }else{
      console.log('가격')
      let priceProduct = [...this.props.products];
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