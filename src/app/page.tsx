import DateCard from '@/components/DateCard';
import Chart from '@/components/Chart';
import { getOccupancyByDateRange } from '../../utils/getOccupancy';
import { getBorrow } from '../api/index';

export default async function Home() {
  const occupancyArr = await getOccupancyByDateRange(
    '23.01.2024',
    '26.01.2024'
  );

  const data = await getBorrow();

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
    name: 'Diğer',
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
    <div className='flex flex-col justify-center gap-4 p-8'>
      <Chart
        height={350}
        type='line'
        options={{
          colors: ['#49dcb1', '#daf8ef'],
          xaxis: {
            categories: occupancyArr.map((item) => item.date),
            tooltip: {
              enabled: false,
            },
          },
        }}
        series={[
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
