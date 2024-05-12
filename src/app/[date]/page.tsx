import { getBorrowByDay, getOccupancyByDay } from "@/api";
import GradientRadialBar from "@/components/GradientRadialBar";
import HourChart from "@/components/HourChart";
import getLatestAnnouncements from "../../../utils/getLatestAnnouncements";
import AnnouncementCard from "@/components/AnnouncementCard";
import CategoryChart from "@/components/CategoryChart";
import { getLibraryData } from "../../../utils/getLibraryData";
import BorrowCardList from "@/components/BorrowCardList";

export default async function DatePage({
  params,
}: {
  params: { date: `${number}-${number}-${number}` };
}) {
  const { occupancy } = await getOccupancyByDay(params.date);
  const borrow = await getBorrowByDay(params.date);
  const colors = ["#7F00FF", "#0F52BA", "#0096FF", "#FF69B4", "#FF5F15"];
  let colorIndex = 0;
  const transformedBorrows = borrow.borrow.map((b, index) => ({
    id: b.id,
    name: b.name,
    author: b.author,
    date: b.date,
    category: b.category,
    language: b.language,
    shelf_number: b.shelf_number,
    color: colors[index % colors.length],
  }));

  colorIndex = (colorIndex + 1) % colors.length;

  const { categoryCounts } = await getLibraryData(borrow);

  const occupancySorted = [...occupancy].sort((a, b) => {
    return a.date
      .split("T")[1]
      .split(":")[0]
      .localeCompare(b.date.split("T")[1].split(":")[0]);
  });

  const { announcements } = await getLatestAnnouncements();

  const announcementsFiltered = announcements.filter(
    (announcement) => announcement.date === params.date
  );

  return (
    <div className='p-4'>
      <div className=' flex justify-center'>
        <h1 className='text-align:center text-xl font-normal text-indigo-500 md:font-bold '>
          {params.date} Tarihindeki Doluluk Oranları
        </h1>
      </div>

      <div className='mb-8 mt-5 flex w-full flex-wrap gap-2'>
        <div
          className='w-full rounded-xl border border-gray-300 p-2 shadow-md lg:w-[calc(66%-8px)]'
          style={{ backgroundColor: "#F0FFFF" }}
        >
          <HourChart occupancy={occupancySorted} />
        </div>
        <div
          className='w-full rounded-xl border border-gray-300 p-2 shadow-md lg:w-1/3'
          style={{ backgroundColor: "#F0FFFF" }}
        >
          <GradientRadialBar
            value={
              Math.round(occupancy[occupancy.length - 1].current / 1250) * 100
            }
          />
        </div>
      </div>
      {transformedBorrows.length !== 0 && (
        <div className='mb-8 flex w-full flex-wrap gap-2'>
          <div
            className='w-full rounded-xl border border-gray-300 p-2 shadow-md lg:w-1/3'
            style={{ backgroundColor: "#F0FFFF" }}
          >
            <CategoryChart
              categories={categoryCounts.map(({ name }) => name)}
              counts={categoryCounts.map(({ data }) => data)}
            />
          </div>
          <div
            className='w-full rounded-xl border border-gray-300 p-2 shadow-md lg:w-[calc(66%-8px)]'
            style={{ backgroundColor: "#F0FFFF" }}
          >
            <div className='flex justify-center'>
              <h2 className='text-2xl font-bold text-rose_pompadour-500'>
                Ödünç Kitaplar
              </h2>
            </div>

            <div className='mt-5 flex gap-4'>
              <BorrowCardList borrows={transformedBorrows} />
            </div>
          </div>
        </div>
      )}
      {announcementsFiltered.length !== 0 && (
        <div
          id='announcements'
          className='flex flex-col justify-center gap-4 rounded-lg border border-gray-300 p-8  shadow-md'
        >
          <h2 className='text-2xl font-bold text-rose_pompadour-500'>
            Duyurular
          </h2>
          <div className='flex flex-wrap gap-4'>
            {announcementsFiltered.map(
              ({ title, description, link, date, content }) => {
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
              }
            )}
          </div>
        </div>
      )}
    </div>
  );
}
