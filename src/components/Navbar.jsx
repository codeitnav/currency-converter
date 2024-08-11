import React from 'react';

function Navbar() {
  return (
    <nav className='bg-gray-800 text-white py-4 shadow-lg'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex justify-between'>
          <div className='text-2xl font-semibold'>Currency Converter</div>
          <div className='flex space-x-4'>
            <a href='#currency-exhanger' className='hover:text-gray-400'>Home</a>
            <a href="#about"  className='hover:text-gray-400'>About</a>
            <a href='#contact' className='hover:text-gray-400'>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

