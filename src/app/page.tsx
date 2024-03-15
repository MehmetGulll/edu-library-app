import DateCard from "@/components/DateCard";
import Chart from "@/components/Chart";
import { getOccupancyByDateRange } from "../../utils/getOccupancy";
import { getProductsByCategory } from "@/api";

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

  const groupedByCategory = data.borrow.reduce(
    (acc: { [key: string]: any[] }, item) => {
      if (!acc[item.category as keyof typeof acc]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    },
    {}
  );
  const totalDataCount = data.borrow.length;
  const threshold = 0.03;
  let categoryCounts = Object.keys(groupedByCategory).map((category) => ({
    name: category,
    data: groupedByCategory[category].length,
  }));
  let otherCategory = {
    name: "Diğer",
    data: 0,
  };
  categoryCounts = categoryCounts.filter((category) => {
    const ratio = category.data / totalDataCount;
    if (ratio < threshold) {
      otherCategory.data += category.data;
      return false;
    }
    return true;
  });
  if (otherCategory.data > 0) {
    categoryCounts.push(otherCategory);
  }

  return (
    <div className='p-4'>
      <div className=' mb-8 flex flex-col justify-center gap-4 rounded-lg border border-gray-300 p-8 shadow-md'>
        <div className='flex w-full'>
          <div className='w-1/2'>
            <Chart
              height={350}
              type='line'
              options={{
                colors: ["#49dcb1", "#daf8ef"],
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
