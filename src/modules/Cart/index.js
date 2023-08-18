import React, { useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10 ">
        <div className="w-3/4 bg-white px-10 py-10 ">
          <div className="flex justify-between border-b py-10 ">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{cart.length} items</h2>
          </div>

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
            >
              <div className="flex w-2/5">
                <div className="w-20">
                  <img className="h-24" src={item.image} alt={item.title} />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text-sm">{item.title}</span>
                  <span className="text-red-500 text-xs">{item.category}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <span className="text-center w-1/5 font-semibold text-sm">
                ${item.price.toFixed(2)}
              </span>
            </div>
          ))}

          <div className="flex justify-end mt-10">
            <div className="text-right">
              <p className="font-semibold text-lg">
                Total: ${calculateTotal().toFixed(2)}
              </p>
              <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
