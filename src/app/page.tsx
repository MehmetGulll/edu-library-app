import { getLibraryData } from "../../utils/getLibraryData";
import React from "react";
import AnnouncementList from "@/components/AnnouncementList";
import { getAllOccupancy, getBorrow } from "@/api";
import BorrowAndOccupancyChart from "@/components/BorrowAndOccupancyChart";
import CategoryChart from "@/components/CategoryChart";
import DateCardList from "@/components/DateCardList";

export default async function Home() {
  const borrowData = await getBorrow();
  const { counts, categoryCounts } = await getLibraryData(borrowData);
  const occupancyArr = await getAllOccupancy();
  const occupancyWithoutHours = occupancyArr.occupancy.map((item) => {
    return {
      ...item,
      date: item.date.split("T")[0],
    };
  });

  const occuppancyFiltered = occupancyWithoutHours.filter(
    // only get one item per date
    (item, index, self) => index === self.findIndex((t) => t.date === item.date)
  );

  const occupancyWithDetails = occuppancyFiltered.map((item) => {
    const allOccupancyFromThatDate = occupancyArr.occupancy.filter(
      (occupancy) => occupancy.date.split("T")[0] === item.date
    );
    return {
      ...item,
      details: allOccupancyFromThatDate,
    };
  });

  return (
    <div className='p-4'>
      <div className='mb-8 flex flex-col justify-center gap-4 rounded-lg border border-gray-300 p-8 shadow-md'>
        <div className='flex w-full flex-wrap gap-2'>
          <div className='w-full rounded-xl border border-gray-300 p-2 shadow-md lg:w-[calc(66%-8px)]'>
            <BorrowAndOccupancyChart
              dates={occuppancyFiltered.map((item) =>
                item.date.split("-").reverse().join(".")
              )}
              borrow={counts}
              occupancy={occuppancyFiltered.map(({ total }) => total)}
            />
          </div>
          <div className='w-full rounded-xl border border-gray-300 p-2 shadow-md lg:w-1/3'>
            <CategoryChart
              categories={categoryCounts.map(({ name }) => name)}
              counts={categoryCounts.map(({ data }) => data)}
            />
          </div>
        </div>
        <DateCardList occupancies={occupancyWithDetails} />
      </div>
      <AnnouncementList />
    </div>
  );
}
