import React from 'react';

const AddProduct = ({ item, setCart, cart }) => {
  const addValue = () => {
    const newCart = cart.map(cartItem =>
      cartItem.productName === item.productName ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    setCart(newCart);
  };

  const removeValue = () => {
    const newCart = cart.map(cartItem =>
      cartItem.productName === item.productName ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    ).filter(cartItem => cartItem.quantity > 0);

    setCart(newCart);
  };

  return (
    <div className='product_details'>
      <div className="product_img">
        <img src={item.img} alt={item.productName} />
      </div>
      <div className="product_desc">
        <h3>{item.productName}</h3>
        <p>₹{item.price}</p>
      </div>
      <div className='add_remove_carts'>
        <button className="remove_cart" onClick={removeValue}>
        −
        </button>
        {item.quantity}
        <button className="add_cart" onClick={addValue}>
        +
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
