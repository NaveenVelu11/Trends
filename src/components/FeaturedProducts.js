// src/components/FeaturedProducts.js
import React, { useEffect, useState } from 'react';
import t1 from '../Assets/t1.jpg';
import t2 from '../Assets/t2.jpg';

const formatIndianPrice = (price) => {
  return price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
};

const FeaturedProducts = ({ cartItems, setCartItems, wishlistItems, setWishlistItems }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const filteredProducts = data.filter(product => product.category === "women's clothing");
        const additionalProducts = [
          {
            id: 21,
            title: "Extra Product 1",
            price: 999,
            image: t1,
            category: "women's clothing",
          },
          {
            id: 22,
            title: "Extra Product 2",
            price: 1499,
            image: t2,
            category: "women's clothing",
          }
        ];
        setProducts([...filteredProducts, ...additionalProducts]);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleAddToWishlist = (product) => {
    setWishlistItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (!existingItem) {
        return [...prevItems, product];
      }
      return prevItems;
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-screen-lg">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="w-full h-72 flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 truncate">{product.title}</h2>
              <p className="text-gray-600 text-sm mb-2">{product.category}</p>
              <p className="text-lg font-bold text-indigo-600">{formatIndianPrice(product.price)}</p>
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleAddToWishlist(product)}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition duration-300"
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
