// src/components/ProductDetail.js
import React from 'react';

const ProductDetail = () => {
  // Dummy product data for example purposes
  const product = {
    id: 1,
    name: 'Sample Product',
    price: 100,
    description: 'This is a sample product description. It includes details about the product features and specifications.',
    image: 'https://via.placeholder.com/300',
    reviews: [
      { id: 1, author: 'Alice', comment: 'Great product! Highly recommend.', rating: 5 },
      { id: 2, author: 'Bob', comment: 'Good quality, but a bit expensive.', rating: 4 },
    ],
    specifications: [
      { key: 'Size', value: 'Medium' },
      { key: 'Color', value: 'Red' },
      { key: 'Material', value: 'Cotton' },
    ],
    relatedProducts: [
      { id: 2, name: 'Related Product 1', image: 'https://via.placeholder.com/150', price: 80 },
      { id: 3, name: 'Related Product 2', image: 'https://via.placeholder.com/150', price: 120 },
    ],
  };

  const handleAddToCart = () => {
    // Logic to add the product to the cart
    console.log('Product added to cart:', product);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row space-x-4">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl font-semibold mb-2">Price: ${product.price}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          
          <div className="space-y-2 mb-4">
            <h2 className="text-xl font-semibold">Specifications</h2>
            <ul className="list-disc list-inside">
              {product.specifications.map((spec, index) => (
                <li key={index} className="text-gray-600">
                  <strong>{spec.key}:</strong> {spec.value}
                </li>
              ))}
            </ul>
          </div>
          
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <div className="space-y-4">
          {product.reviews.map((review) => (
            <div key={review.id} className="border border-gray-300 p-4 rounded-md">
              <h3 className="text-lg font-semibold">{review.author}</h3>
              <p className="text-yellow-500">Rating: {'⭐'.repeat(review.rating)}</p>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
        <div className="flex space-x-4 overflow-x-auto">
          {product.relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="bg-white shadow-lg rounded-lg overflow-hidden w-48">
              <img
                src={relatedProduct.image}
                alt={relatedProduct.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold truncate">{relatedProduct.name}</h3>
                <p className="text-gray-600">Price: ${relatedProduct.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
