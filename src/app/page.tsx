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

  const {dates,counts,categoryCounts} = await getLibraryData();

  return (
    <div className='flex flex-col justify-center gap-4 p-8'>
      <Chart
        height={350}
        type='line'
        options={{
          colors: ['#49dcb1', '#000000'],
          xaxis: {
            categories: dates,
            tooltip: {
              enabled: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          yaxis: [{
            title: {
              text: 'Total Occupancy',
            },
          
          }, {
            opposite: true,
            title: {
              text: 'Total Borrow Books'
            }
          }],
          markers: {
            size: 5
          },
        }}
        series={[
          {
            name: 'Total Rent Books ',
            data: counts,
          },
          {
            name: 'Total Occupancy',
            data: occupancyArr.map((item) => Number(item.occupancy.total)),
          },
        ]}
        width='100%'
      />
      <div className='container flex gap-2'>
        {occupancyArr.map((item) => (
          <DateCard {...item} key={item.date} />
        ))}
      </div>
      <Chart
        width={1300}
        height={365}
        type='pie'
        options={{ labels: categoryCounts.map((item) => item.name) }}
        series={categoryCounts.map((item) => item.data)}
      />
    </div>
  );
}
