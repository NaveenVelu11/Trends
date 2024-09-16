import React from 'react';
import '../App.css'; // Import your CSS file

// Import images
import m1 from '../Assets/m1.jpg';
import m2 from '../Assets/m2.jpg';
import m3 from '../Assets/m3.jpg';
import m4 from '../Assets/m4.jpg';
import m5 from '../Assets/m5.jpg';
import m6 from '../Assets/m6.jpg';
import m7 from '../Assets/m7.jpg';

import g1 from '../Assets/g1.jpg';
import g2 from '../Assets/g2.jpg';
import g3 from '../Assets/g3.jpg';
import g4 from '../Assets/g4.jpg';
import g5 from '../Assets/g5.jpg';
import g6 from '../Assets/g6.jpg';
import g7 from '../Assets/g7.jpg';

import k1 from '../Assets/k1.jpg';
import k2 from '../Assets/k2.jpg';
import k3 from '../Assets/k3.jpg';
import k4 from '../Assets/k4.jpg';
import k5 from '../Assets/k5.jpg';
import k6 from '../Assets/k6.jpg';
import k7 from '../Assets/k7.jpg';

// Define image arrays for each category
const menImages = [m1, m2, m3, m4, m5, m6, m7];
const womenImages = [g1, g2, g3, g4, g5, g6, g7];
const kidsImages = [k1, k2, k3, k4, k5, k6, k7];

const CategorySection = () => {
  const categories = [
    { name: 'Men', images: menImages },
    { name: 'Women', images: womenImages },
    { name: 'Kids', images: kidsImages },
  ];

  return (
    <section className="py-8 bg-[#F5F5F5] text-black">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-6">Shop by Category</h2>
        <div className="space-y-12">
          {categories.map((category, index) => (
            <div key={index} className="relative mb-12 border border-gray-300 rounded-lg overflow-hidden shadow-lg">
              <div className="marquee-container">
                <div className="marquee-content">
                  {category.images.map((image, i) => (
                    <div key={i} className="marquee-image">
                      <img
                        src={image}
                        alt={`${category.name} ${i}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                  {/* Duplicate content for continuous scrolling effect */}
                  {category.images.map((image, i) => (
                    <div key={`duplicate-${i}`} className="marquee-image">
                      <img
                        src={image}
                        alt={`Duplicate ${category.name} ${i}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-5 text-white text-2xl font-bold">
                {category.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
