"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='flex flex-row justify-between items-center px-6 py-4 md:mx-72 mt-3'>
      <div>
        <span className='font-semibold text-2xl'>Toingg</span>
      </div>
      <div className='hidden md:flex flex-row justify-between gap-12 border border-gray-300 rounded-full px-6 py-2 text-md font-medium'>
        <a href="#">Contact</a>
        <a href="#">Pricing</a>
        <a href="#">Documentation</a>
        <a href="#">Join our community</a>
      </div>
      <div className='md:hidden'>
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className='absolute top-32 right-6 bg-white shadow-lg rounded-lg w-48 p-4 z-50'>
          <a href="#" className='block py-2'>Contact</a>
          <a href="#" className='block py-2'>Pricing</a>
          <a href="#" className='block py-2'>Documentation</a>
          <a href="#" className='block py-2'>Join our community</a>
        </div>
      )}
    </nav>
  );
}

export default Nav;
