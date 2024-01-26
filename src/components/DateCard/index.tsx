import React from "react"
import { OccupancyWithDate } from "../../../utils/getOccupancy"

const DateCard = ({
  date,
  occupancy: { currentOccupancy, total },
}: OccupancyWithDate) => {
  return (
    <div className="outline outline-1 outline-gray-500 shadow-md rounded-lg p-2 px-4">
      <div className="flex flex-col gap-1 mb-2">
        <div className="text-lg text-gray-500 font-semibold">{date}</div>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col gap-1">
          <div className="text-xs text-gray-500 font-semibold">Current:</div>
          <div>{currentOccupancy}</div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-xs text-gray-500 font-semibold">Total:</div>
          <div>{total}</div>
        </div>
      </div>
    </div>
  )
}

export default DateCard
