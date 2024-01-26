import DateCard from "@/components/DateCard"
import { getOccupancyByDateRange } from "../../utils/getOccupancy"

export default async function Home() {
  const occupancyArr = await getOccupancyByDateRange("23.01.2024", "26.01.2024")
  return (
    <div className="flex justify-center p-8">
      <div className="flex container gap-2">
        {occupancyArr.map((item) => (
          <DateCard {...item} key={item.date} />
        ))}
      </div>
    </div>
  )
}
