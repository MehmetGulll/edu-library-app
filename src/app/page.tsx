import { getLibraryData } from "../../utils/getLibraryData";
import React from "react";
import AnnouncementList from "@/components/AnnouncementList";
import { getAllOccupancy, getBorrow } from "@/api";
import BorrowAndOccupancyChart from "@/components/BorrowAndOccupancyChart";
import CategoryChart from "@/components/CategoryChart";
import DateCardList from "@/components/DateCardList";
import HourChart from "@/components/HourChart";
import GradientRadialBar from "@/components/GradientRadialBar";
import Card from "@/components/Card";

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
      current:
        allOccupancyFromThatDate[allOccupancyFromThatDate.length - 1].current,
      total:
        allOccupancyFromThatDate[allOccupancyFromThatDate.length - 1].total,
      details: allOccupancyFromThatDate,
    };
  });

  const occupancySorted = [
    ...occupancyWithDetails[occupancyWithDetails.length - 1].details,
  ].sort((a, b) => {
    return a.date
      .split("T")[1]
      .split(":")[0]
      .localeCompare(b.date.split("T")[1].split(":")[0]);
  });

  return (
    <>
      <div className='flex w-full flex-wrap gap-8 my-8'>
        <Card className='w-full lg:w-[calc(75%-32px)]'>
          <HourChart occupancy={occupancySorted} />
        </Card>
        <Card className='flex w-full items-center lg:w-1/4'>
          <GradientRadialBar value={29} />
        </Card>
      </div>
      <div className='flex justify-center'>
        <h2 className='mb-1 text-2xl font-bold text-[#151D48]'>
          Günlere Ait Doluluk
        </h2>
      </div>
      <DateCardList occupancies={occupancyWithDetails} />
      <AnnouncementList />
      

     
      <div className='mt-8 flex flex-col justify-center items-center gap-4  p-8'>
        <h2 className='mb-1 text-2xl font-bold text-[#151D48]'>
          2024 Yılı Ödünç Kitap ve Doluluk Oranları
        </h2>
        <div className='flex w-full flex-wrap gap-2'>
          <div
            className='w-full  lg:w-[calc(66%-32px)]'
            
          >
            <Card>

          
            <BorrowAndOccupancyChart
              dates={occuppancyFiltered.map((item) =>
                item.date.split("-").reverse().join(".")
              )}
              borrow={counts}
              occupancy={occuppancyFiltered.map(({ total }) => total)}
            />
              </Card>
          </div>

          <div
            className='w-full  lg:w-1/3'
            style={{ backgroundColor: "#F0FFFF" }}
          >
            <Card>

          
            <CategoryChart
              categories={categoryCounts.map(({ name }) => name)}
              counts={categoryCounts.map(({ data }) => data)}
            />
              </Card>
          </div>
        </div>
      </div>
      
    </>
  );
}
