import { Borrow } from "@/generated/graphql";
import { Tooltip } from "@mantine/core";

export interface BorrowCardProps extends Borrow {
  name: string;
  author: string;
  date: string;
  category: string;
  language: string;
  shelf_number: string;
  color: string;
}

const BorrowCard = ({
  name,
  author,
  category,
  date,
  color,
}: BorrowCardProps) => {
  return (
    <div
      className='shadow-xs gap-1 rounded-lg p-5'
      style={{ backgroundColor: color }}
    >
      <Tooltip label={name}>
        <div className=' truncate text-lg font-semibold text-[#151D48]'>
          {name}
        </div>
      </Tooltip>
      <Tooltip label={date}>
        <div className='mb-2 text-sm text-[#4079ED]'>{date}</div>
      </Tooltip>
      <Tooltip label={author}>
        <div className='truncate text-sm text-[#425166]'>
          {author.length > 0 ? author : "Bilinmiyor"}
        </div>
      </Tooltip>
      <Tooltip label={category}>
        <div className='mb-1 truncate text-sm  font-semibold text-[#151D48]'>
          {category}
        </div>
      </Tooltip>
    </div>
  );
};

export default BorrowCard;
