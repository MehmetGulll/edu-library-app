import DateCard from "@/components/DateCard";
import Chart from "@/components/Chart";
import { getOccupancyByDateRange } from "../../utils/getOccupancy";
import { getBorrow } from "../api/index";
import { getLibraryData } from "../../utils/getLibraryData";

export default async function Home() {
  const occupancyArr = await getOccupancyByDateRange(
    "23.01.2024",
    "26.01.2024"
  );

  const { dates, counts, categoryCounts } = await getLibraryData();

  return (
    <div className='p-4'>
      <div className=' mb-8 flex flex-col justify-center gap-4 rounded-lg border border-gray-300 p-8 shadow-md'>
        <div className='flex w-full'>
          <div className='w-1/2'>
            <Chart
              height={350}
              type='line'
              options={{
                colors: ["#49dcb1", "#000000"],
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
                      text: "Total Occupancy",
                    },
                  },
                  {
                    opposite: true,
                    title: {
                      text: "Total Borrow Books",
                    },
                  },
                ],
                markers: {
                  size: 5,
                },
              }}
              series={[
                {
                  name: "Total Rent Books ",
                  data: counts,
                },
                {
                  name: "Total Occupancy",
                  data: occupancyArr.map((item) =>
                    Number(item.occupancy.total)
                  ),
                },
              ]}
              width='100%'
            />
          </div>
          <div className='w-1/2'>
            <Chart
              width='100%'
              height={350}
              type='pie'
              options={{
                labels: categoryCounts.map((item) => item.name),
              }}
              series={categoryCounts.map((item) => item.data)}
            />
          </div>
        </div>
      </div>
      <div className='container flex gap-2'>
        {occupancyArr.map((item) => (
          <DateCard {...item} key={item.date} />
        ))}
      </div>
    </div>
  );
}
