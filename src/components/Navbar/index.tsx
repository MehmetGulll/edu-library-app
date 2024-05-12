import React from "react";
import OpenWeather from "../OpenWeather";
import WorkingHours from "../WorkingHours";
import OccupancyCard from "../OccupancyCard";
import getLatestAnnouncements from "../../../utils/getLatestAnnouncements";
import IconBooks from "@/assets/icons/IconBooks";
const Navbar = async () => {
  return (
    <>
      <div className='flex flex-col items-end gap-1'>
<<<<<<< HEAD
        <div className='relative mb-8 flex w-full flex-row items-center justify-center gap-4 rounded-xl bg-white p-8 md:justify-between'>
=======
        <div className='flex flex-row px-4 pt-1'>
          <div className='marquee items-center'>
            <div className='flex flex-row items-center'>
              <img
                src='https://t4.ftcdn.net/jpg/04/92/72/37/360_F_492723759_RVbG37GeTbulDZJV2wdZJ9MHyTJs5Kbm.jpg'
                alt=''
                style={{
                  width: "80px",
                  height: "50px",
                }}
              />
              <h2 className='text-xl font-bold text-[#151D48]'>Son Duyuru:</h2>
            </div>

            <h2 className='text-lg font-bold text-[#425166]'>
              {announcements[0].title}
            </h2>
          </div>

>>>>>>> main
          <OpenWeather />

          <div className='hidden rounded-lg bg-[#5D5FEF] text-white md:block'>
            <OccupancyCard />
          </div>
          <div className='flex gap-2 text-3xl font-semibold text-[#151D48]'>
            <div>
              <IconBooks width='36px' height='36px' />
            </div>
            <div>KITAPLA</div>
          </div>
          <div className='hidden items-center gap-4 md:flex'>
            <div className='rounded-lg bg-[#5D5FEF]  text-white transition-colors hover:bg-[#4079ED]'>
              <WorkingHours />
            </div>
            <a
              href='/#announcements'
<<<<<<< HEAD
              className='whitespace-nowrap text-sm font-semibold text-[#151D48] transition-colors hover:text-zinc-50 sm:text-base'
=======
              className='whitespace-nowrap text-sm font-semibold text-zinc-400 transition-colors hover:text-[#151D48] sm:text-base'
>>>>>>> main
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
