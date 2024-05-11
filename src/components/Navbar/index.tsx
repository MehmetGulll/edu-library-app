import React from "react";
import OpenWeather from "../OpenWeather";
import WorkingHours from "../WorkingHours";
import OccupancyCard from "../OccupancyCard";
import getLatestAnnouncements from "../../../utils/getLatestAnnouncements";
const Navbar = async () => {
  const { announcements } = await getLatestAnnouncements();
  console.log(announcements[0].description);

  return (
    <>
      <style>
      {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-80%); }
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
          <div className='marquee '>
            <h2 className='text-xl font-bold text-rose_pompadour-300'>
              Son Duyuru:
            </h2>
            <h2 className='text-lg font-bold text-rose_pompadour-500'>
              {announcements[0].title}
            </h2>
          </div>

          <OpenWeather />
        </div>
        <div
          className='flex w-full flex-row items-center justify-between gap-4 border-y px-4 py-6'
          style={{ background: "linear-gradient(to right, #7120f5,#a066ff)" }}
        >
          <div className='rounded-lg bg-rose_pompadour-500  text-white transition-colors hover:bg-rose_pompadour-400'>
            <OccupancyCard />
          </div>
          <img
            src='https://static.vecteezy.com/system/resources/previews/023/473/891/non_2x/books-on-the-shelf-icon-illustration-vector.jpg'
            alt='Navbar Resmi'
            className='self-center'
            style={{ mixBlendMode: "multiply", width: "100px", height: "50px" }}
          />
          <div className='flex items-center gap-4'>
            <div className='rounded-lg bg-rose_pompadour-500  text-white transition-colors hover:bg-rose_pompadour-400'>
              <WorkingHours />
            </div>
            <a
              href='/#announcements'
              className='whitespace-nowrap text-sm font-semibold text-zinc-300 transition-colors hover:text-zinc-50 sm:text-base'
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
