"use client";
import React, { useState } from "react";
import Modal from "../Modal";

const WorkingOurs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div onClick={handleOpenModal} className='cursor-pointer'>
        <div>Çalışma Saatleri</div>
      </div>
      <Modal opened={isOpen} onClose={handleCloseModal}>
        <table className='w-full table-auto text-center'>
          <tr>
            <th className='px-4 py-2'>S.NO</th>
            <th className='px-4 py-2'>KÜTÜPHANELERİMİZ</th>
            <th className='px-4 py-2'>ÇALIŞMA SAATLERİ HAFTA İÇİ</th>
            <th className='px-4 py-2'>HAFTA SONU</th>
          </tr>
          <tr>
            <td className='border px-4 py-2'>1</td>
            <td className='border px-4 py-2'>Merkez Kütüphane</td>
            <td className='border px-4 py-2'>7 GÜN 24 SAAT</td>
            <td className='border px-4 py-2'></td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>2</td>
            <td className='border px-4 py-2'>Buca Eğitim Fakültesi</td>
            <td className='border px-4 py-2'>8.30-17.30</td>
            <td className='border px-4 py-2'>KAPALI</td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>3</td>
            <td className='border px-4 py-2'>Hukuk Fakültesi</td>
            <td className='border px-4 py-2'>8.30-17.30</td>
            <td className='border px-4 py-2'>KAPALI</td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>4</td>
            <td className='border px-4 py-2'>
              İktisadi ve İdari Bilimler Fakültesi
            </td>
            <td className='border px-4 py-2'>8.30-17.30</td>
            <td className='border px-4 py-2'>KAPALI</td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>5</td>
            <td className='border px-4 py-2'>İlahiyat Fakültesi</td>
            <td className='border px-4 py-2'>8.30-21.00</td>
            <td className='border px-4 py-2'>Cumartesi (10.00–17:00)</td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>6</td>
            <td className='border px-4 py-2'>Tıp Fakültesi</td>
            <td className='border px-4 py-2'>8:30–23:00</td>
            <td className='border px-4 py-2'>KAPALI</td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>7</td>
            <td className='border px-4 py-2'>
              Deniz Bil.Ve Teknolojisi Enstitüsü
            </td>
            <td className='border px-4 py-2'>8:30–17:30</td>
            <td className='border px-4 py-2'>KAPALI</td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>8</td>
            <td className='border px-4 py-2'>Devlet Konservatuari</td>
            <td className='border px-4 py-2'>8:30–17:30</td>
            <td className='border px-4 py-2'>KAPALI</td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>9</td>
            <td className='border px-4 py-2'>Bergama Meslek Yüksekokulu</td>
            <td className='border px-4 py-2'>8:30</td>
            <td className='border px-4 py-2'></td>
          </tr>
        </table>
      </Modal>
    </>
  );
};
export default WorkingOurs;
