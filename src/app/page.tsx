import DateCard from "@/components/DateCard"
import Chart from "@/components/Chart"
import { getOccupancyByDateRange } from "../../utils/getOccupancy"
import OpenWeather from "@/components/OpenWeather"

export default async function Home() {
  const occupancyArr = await getOccupancyByDateRange("23.01.2024", "26.01.2024")

  return (
    <div className="flex justify-center p-8 flex-col gap-4">
      <OpenWeather/>
      <Chart
        height={350}
        type="line"
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
        width="100%"
      />
      <div className="flex container gap-2">
        {occupancyArr.map((item) => (
          <DateCard {...item} key={item.date} />
        ))}
      </div>
    </div>
  )
}
