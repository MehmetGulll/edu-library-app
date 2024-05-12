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
      <div className='flex w-full flex-wrap gap-8'>
        <Card className='w-full scroll-mr-8 overflow-auto lg:w-[calc(75%-32px)]'>
          <div className='w-full min-w-[720px]'>
            <HourChart occupancy={occupancySorted} />
          </div>
        </Card>
        <Card className=' w-full items-center lg:w-1/4'>
          <GradientRadialBar value={29} />
        </Card>
      </div>
      <h2 className='mx-auto mt-4 text-xl font-bold text-[#05004E]'>
        Günlere Ait Doluluk
      </h2>
      <DateCardList occupancies={[...occupancyWithDetails].reverse()} />
      <AnnouncementList />

      <h2 className='mx-auto mt-4 text-xl font-bold text-[#05004E]'>
        2024 Yılı Ödünç Kitap ve Doluluk Oranları
      </h2>
      <div className='flex w-full flex-wrap gap-8'>
        <Card className='w-full overflow-auto lg:w-[calc(66%-32px)]'>
          <div className='w-full min-w-[720px]'>
            <BorrowAndOccupancyChart
              dates={occuppancyFiltered.map((item) =>
                item.date.split("-").reverse().join(".")
              )}
              borrow={counts}
              occupancy={occuppancyFiltered.map(({ total }) => total)}
            />
          </div>
        </Card>
        <Card className='w-full lg:w-1/3'>
          <CategoryChart
            categories={categoryCounts.map(({ name }) => name)}
            counts={categoryCounts.map(({ data }) => data)}
          />
        </Card>
      </div>
    </>
  );
}
