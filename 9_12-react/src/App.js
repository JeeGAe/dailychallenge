import './App.css';
import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import ProductList from './components/ProductList';

function App() {
  const [product, setProduct] = useState({ display : [], origin : [] })

  const getProduct = (product) => {
    setProduct(product)
  }

  const [priceToggle, setPriceToggle] = useState(false);
  
  const handlePriceToggle = () => {
    setPriceToggle(!priceToggle);
  }

  const sortProduct = (p) => {
    const copyProduct = p;
    if(priceToggle){
      setProduct({ ...product, display : copyProduct.sort((a,b) => a.price-b.price) })
    }else{
      setProduct({ ...product, display : [...copyProduct] })
    }
  }

  const modifyProduct = () => {
    const copyProduct = [...product.origin];
    if(search === ''){
      sortProduct(copyProduct)
    }else{
      sortProduct(copyProduct.filter(p => p.name.toLowerCase().includes(search.toLowerCase())));
    }
    
  }

  const [search, setSearch] = useState('');

  const getSearch = (keyword) => {
    setSearch(keyword)
  }

  useEffect(()=> {
    modifyProduct();
  },[priceToggle, search])

  const [shadowToggle, setShadowToggle] = useState(false);
  
  useEffect(() => {
    const handleShadowToggle = (e) => {
      if(window.pageYOffset > 30){
        setShadowToggle(true);
      }else{
        setShadowToggle(false);
      }
    }
    window.addEventListener('scroll', handleShadowToggle)
  },[])
  return (
    <div className="App">
      <Nav priceToggle={priceToggle} handlePriceToggle={handlePriceToggle} modifyProduct={modifyProduct} getSearch={getSearch} shadowToggle={shadowToggle}></Nav>
      <ProductList product={product} getProduct={getProduct}></ProductList>
    </div>
  );
}

export default App;
