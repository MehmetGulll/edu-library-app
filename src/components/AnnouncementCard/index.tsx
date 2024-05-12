"use client";
import React from "react";
import Modal from "../Modal";

interface AnnouncementCardProps {
  title: string;
  date: string;
  description: string;
  link: string;
  content: string | null;
  style : {backgroundColor : string};
}

const AnnouncementCard = ({
  title,
  date,
  description,
  link,
  content,
  style
}: AnnouncementCardProps) => {
  const [opened, setOpened] = React.useState(false);

  const handleClick = () => {
    setOpened(true);
  };

  const handleClose = () => {
    setOpened(false);
  };

  return (
    <>
      <div
        className='w-full cursor-pointer rounded-xl shadow-xs transition-colors hover:bg-gray-100 sm:w-[calc(50%-32px)]  md:w-[calc(25%-32px)] p-5'
        onClick={handleClick}
        style = {style}
      >
        <div className='mb-2 flex flex-col gap-1'>
          <div className=' whitespace-nowrap text-xs font-semibold '>
            <div className='truncate text-lg font-semibold text-[#151D48] mb-1'>
              {title}
            </div>
            <div className='text-[#4079ED] text-sm mb-1'>{date}</div>
          </div>
        </div>
        <div className='mb-2 flex flex-col gap-1'>
          <div className='line-clamp-2 text-sm text-[#425166]'>
            {description}
          </div>
        </div>
      </div>
      <Modal
        opened={opened}
        onClose={handleClose}
        children={
          <div>
            <h2 className='text-2xl font-bold'>{title}</h2>
            <div
              className='text-gray-500'
              dangerouslySetInnerHTML={{ __html: content ?? "" }}
            />
          </div>
        }
      />
    </>
  );
};

export default AnnouncementCard;
