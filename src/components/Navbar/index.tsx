import React from 'react';
import OpenWeather from '../OpenWeather';

const Navbar = () => {
  return (
    <div>
      <div className='flex flex-row justify-end gap-10'>
        <div>Çalışma Saatleri</div>
      <OpenWeather />
      <div className='bg-light_blue-900 flex flex-row justify-end space-x-8 border-y p-6'>
        <a
          href='https://debis.deu.edu.tr/debis.php'
          target='_blank'
          className='font-semibold text-gray-800 transition-colors hover:text-black'
        >
          Debis Giriş
        </a>
        <a
          href='https://online.deu.edu.tr/'
          target='_blank'
          className='font-semibold text-gray-800 transition-colors hover:text-black'
        >
          Sakai Giriş
        </a>
        <a
          href='https://webmail7.deu.edu.tr/'
          target='_blank'
          className='font-semibold text-gray-800 transition-colors hover:text-black'
        >
          Mail Giriş
        </a>
        <a
          href='https://kutuphane.deu.edu.tr/tr/category/duyurular/'
          target='_blank'
          className='font-semibold text-gray-800 transition-colors hover:text-black'
        >
          Duyurular
        </a>
      </div>
    </div>
  );
};
export default Navbar;
