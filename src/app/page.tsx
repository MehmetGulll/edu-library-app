import DateCard from "@/components/DateCard";
import Chart from "@/components/Chart";
import { getOccupancyByDateRange } from "../../utils/getOccupancy";

export default async function Home() {
  const occupancyArr = await getOccupancyByDateRange(
    "23.01.2024",
    "26.01.2024"
  );

  const data = await getProductsByCategory();

  const groupedByDate = data.borrow.reduce(
    (acc: { [key: string]: any[] }, item) => {
      if (!acc[item.date as keyof typeof acc]) {
        acc[item.date] = [];
      }
      acc[item.date].push(item);
      return acc;
    },
    {}
  );

  const data = await getProductsByCategory();

  const groupedByDate = data.borrow.reduce(
    (acc: { [key: string]: any[] }, item) => {
      if (!acc[item.date as keyof typeof acc]) {
        acc[item.date] = [];
      }
      acc[item.date].push(item);
      return acc;
    },
    {}
  );

  return (
    <div className='p-4'>
      <div className=' mb-8 flex flex-col justify-center gap-4 rounded-lg border border-gray-300 p-8 shadow-md'>
        <Chart
          height={350}
          type='line'
          options={{
            xaxis: {
              categories: occupancyArr.map((item) => item.date),
              tooltip: {
                enabled: false,
              },
            },
          }}
          series={[
            {
              name: "Total Occupancy",
              data: occupancyArr.map((item) => Number(item.occupancy.total)),
            },
          ]}
          width='100%'
        />
      </div>
      <div className='container flex gap-2'>
        {occupancyArr.map((item) => (
          <DateCard {...item} key={item.date} />
        ))}
      </div>
    </div>
  );
}
