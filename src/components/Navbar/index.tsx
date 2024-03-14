import React from 'react';
import OpenWeather from '../OpenWeather';

const Navbar = () => {
  return (
    <div>
      <OpenWeather />
      <div className='flex flex-row justify-end space-x-8 bg-silver_lake_blue-300 p-6'>
        <a
          href='https://debis.deu.edu.tr/debis.php'
          target='_blank'
          className='text-white transition-colors hover:text-black'
        >
          Debis Giriş
        </a>
        <a
          href='https://online.deu.edu.tr/'
          target='_blank'
          className='text-white transition-colors hover:text-black'
        >
          Sakai Giriş
        </a>
        <a
          href='https://webmail7.deu.edu.tr/'
          target='_blank'
          className='text-white transition-colors hover:text-black'
        >
          Mail Giriş
        </a>
        <a
          href='https://kutuphane.deu.edu.tr/tr/category/duyurular/'
          target='_blank'
          className='text-white transition-colors hover:text-black'
        >
          Duyurular
        </a>
      </div>
    </div>
  );
};
export default Navbar;
