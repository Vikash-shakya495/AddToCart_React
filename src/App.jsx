import React, { useState } from 'react';
import ProductContainer from './components/ProductContainer';
import AddProduct from './components/AddProduct';
import './App.css';
import Logo from  '../src/assets/logo.jpg';

const App = () => {
  const [cart, setCart] = useState([]);

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className='container'>

      <nav>
        <ul>
          <li><img src={Logo} alt="Logo" /></li>
          <li>Home</li>
          <li>Category</li>
          <li>About Us</li>
        </ul>
      </nav>
      <div className='master_container'>
        <div className='left'>
          <div className='list_heading'>
            <h1>Product Lists</h1>
          </div>
          <div className='product_list'>
            <ProductContainer cart={cart} setCart={setCart} />
          </div>
        </div>
        <div className='right'>
          <div className='cart_heading'>
            <h1>Shoe Store</h1>
          </div>
          <div className='add_items'>
            {cart.length > 0 ? cart.map((item, index) => (
              <AddProduct key={index} item={item} setCart={setCart} cart={cart} />
            )) : null}
          </div>
          <div className='total_container'>
            <p>Total: ₹<span>{total.toFixed(2)}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
