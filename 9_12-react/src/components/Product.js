import { useEffect, useState } from 'react';

function Product({ product, getProduct }){
  const [loading , setLoading] = useState(true)
  useEffect(() => {
    const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
    fetch(API_URL)
    .catch(e => console.log(e))
    .then(res => res.json())
    .then(res => {
      getProduct({ display: [...res], origin: [...res] });
      setLoading(false);
      
    })
  },[])

  return(
    <>
      {loading ? <h1>loading...</h1>:<></>}
      {product.display.map(product => {
        return (
          <div key={product.id} className='product'>
            <div className='product-img'>
              <img src={product.image_link} alt={product.name}/>
            </div>
            <div className='product-name'>{product.name} ({product.price})</div>
            <div className='product-description'>{product.description}</div>
          </div>
        )
      })}
    </>
    
  )
}

export default Product;