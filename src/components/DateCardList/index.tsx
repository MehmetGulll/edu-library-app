"use client";
import { Carousel } from "@mantine/carousel";
import { MantineProvider } from "@mantine/core";
import React from "react";
import DateCard, { DateCardProps } from "../DateCard";

interface DateCardListProps {
  occupancies: DateCardProps[];
}
const DateCardList = ({ occupancies }: DateCardListProps) => {
  return (
    <MantineProvider>
      <Carousel
        slideSize='25%'
        align='end'
        initialSlide={occupancies.length - 1}
        slideGap='8px'
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
        {[...occupancies].splice(50).map((occupancy) => (
          <Carousel.Slide>
            <DateCard {...occupancy} key={occupancy.date} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </MantineProvider>
  );
};

export default DateCardList;
