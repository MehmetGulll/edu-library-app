import { insertOccupancy } from "@/api";

import type { NextApiRequest, NextApiResponse } from "next";
import { getOccupancy } from "../../../utils/getOccupancy";
export const runtime = "edge";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: any }>
) {
  console.log("cron job started");
  const currentDate = new Date();
  const [day, month, year] = [
    currentDate.getDate(),
    currentDate.getMonth() + 1,
    currentDate.getFullYear(),
  ];
  const result = await getOccupancy(`${day}.${month}.${year}`);
  const occupancyResult = await insertOccupancy({
    total: parseInt(result.total),
    current: parseInt(result.currentOccupancy),
    date: new Date(),
    libary_id: 1,
  });

  console.log("cron", occupancyResult);
  return res.status(200).json({ data: occupancyResult });
}
