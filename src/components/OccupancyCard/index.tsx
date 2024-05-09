import { getCurrentOccupancy } from "@/api";
import { getOccupancy } from "@/graphql/occupancy/query";
import React, { useEffect, useState } from "react";

type Occupancy = {
  total: string;
  currentOccupancy: string;
  capacity: string;
};

const OccupancyCard = async () => {
  const today = new Date();
  const [year, month, day] = [
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate(),
  ];
  const { occupancy } = await getCurrentOccupancy();

  return (
    <div className='out rounded-xl p-2 px-4 shadow-md'>
      <div className='mb-2 flex flex-col gap-1'>
        <div className='text-lg font-semibold '>Doluluk</div>
      </div>
      <div className='flex gap-6'>
        <div className='flex flex-col gap-1'>
          <div className='text-xs font-semibold '>Doluluk:</div>
          <div>{occupancy[0]?.current}</div>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='text-xs font-semibold '>Gün toplam:</div>
          <div>{occupancy[0]?.total}</div>
        </div>
      </div>
    </div>
  );
};

export default OccupancyCard;
