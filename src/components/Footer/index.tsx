import React from 'react';

const Footer = () => {
  return (
    <div className='space-x-8 bg-silver_lake_blue-300 p-6'>
      <div className='flex flex-col space-y-4'>
        <div className='flex flex-col'>
          <div className='font-bold text-white '>
            Kütüphane Dokümantasyon Daire Başkanlığı
          </div>
          <a
            href='https://www.google.com/maps/place/Dokuz+Eyl%C3%BCl+%C3%9Cniversitesi+Prof.+Dr.+Fuat+Sezgin+Merkez+K%C3%BCt%C3%BCphanesi/@38.3702639,27.2025508,15z/data=!4m6!3m5!1s0x14b9618bf9f8473f:0x12299c8ca3ab3507!8m2!3d38.3702639!4d27.2025508!16s%2Fg%2F1td1y7_m?entry=ttu'
            className='text-sm text-white'
            target='_blank'
          >
            Prof.Dr. Fuat Sezgin Merkez Kütüphanesi No:207/R D.E.Ü. Tınaztepe
            Kampüsü 35390 Doğuş Caddesi Buca – İzmir
          </a>
        </div>
        <div className='flex flex-col'>
          <div className='font-bold text-white'>Telefon</div>
          <div className='text-sm text-white'>0 232 301 80 17</div>
        </div>
        <div className='flex flex-col'>
          <div className='font-bold text-white'>Mail Adres</div>
          <div className='text-sm text-white'>kutuphane@deu.edu.tr</div>
        </div>
        <div className='flex flex-col'>
          <div className='font-bold text-white'>Konum</div>
          <a
            href='https://tinyurl.com/deukutuphane'
            className='text-sm text-white'
          >
            https://tinyurl.com/deukutuphane
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
