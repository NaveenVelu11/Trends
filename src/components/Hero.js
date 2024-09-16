import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import a1 from '../Assets/a1.jpg';
import a2 from '../Assets/a2.jpg';
import a3 from '../Assets/a3.jpg';
import a4 from '../Assets/a4.jpg';
import a5 from '../Assets/a5.jpg';
import a6 from '../Assets/a6.jpg';
import a7 from '../Assets/a7.jpg';

const images = [a1, a2, a3, a4, a5, a6, a7];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  appendDots: dots => (
    <div
      style={{
        position: 'absolute',
        bottom: '10px',
        width: '100%',
        textAlign: 'center'
      }}
    >
      <ul style={{ margin: '0', padding: '0', listStyleType: 'none' }}>
        {dots}
      </ul>
    </div>
  )
};

const Hero = () => {
  return (
    <section className="relative w-full bg-gray-200 py-10">
      <div className="relative max-w-6xl mx-auto bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg">
        {/* Image Slider Container */}
        <div className="relative w-full h-[60vh] lg:h-[70vh] bg-gray-300 rounded-lg overflow-hidden">
          <Slider {...sliderSettings} className="w-full h-full">
            {images.map((image, index) => (
              <div key={index} className="w-full h-full">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Overlay Container */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 p-6 lg:p-12 rounded-lg">
          <h1 className="text-3xl lg:text-5xl font-semibold text-white mb-6 font-poppins">
            Discover the Best Deals on Fashion
          </h1>
          <p className="text-lg lg:text-2xl font-light text-white mb-8 font-poppins">
            Explore our wide range of clothing and accessories at unbeatable prices.
          </p>
          <a
            href="/products"
            className="bg-primary text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-primary-dark transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
