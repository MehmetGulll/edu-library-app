import React from "react";
import OpenWeather from "../OpenWeather";
import WorkingHours from "../WorkingHours";

const Navbar = () => {
  return (
    <div className='flex flex-col items-end gap-1'>
      <div className='px-4 pt-1'>
        <OpenWeather />
      </div>
      <div className='flex w-full flex-row items-center justify-end gap-4 border-y bg-light_blue-900 px-4 py-6'>
        <div className='rounded-lg bg-rose_pompadour-500  text-white transition-colors hover:bg-rose_pompadour-400'>
          <WorkingHours />
        </div>

        <a
          href='#announcements'
          className='whitespace-nowrap text-sm font-semibold text-light_blue-300 transition-colors hover:text-light_blue-200 sm:text-base'
        >
          Duyurular
        </a>
      </div>
    </div>
  );
};
export default Navbar;
