import React, { useState } from 'react';

// Checkout component for handling the checkout process
const Checkout = () => {
  const [formData, setFormData] = useState({ name: '', address: '', paymentMethod: 'credit' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle checkout submission logic
    alert('Checkout completed!');
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Checkout</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-lg font-medium text-gray-700 mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="paymentMethod" className="block text-lg font-medium text-gray-700 mb-2">
              Payment Method
            </label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="credit">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank">Bank Transfer</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary-dark transition duration-300"
          >
            Complete Purchase
          </button>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
