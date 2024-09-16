import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import CategorySection from '../components/CategorySection';

const Home = () => {
  return (
    <div>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
    </div>
  );
};

export default Home;