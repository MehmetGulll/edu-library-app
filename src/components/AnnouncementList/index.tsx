import React from "react";
import getLatestAnnouncements from "../../../utils/getLatestAnnouncements";
import AnnouncementCard from "../AnnouncementCard";
import Card from "../Card";

const AnnouncementList = async () => {
  const { announcements } = await getLatestAnnouncements();
  const colors = [ "#DCFCE7", "#F3E8FF", "#FFE2E5", "#FFF4DE",'#CDe7ff'];
  let colorIndex = 0;
  return (
    <Card>
    <div id='announcements'>
      <div className='flex justify-center'>
        <h2 className='text-xl font-bold text-[#05004E]'>
          Duyurular
        </h2>
      </div>
      

     
      <div className='flex flex-wrap gap-8 mt-10'>
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
    </Card>
  );
};

export default AnnouncementList;
