"use client";
import React from "react";
import { Carousel } from "@mantine/carousel";
import { MantineProvider } from "@mantine/core";
import BorrowCard, { BorrowCardProps } from "../BorrowCard";

interface BorrowCardListProps {
  borrows: BorrowCardProps[];
}

const BorrowCardList = ({ borrows }: BorrowCardListProps) => {
  const colors = [ "#DCFCE7", "#F3E8FF", "#FFE2E5", "#FFF4DE",'#CDe7ff'];
  let colorIndex = 0;

  const groupedBorrows = [];
  for(let i = 0; i<borrows.length; i+=12){
    groupedBorrows.push(borrows.slice(i,i+12));
  }
  
  return (
    <MantineProvider>
      <Carousel
        slideSize='100%'
        align='end'
        initialSlide={0}
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
       {groupedBorrows.map((group, index) => (
          <Carousel.Slide key={index}>
            <div className='grid grid-cols-4 gap-8'>
              {group.map((borrow) => {
                const color = colors[colorIndex];
                colorIndex = (colorIndex + 1) % colors.length;
                return (
                  <BorrowCard {...borrow} key={borrow.id} color={color} />
                );
              })}
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </MantineProvider>
  );
};

export default BorrowCardList;
