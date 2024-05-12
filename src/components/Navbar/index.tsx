import React from "react";
import OpenWeather from "../OpenWeather";
import WorkingHours from "../WorkingHours";
import OccupancyCard from "../OccupancyCard";
import getLatestAnnouncements from "../../../utils/getLatestAnnouncements";
const Navbar = async () => {
  const { announcements } = await getLatestAnnouncements();

  return (
    <>
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            50% { transform: translateX(-80%); }
            100% { transform: translateX(0); }
          }
          .marquee {
            width: max-content;
            display: flex;
            animation: slide 20s linear infinite;
          }
          .marquee-container {
            width: 100%;
            overflow: hidden;
          }
        `}
      </style>
      <div className='flex flex-col items-end gap-1'>
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

          <OpenWeather />
        </div>
        <div className='flex w-full flex-row items-center justify-between gap-4 border-y bg-white px-4 py-6'>
          <div className='rounded-lg bg-[#5D5FEF] text-white'>
            <OccupancyCard />
          </div>
          <img
            src='https://static.vecteezy.com/system/resources/previews/023/473/891/non_2x/books-on-the-shelf-icon-illustration-vector.jpg'
            alt='Navbar Resmi'
            className='self-center'
            style={{ mixBlendMode: "multiply", width: "100px", height: "50px" }}
          />
          <div className='flex items-center gap-4'>
            <div className='rounded-lg bg-[#5D5FEF]  text-white transition-colors hover:bg-rose_pompadour-400'>
              <WorkingHours />
            </div>
            <a
              href='/#announcements'
              className='whitespace-nowrap text-sm font-semibold text-zinc-400 transition-colors hover:text-[#151D48] sm:text-base'
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
