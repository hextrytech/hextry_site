import React from 'react';
import '../index.css'
const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div className='flex items-center justify-center py-2'>
      <p className='text-center text-xs h2'>
        &copy; {currentYear} HEXTRY. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
