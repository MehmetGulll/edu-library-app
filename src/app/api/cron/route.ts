import { insertOccupancy } from "@/api";
import { getOccupancy } from "../../../../utils/getOccupancy";

export async function GET() {
  const currentDate = new Date();
  const [day, month, year] = [
    currentDate.getDate(),
    currentDate.getMonth() + 1,
    currentDate.getFullYear(),
  ];
  const result = await getOccupancy(`${day}.${month}.${year}`);
  const occupancyResult = insertOccupancy({
    total: parseInt(result.total),
    current: parseInt(result.currentOccupancy),
    date: new Date(),
    libary_id: 1,
  });

  return Response.json(occupancyResult);
}
