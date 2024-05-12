import React from "react";
import Chart from "../Chart";

interface OccupancyProps {
  dates: string[];
  occupancy: number[];
  borrow: number[];
}

const BorrowAndOccupancyChart = ({
  dates,
  occupancy,
  borrow,
}: OccupancyProps) => {
  return (
    <Chart
      height={350}
      type='line'
      options={{
        colors: ["#00E096", "#007DD6"],
        title: {
          text: "Ödünç Alınan Kitap Sayısı ve Toplam Doluluk",
          align: "center",
          style: {
            color: "#e27396",
            fontSize: "14px",
          },
        },
        responsive: [
          {
            breakpoint: 640,
            options: {
              title: {
                style: {
                  fontSize: "12px",
                },
              },
            },
          },
        ],
        xaxis: {
          categories: dates,
          tooltip: {
            enabled: false,
          },
        },
        yaxis: [
          {
            opposite: true,
            title: {
              text: "Ödünç Kitap Sayısı",
            },
          },
          {
            title: {
              text: "Toplam Doluluk",
            },
          },
        ],
        markers: {
          size: 0,
        },
        stroke: {
          curve: "smooth",
          width: 3,
        },
        grid: {
          row: {
            colors: ["#daf8ef", "transparent"],
            opacity: 0.5,
          },
        },
      }}
      series={[
        {
          name: "Ödünç Kitap Sayısı",
          data: borrow,
        },
        {
          name: "Toplam Doluluk",
          data: occupancy,
        },
      ]}
      width='100%'
    />
  );
};

export default BorrowAndOccupancyChart;
