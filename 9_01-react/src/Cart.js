import React, { Component } from 'react';

class Cart extends Component{
  state = {
    cart : []
  }

  addProduct = () => {
    const product = prompt("원하시는 상품을 추가해주세요 !");
    const { cart } = this.state;
    cart.push({product : product, id : cart.length });
    console.log(cart)
    this.setState({ cart : cart });
  }

  render() {
    const { cart } = this.state;
    console.log(cart);
    return (
      <>
        <button onClick={this.addProduct}>상품 추가하기</button>
        <h1>상품 목록</h1>
        <h2>-------------</h2>
        {cart.map(c => <h3 key={c.id}>{c.product}</h3>)}
      </>
    )
  }
}

export default Cart;