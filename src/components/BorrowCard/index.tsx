import { Borrow } from "@/generated/graphql";
import { Tooltip } from "@mantine/core";

export interface BorrowCardProps extends Borrow {
  id: number;
  name: string;
  author: string;
  date: string;
  category: string;
  language: string;
  shelf_number: string;
  color: string;
}

const BorrowCard = ({
  id,
  name,
  author,
  category,
  date,
  color,
}: BorrowCardProps) => {
  return (
    <div
      key={id}
      className='shadow-xs flex flex-col gap-1 rounded-lg p-5'
      style={{ backgroundColor: color }}
    >
      <Tooltip label={name}>
        <div className='mb-1 truncate text-lg font-semibold text-[#151D48]'>
          {name}
        </div>
      </Tooltip>
      <Tooltip label={date}>
        <div className='mb-1 text-sm text-[#4079ED]'>{date}</div>
      </Tooltip>
      <Tooltip label={author}>
        <div className='text-sm text-[#425166]'>{author}</div>
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
