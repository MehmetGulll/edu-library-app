"use client";
import React, { useEffect, useState } from "react";
import { getOccupancy } from "../../../utils/getOccupancy";

type Occupancy = {
  total: string;
  currentOccupancy: string;
  capacity: string;
};

const OccupancyCard = () => {
  const [occupancy, setOccupancy] = useState<Occupancy>({
    total: "0",
    currentOccupancy: "0",
    capacity: "0",
  });

  const formatDate = (date: Date): `${number}.${number}.${number}` => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}.${month}.${year}` as `${number}.${number}.${number}`;
  };

  useEffect(() => {
    const fetchOccupancy = async () => {
      const date = formatDate(new Date());
      const occupancy = await getOccupancy(date, 0);
      setOccupancy(occupancy);
    };

    fetchOccupancy();
    const intervalId = setInterval(fetchOccupancy, 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='rounded-xl p-2 px-4 shadow-md outline outline-1 outline-gray-300'>
      <div className='mb-2 flex flex-col gap-1'>
        <div className='text-lg font-semibold text-gray-500'>Doluluk</div>
      </div>
      <div className='flex gap-6'>
        <div className='flex flex-col gap-1'>
          <div className='text-xs font-semibold text-gray-500'>
            Şu an doluluk:
          </div>
          <div>{occupancy.currentOccupancy}</div>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='text-xs font-semibold text-gray-500'>
            Toplam kapasite:
          </div>
          <div>{occupancy.total}</div>
        </div>
      </div>
    </div>
  );
};

export default OccupancyCard;
