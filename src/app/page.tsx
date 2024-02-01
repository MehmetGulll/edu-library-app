import DateCard from "@/components/DateCard"
import Chart from "@/components/Chart"
import {
  OccupancyWithDate,
  getOccupancyByDateRange,
} from "../../utils/getOccupancy"
import {
  AddOccupancyDocument,
  AddOccupancyMutation,
  useAddOccupancyMutation,
} from "@/generated/graphql"

import fs from "fs"
import { client } from "./layout"

export default async function Home() {
  const occupancyArr = await getOccupancyByDateRange("1.01.2023", "27.01.2024")

  // write to file
  fs.writeFile("occupancy.json", JSON.stringify(occupancyArr), function (err) {
    if (err) throw err
    console.log("Saved!")
  })

  // console.log(occupancyArr)

  // read from file
  // const occupancyArr = JSON.parse(
  //   fs.readFileSync("occupancy.json", "utf8")
  // ) as OccupancyWithDate[]
  // console.log("🚀 ~ Home ~ occupancyArr:", occupancyArr)
  const { data, errors } = await client.mutate<AddOccupancyMutation>({
    mutation: AddOccupancyDocument,
    variables: {
      objects: occupancyArr.map(
        ({ date, occupancy: { currentOccupancy, total } }) => ({
          date: date.split(".").reverse().join("-"),
          current: currentOccupancy,
          total: total,
          libary_id: 1,
        })
      ),
    },
  })

  console.log(JSON.stringify(data), errors)

  return (
    <div className="flex justify-center p-8 flex-col gap-4">
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
