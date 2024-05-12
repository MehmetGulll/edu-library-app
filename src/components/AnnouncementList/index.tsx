import React from "react";
import getLatestAnnouncements from "../../../utils/getLatestAnnouncements";
import AnnouncementCard from "../AnnouncementCard";

const AnnouncementList = async () => {
  const { announcements } = await getLatestAnnouncements();
  const colors = ["#7F00FF", "#0F52BA", "#0096FF", "#FF69B4", "#FF5F15"];
  let colorIndex = 0;
  return (
    <div id='announcements'>
      <div className='flex justify-center'>
        <h2 className='text-2xl font-bold text-rose_pompadour-500'>
          Duyurular
        </h2>
      </div>

      <div className='flex flex-wrap gap-4'>
        {announcements.map(({ title, description, link, date, content }) => {
          const color = colors[colorIndex];
          colorIndex = (colorIndex + 1) % colors.length;
          return (
            <AnnouncementCard
              key={title}
              title={title}
              description={description}
              link={link}
              date={date}
              content={content}
              style={{ backgroundColor: color }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AnnouncementList;
