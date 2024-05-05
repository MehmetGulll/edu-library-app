import { DateFormat, OccupancyWithDate } from "../../../utils/getOccupancy";

interface DateCardProps extends OccupancyWithDate {
  onClick: (date: DateFormat) => void;
}

const DateCard = ({ date, occupancy, onClick }: DateCardProps) => {
  return (
    <div className='m-2 w-1/4 flex-none rounded-xl p-2 px-4 shadow-md outline outline-1 outline-gray-300'>
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
    </div>
  );
};

export default DateCard;
