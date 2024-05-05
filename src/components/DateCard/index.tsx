import { DateFormat, OccupancyWithDate } from "../../../utils/getOccupancy";

const DateCard = ({
  date,
  occupancy: { currentOccupancy, total },
}: OccupancyWithDate) => {
  return (
    <div
      className={`m-2 w-1/4 flex-none rounded-xl p-2 px-4 shadow-md outline outline-1 outline-gray-300`}
    >
      <div className='mb-2 flex flex-col gap-1'>
        <h2 className='mb-2 text-xl font-bold'>Doluluk Durumu</h2>
        <div className='text-lg font-semibold text-gray-500'>{date}</div>
      </div>
      <div className='flex gap-6'>
        <div className='flex flex-col gap-1'>
          <div className='text-xs font-semibold text-gray-500'>Current:</div>
          <div>{currentOccupancy}</div>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='text-xs font-semibold text-gray-500'>Total:</div>
          <div>{total}</div>
        </div>
      </div>
    </div>
  );
};

export default DateCard;
