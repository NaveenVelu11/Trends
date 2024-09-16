import React from 'react';
import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';

const CategoryPage = () => {
  return (
    <div className="flex">
      <FilterSidebar />
      <div className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Mock products */}
        {[...Array(12)].map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;