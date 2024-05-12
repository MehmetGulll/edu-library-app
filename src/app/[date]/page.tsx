import { getBorrowByDay, getOccupancyByDay } from "@/api";
import GradientRadialBar from "@/components/GradientRadialBar";
import HourChart from "@/components/HourChart";
import getLatestAnnouncements from "../../../utils/getLatestAnnouncements";
import AnnouncementCard from "@/components/AnnouncementCard";
import CategoryChart from "@/components/CategoryChart";
import { getLibraryData } from "../../../utils/getLibraryData";
import BorrowCardList from "@/components/BorrowCardList";
import Card from "@/components/Card";
import AnnouncementList from "@/components/AnnouncementList";

export default async function DatePage({
  params,
}: {
  params: { date: `${number}-${number}-${number}` };
}) {
  const { occupancy } = await getOccupancyByDay(params.date);
  const borrow = await getBorrowByDay(params.date);
  const categoryColors = [
    "#7F00FF",
    "#0F52BA",
    "#0096FF",
    "#FF69B4",
    "#FF5F15",
  ];
  const announcementColors = [
    "#DCFCE7",
    "#F3E8FF",
    "#FFE2E5",
    "#FFF4DE",
    "#CDe7ff",
  ];
  let colorIndex = 0;
  const transformedBorrows = borrow.borrow.map((b, index) => ({
    id: b.id,
    name: b.name,
    author: b.author,
    date: b.date,
    category: b.category,
    language: b.language,
    shelf_number: b.shelf_number,
    color: categoryColors[index % categoryColors.length],
  }));

  colorIndex = (colorIndex + 1) % categoryColors.length;

  const { categoryCounts } = await getLibraryData(borrow);

  const occupancySorted = [...occupancy].sort((a, b) => {
    return a.date
      .split("T")[1]
      .split(":")[0]
      .localeCompare(b.date.split("T")[1].split(":")[0]);
  });

  const { announcements } = await getLatestAnnouncements();

  const announcementsFiltered = announcements.filter(
    (announcement) =>
      announcement.date === params.date.split("-").reverse().join(".")
  );

  const latestOccupancy = occupancySorted[occupancySorted.length - 1];

  return (
    <>
      <div className=' flex justify-center'>
        <h1 className='mb-1 text-2xl font-bold text-[#151D48] '>
          {params.date} Tarihindeki Doluluk Oranları
        </h1>
      </div>
      {occupancy.length === 0 ? (
        <div className='flex justify-center'>
          <h2 className='text-xl font-bold text-[#05004E]'>
            Bu tarihe ait veri bulunamadı
          </h2>
        </div>
      ) : (
        <>
          <div className='mt-5 flex w-full flex-wrap gap-8'>
            <Card className='w-full lg:w-[calc(75%-32px)]'>
              <HourChart occupancy={occupancySorted} />
            </Card>
            <Card className='flex w-full items-center lg:w-1/4'>
              <GradientRadialBar
                value={Math.round(latestOccupancy.current / 1250) * 100}
              />
            </Card>
          </div>
          <>
            {transformedBorrows.length !== 0 &&
              announcementsFiltered.length === 0 && (
                <div className='my-8 mb-8 flex w-full flex-wrap gap-8'>
                  <Card className='w-full lg:w-1/3'>
                    <CategoryChart
                      categories={categoryCounts.map(({ name }) => name)}
                      counts={categoryCounts.map(({ data }) => data)}
                    />
                  </Card>

                  <Card className='w-full lg:w-[calc(66%-32px)]'>
                    <div>
                      <div className='flex justify-center'>
                        <h2 className='mb-10 text-xl font-bold text-[#05004E]'>
                          Ödünç Kitaplar
                        </h2>
                      </div>
                      <BorrowCardList borrows={transformedBorrows} />
                    </div>
                  </Card>
                </div>
              )}
            {announcementsFiltered.length !== 0 && (
              <Card>
                <div
                  id='announcements'
                  className='flex flex-col justify-center gap-4 '
                >
                  <div className='items-center justify-center'>
                    <h2 className='text-xl font-bold text-[#05004E] '>
                      Günün Duyuruları
                    </h2>
                  </div>
                  <div className='flex flex-wrap gap-8'>
                    {announcementsFiltered.map(
                      ({ title, description, link, date, content }) => {
                        const color = announcementColors[colorIndex];
                        colorIndex =
                          (colorIndex + 1) % announcementColors.length;
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
              </Card>
            )}
          </>
        </>
      )}
    </>
  );
}
