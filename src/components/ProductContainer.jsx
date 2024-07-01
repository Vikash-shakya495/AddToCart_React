import React from 'react';

const ProductContainer = ({ cart, setCart }) => {
  const products = [
    { productName: "Casual Shoe", price: 200.00, img: "./src/assets/casualShoe.webp" },
    { productName: "Water Shoe", price: 999.00, img: "./src/assets/waterShoe.webp" },
    { productName: "Sport Shoe", price: 2400.00, img: "./src/assets/sportShoe.jpg" },
    { productName: "Tiny kid Shoe", price: 2400.00, img: "./src/assets/tinyKidShoe.webp" },
    { productName: "Formal Shoe", price: 30.00, img: "./src/assets/formalShoe.webp" },
    { productName: "Nike Dunk Shoe", price: 140.00, img: "./src/assets/nikeDunk.webp" },
    { productName: "White Sneaker Shoe", price: 500.00, img: "./src/assets/whiteSneaker.webp" },
    { productName: "Running Shoe", price: 4000.00, img: "./src/assets/runningShoe.avif" },
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
