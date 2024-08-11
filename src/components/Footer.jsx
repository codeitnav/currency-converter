import React from 'react';

function Footer() {
  return (
    <footer id='contact' className='bg-gray-800 text-gray-300 py-4'>
      <div className='max-w-7xl mx-auto px-4 flex flex-col items-center'>
        <p className='text-center mb-4'>Made by Navya</p>
        <div className='flex space-x-4'>
          <a href='https://github.com/codeitnav' target='_blank' rel='noopener noreferrer'>
            <img src='https://img.icons8.com/?size=100&id=62856&format=png&color=000000' alt='GitHub' className='w-8 h-8' />
          </a>
          <a href='https://www.linkedin.com/in/navya-srivastava-7365a1282/' target='_blank' rel='noopener noreferrer'>
            <img src='https://img.icons8.com/?size=100&id=8808&format=png&color=000000' alt='LinkedIn' className='w-8 h-8' />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
