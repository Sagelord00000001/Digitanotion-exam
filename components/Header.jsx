import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">TechStart</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </nav>
      </div>
              {/* Mobile Hamburger Icon */}
              <div className="md:hidden">
          <button id="menu-btn">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>


      {/* Mobile Menu */}
      <nav className="md:hidden bg-gray-700 text-center hidden" id="mobile-menu">
        <a href="#home" className="block py-2 text-white">Home</a>
        <a href="#about" className="block py-2 text-white">About</a>
        <a href="#services" className="block py-2 text-white">Services</a>
        <a href="#contact" className="block py-2 text-white">Contact</a>
      </nav>
    </header>
  );
};

export default Header;