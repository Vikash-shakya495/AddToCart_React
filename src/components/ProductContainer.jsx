import React from 'react';
import CasualShoe from '../../src/assets/casualShoe.webp';
import WaterShoe from '../../src/assets/waterShoe.webp';
import SportShoe from '../../src/assets/sportShoe.jpg';
import TinyKidShoe from '../../src/assets/tinyKidShoe.webp';
import FormalShoe from '../../src/assets/formalShoe.webp';
import NikeDunkShoe from '../../src/assets/nikeDunk.webp';
import WhiteSneakerShoe from '../../src/assets/whiteSneaker.webp';
import RunningShoe from '../../src/assets/runningShoe.avif';


const ProductContainer = ({ cart, setCart }) => {
  const products = [
    { productName: "Casual Shoe", price: 200.00, img: CasualShoe },
    { productName: "Water Shoe", price: 999.00, img: WaterShoe },
    { productName: "Sport Shoe", price: 2400.00, img:SportShoe },
    { productName: "Tiny kid Shoe", price: 2400.00, img: TinyKidShoe },
    { productName: "Formal Shoe", price: 30.00, img: FormalShoe },
    { productName: "Nike Dunk Shoe", price: 140.00, img: NikeDunkShoe },
    { productName: "White Sneaker Shoe", price: 500.00, img: WhiteSneakerShoe },
    { productName: "Running Shoe", price: 4000.00, img: RunningShoe },
  ];


  const addCart = (product) => {
    const productIndex = cart.findIndex(item => item.productName === product.productName);
    if (productIndex > -1) {
      const newCart = [...cart];
      newCart[productIndex].quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    products.map((product, index) => (
      <div key={index} className='show_product'>
        <img src={product.img} alt={product.productName} />
        <h3>{product.productName}</h3>
        <h4>₹{product.price}.00</h4>
        <button onClick={() => addCart(product)}>Add to Cart</button>
      </div>
    ))
  );
};

export default ProductContainer;
