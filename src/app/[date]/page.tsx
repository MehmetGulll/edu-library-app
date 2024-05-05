"use client";
import { useParams } from "next/navigation";
import { DateFormat } from "../../../utils/getOccupancy";

export default function DatePage() {
  const params = useParams<{ date: DateFormat }>();
  console.log(params);
  return (
    <div>
      <div className='w-screen flex items-center justify-center'>
        <h1 className="text-4xl font-normal md:font-bold">{params.date} Tarihindeki Doluluk Oranları</h1>
      </div>
    </div>
  );
}
