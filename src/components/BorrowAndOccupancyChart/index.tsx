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
            color: "#151D48",
            fontSize: "14px",
            fontWeight: "600",
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
          labels: {
            show: true,
            style: {
              colors: "#7B91B0",
            },
          },
        },
        yaxis: [
          {
            opposite: true,
            title: {
              text: "Ödünç Kitap Sayısı",
              style: {
                color: "#05004E",
              },
            },
            labels: {
              style: {
                colors: "#7B91B0",
              },
            },
          },
          {
            title: {
              text: "Toplam Doluluk",
              style: {
                color: "#05004E",
              },
            },
            labels: {
              style: {
                colors: "#7B91B0",
              },
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
