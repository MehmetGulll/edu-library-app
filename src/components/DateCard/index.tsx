import { DateFormat, OccupancyWithDate } from "../../../utils/getOccupancy";
import Link from "next/link";
import { getOccupancyData } from "../../../utils/getOccupancyData"; 

interface DateCardProps extends OccupancyWithDate {
  onClick: (date: DateFormat) => void;
}

const DateCard = ({ date, occupancy, onClick }: DateCardProps) => {
  const handleClick = () => {
    getOccupancyData(date); 
  };

  return (
    <div onClick={handleClick} className='m-2 w-1/4 flex-none rounded-xl p-2 px-4 shadow-md outline outline-1 outline-gray-300'>
      <Link href={`date/${date}`}>
        <div className='mb-2 flex flex-col gap-1'>
          <div className='text-lg font-semibold text-gray-500'>{date}</div>
        </div>
        <div className='flex gap-6'>
          <div className='flex flex-col gap-1'>
            <div className='text-xs font-semibold text-gray-500'>Current:</div>
            <div>{occupancy.currentOccupancy}</div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='text-xs font-semibold text-gray-500'>Total:</div>
            <div>{occupancy.total}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DateCard;
