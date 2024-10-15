import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-blue-500 text-white text-center py-20 h-lvh justify-center content-center" id="home">
      <h1 className="text-4xl md:text-6xl font-bold">Welcome to TechStart</h1>
      <p className="mt-4 text-lg md:text-xl">We help you build your tech dreams</p>
      <a href="#contact" className="mt-6 inline-block bg-white text-blue-500 font-bold py-2 px-6 rounded hover:bg-gray-200">
        Get Started
      </a>
    </section>
  );
};

export default HeroSection;
