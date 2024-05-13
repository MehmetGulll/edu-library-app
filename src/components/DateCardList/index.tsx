"use client";
import { Carousel } from "@mantine/carousel";
import { MantineProvider } from "@mantine/core";
import React from "react";
import DateCard, { DateCardProps } from "../DateCard";
import Card from "../Card";

interface DateCardListProps {
  occupancies: DateCardProps[];
}

const limit = 15;
const DateCardList = ({ occupancies }: DateCardListProps) => {
  const [page, setPage] = React.useState(0);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const occupancyList = occupancies.slice(0, limit * (page + 1));

  return (
    <MantineProvider>
      <Carousel
        slideSize='25%'
        align='start'
        containScroll='trimSnaps'
        slideGap='32px'
        styles={{
          viewport: {
            padding: "4px",
          },
          controls: {
            marginInline: "-12px",
          },
        }}
        dragFree
        controlsOffset={"0px"}
      >
        {occupancyList.map((occupancy) => (
          <Carousel.Slide>
            <DateCard {...occupancy} key={occupancy.date} />
          </Carousel.Slide>
        ))}
        <Carousel.Slide>
          <Card>
            <div className='flex h-full w-full items-center justify-center'>
              <button
                onClick={() => handlePageChange(page + 1)}
                className='text-4xl text-gray-400'
              >
                Daha Fazla
              </button>
            </div>
          </Card>
        </Carousel.Slide>
      </Carousel>
    </MantineProvider>
  );
};

export default DateCardList;
