// src/components/Cart.js
import React from 'react';

const formatIndianPrice = (price) => {
  return `₹${price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

const Cart = () => {
  const cartItems = [
    { id: 1, title: 'Product 1', price: 500, quantity: 2, image: 'path/to/image1.jpg' },
    { id: 2, title: 'Product 2', price: 1500, quantity: 1, image: 'path/to/image2.jpg' }
  ];

  const setCartItems = () => {}; // Mock function for testing

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p>Price: {formatIndianPrice(item.price)}</p>
                <div className="flex items-center">
                  <label className="mr-2">Quantity:</label>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    className="w-16 p-1 border rounded"
                    // onChange event is omitted for static testing
                  />
                </div>
              </div>
              <div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  // onClick event is omitted for static testing
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="text-right">
            <p className="text-lg font-semibold">Total: {formatIndianPrice(totalPrice)}</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
