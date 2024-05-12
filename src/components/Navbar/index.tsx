import React from "react";
import OpenWeather from "../OpenWeather";
import WorkingHours from "../WorkingHours";
import OccupancyCard from "../OccupancyCard";
import IconBooks from "@/assets/icons/IconBooks";
import Link from "next/link";
const Navbar = async () => {
  return (
    <>
      <div className='flex flex-col items-end gap-1'>
        <div className='relative mb-8 flex w-full flex-row items-center justify-center gap-4 rounded-xl bg-white p-8 md:justify-between'>
          <OpenWeather />

          <div className='hidden rounded-lg bg-[#5D5FEF] text-white md:block'>
            <OccupancyCard />
          </div>
          <Link
            href='/'
            className='flex gap-2 text-3xl font-semibold text-[#151D48]'
          >
            <div>
              <IconBooks width='36px' height='36px' />
            </div>
            <div>KITAPLA</div>
          </Link>
          <div className='hidden items-center gap-4 md:flex'>
            <div className='rounded-lg bg-[#5D5FEF]  text-white transition-colors hover:bg-[#4079ED]'>
              <WorkingHours />
            </div>
            <a
              href='/#announcements'
              className='whitespace-nowrap text-sm font-semibold text-[#151D48] transition-colors 
              hover:text-[#5D5FEF] sm:text-base'
            >
              Duyurular
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
