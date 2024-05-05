import { insertOccupancy } from "@/api";

import type { NextApiRequest, NextApiResponse } from "next";
import { getOccupancy } from "../../../utils/getOccupancy";
import { InsertOccupancyMutation } from "@/generated/graphql";

const cron = async () => {
  const currentDate = new Date();
  console.log("🚀 ~ cron ~ currentDate:", currentDate);
  const [day, month, year] = [
    currentDate.getDate(),
    currentDate.getMonth() + 1,
    currentDate.getFullYear(),
  ];
  // const result = await getOccupancy(`${day}.${month}.${year}`);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: any }>
) {
  console.log("cron job started");
  const occupancyResult = await insertOccupancy({
    total: 0,
    current: 0,
    date: new Date(),
    libary_id: 1,
  });
  return res.status(200).json({ data: occupancyResult });
}
