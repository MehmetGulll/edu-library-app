import DateCard from "@/components/DateCard";
import Chart from "@/components/Chart";
import { OccupancyWithDate } from "../../utils/getOccupancy";
import { getLibraryData } from "../../utils/getLibraryData";
import React from "react";
import AnnouncementList from "@/components/AnnouncementList";

export default async function Home() {
  // const occupancyArr = await getOccupancyByDateRange(
  //   "23.01.2024",
  //   "26.01.2024"
  // );

  const occupancyArr: OccupancyWithDate[] = [
    {
      date: "23.01.2024",
      occupancy: {
        total: "100",
        currentOccupancy: "50",
        capacity: "100",
      },
    },
    {
      date: "24.01.2024",
      occupancy: {
        total: "100",
        currentOccupancy: "60",
        capacity: "100",
      },
    },
    {
      date: "25.01.2024",
      occupancy: {
        total: "100",
        currentOccupancy: "70",
        capacity: "100",
      },
    },
    {
      date: "26.01.2024",
      occupancy: {
        total: "100",
        currentOccupancy: "80",
        capacity: "100",
      },
    },
  ];

  const { dates, counts, categoryCounts } = await getLibraryData();

  return (
    <div className='p-4'>
      <div className='mb-8 flex flex-col justify-center gap-4 rounded-lg border border-gray-300 p-8 shadow-md'>
        <div className='flex w-full flex-wrap gap-2'>
          <div className='w-full rounded-xl border border-gray-300 p-2 shadow-md lg:w-[calc(66%-8px)]'>
            <Chart
              height={350}
              type='line'
              options={{
                colors: ["#49dcb1", "#000000"],
                title: {
                  text: "Ödünç Kitap Sayısı ve Toplam Doluluk",
                  align: "center",
                  style: {
                    color: "#e27396",
                    fontSize: "14px",
                  },
                },
                responsive: [
                  {
                    breakpoint: 640,
                    options: {
                      title: {
                        style: {
                          fontSize: "12px",
                        },
                      },
                    },
                  },
                ],
                xaxis: {
                  categories: dates,
                  tooltip: {
                    enabled: false,
                  },
                },
                dataLabels: {
                  enabled: false,
                },
                yaxis: [
                  {
                    title: {
                      text: "Toplam Doluluk",
                    },
                  },
                  {
                    opposite: true,
                    title: {
                      text: "Ödünç Kitap Sayısı",
                    },
                  },
                ],
                markers: {
                  size: 5,
                },
              }}
              series={[
                {
                  name: "Ödünç Kitap Sayısı",
                  data: counts,
                },
                {
                  name: "Toplam Doluluk",
                  data: occupancyArr.map((item) =>
                    Number(item.occupancy.total)
                  ),
                },
              ]}
              width='100%'
            />
          </div>
          <div className='w-full rounded-xl border border-gray-300 p-2 shadow-md lg:w-1/3'>
            <Chart
              width='100%'
              height={350}
              type='pie'
              options={{
                labels: categoryCounts.map((item) => item.name),
                title: {
                  text: "Ödünç Alınan Kitapların Kategori Dağılımı",
                  align: "center",
                  margin: 20,
                  offsetY: -10,
                  style: {
                    color: "#e27396",
                    fontSize: "14px",
                  },
                },
                responsive: [
                  {
                    breakpoint: 640,
                    options: {
                      title: {
                        style: {
                          fontSize: "10px",
                        },
                      },
                    },
                  },
                ],
                legend: {
                  show: false,
                },
              }}
              series={categoryCounts.map((item) => item.data)}
            />
          </div>
        </div>
        <div className='flex flex-nowrap overflow-x-scroll gap-2 p-2'>
          {occupancyArr.map((item) => (
            <DateCard {...item} className="flex-none w-1/4 m-2" key={item.date} />
          ))}
        </div>
      </div>
      <AnnouncementList />
    </div>
  );
}
