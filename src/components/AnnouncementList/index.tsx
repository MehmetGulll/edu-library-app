import React from "react";
import getLatestAnnouncements from "../../../utils/getLatestAnnouncements";
import AnnouncementCard from "../AnnouncementCard";

const AnnouncementList = async () => {
  const { announcements } = await getLatestAnnouncements();

  return (
    <div
      id='announcements'
      className='flex flex-col justify-center gap-4 rounded-lg border border-gray-300 p-8  shadow-md'
    >
      <h2 className='text-2xl font-bold text-rose_pompadour-500'>Duyurular</h2>
      <div className='flex flex-wrap gap-4'>
        {announcements.map(({ title, description, link, date, content }) => (
          <AnnouncementCard
            key={title}
            title={title}
            description={description}
            link={link}
            date={date}
            content={content}
          />
        ))}
      </div>
    </div>
  );
};

export default AnnouncementList;
