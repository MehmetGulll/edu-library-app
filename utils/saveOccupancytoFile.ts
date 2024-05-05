import fs from "fs";
import { getOccupancyByDateRange } from "./getOccupancy";
export const saveOccupancytoFile = async () => {
  const todayDate = new Date();
  const [day, month, year] = [
    todayDate.getDate(),
    todayDate.getMonth() + 1,
    todayDate.getFullYear(),
  ];

  getOccupancyByDateRange(
    `${day}.${month}.${year - 1}`,
    `${day}.${month}.${year}`
  );
};
