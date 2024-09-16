import React from 'react';

// ProductCard component displaying individual product details
const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        {/* Product Title */}
        <h3 className="text-xl font-bold mb-2 text-gray-900">{product.title}</h3>

        {/* Product Description */}
        <p className="text-gray-700 mb-4">
          {product.description.length > 100
            ? `${product.description.substring(0, 100)}...`
            : product.description}
        </p>

        {/* Product Category */}
        <p className="text-sm text-gray-500 mb-2">Category: {product.category}</p>

        {/* Product Rating */}
        <div className="flex items-center mb-4">
          <span className="text-yellow-500 mr-1">★★★★★</span>
          <span className="text-gray-600 text-sm">({product.rating} reviews)</span>
        </div>

        {/* Product Price */}
        <p className="text-blue-600 font-semibold mb-4">Price: ${product.price.toFixed(2)}</p>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Add to Cart
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
