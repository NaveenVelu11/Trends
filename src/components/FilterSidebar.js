import React from 'react';

// FilterSidebar component for filtering products by various criteria
const FilterSidebar = () => {
  return (
    <aside className="w-full lg:w-1/4 bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Filters</h3>
      <div className="mb-4">
        <h4 className="text-lg font-medium text-gray-700 mb-2">Category</h4>
        <ul>
          <li><input type="checkbox" id="category1" /><label htmlFor="category1" className="ml-2">Category 1</label></li>
          <li><input type="checkbox" id="category2" /><label htmlFor="category2" className="ml-2">Category 2</label></li>
          <li><input type="checkbox" id="category3" /><label htmlFor="category3" className="ml-2">Category 3</label></li>
        </ul>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-medium text-gray-700 mb-2">Price Range</h4>
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          className="w-full"
        />
      </div>
      <div>
        <h4 className="text-lg font-medium text-gray-700 mb-2">Rating</h4>
        <ul>
          <li><input type="radio" id="rating1" name="rating" /><label htmlFor="rating1" className="ml-2">1 Star</label></li>
          <li><input type="radio" id="rating2" name="rating" /><label htmlFor="rating2" className="ml-2">2 Stars</label></li>
          <li><input type="radio" id="rating3" name="rating" /><label htmlFor="rating3" className="ml-2">3 Stars</label></li>
          <li><input type="radio" id="rating4" name="rating" /><label htmlFor="rating4" className="ml-2">4 Stars</label></li>
          <li><input type="radio" id="rating5" name="rating" /><label htmlFor="rating5" className="ml-2">5 Stars</label></li>
        </ul>
      </div>
    </aside>
  );
};

export default FilterSidebar;
