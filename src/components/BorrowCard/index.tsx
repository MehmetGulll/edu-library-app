import { Borrow } from "@/generated/graphql";

export interface BorrowCardProps extends Borrow {
  id: number;
  name: string;
  author: string;
  date: string;
  category: string;
  language: string;
  shelf_number: string;
  color:string

}

const BorrowCard = ({ id, name, author, category, date,color }: BorrowCardProps) => {
  return (
    <div
      key={name}
      className='flex flex-col gap-1 rounded-lg border border-gray-300 p-4 shadow-md'
      style={{ backgroundColor: color}}
    >
      <div className='text-lg font-semibold text-zinc-50'>{name}</div>
      <div className='text-sm font-semibold text-zinc-300'>{author}</div>
      <div className='text-sm font-semibold text-zinc-200'>{category}</div>
      <div className='text-sm font-semibold text-zinc-300'>{date}</div>
    </div>
  );
};

export default BorrowCard;
