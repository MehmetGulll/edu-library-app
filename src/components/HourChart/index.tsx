"use client";
import React from "react";
import Chart from "../Chart";
interface HourChartProps {
  occupancy: { date: string; total: number }[];
}
const HourChart = ({ occupancy }: HourChartProps) => {
  return (
    <Chart
      type='line'
      width='100%'
      height='365px'
      options={{
        colors: ["#49dcb1", "#000000"],
        title: {
          text: "Saat Başı Toplam Doluluk",
          align: "center",
          style: {
            color: "#151D48",
            fontSize: "14px",
            fontWeight:'600'
          },
        },
        tooltip: {
          x: {
            formatter: function formatter(val) {
              return "Saat: " + (val - 1) + ":00";
            },
          },
        },
        responsive: [
          {
            breakpoint: 1440,
            options: {
              chart: {
                height: 250,
              },
            },
          },
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
          categories: occupancy.map(
            (item) => item.date.split("T")[1].split(":")[0]
          ),
          tooltip: {
            enabled: false,
            formatter: (value) => `Saat: ${value}:00`,
          },
          labels: {
            show: true,
            style: {
              colors: "#7B91B0",
            },
          },
          title: {
            text: "Saat",
          },
        },
        yaxis: [
          {
            title: {
              text: "Toplam Doluluk",
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
          name: "Toplam Doluluk",
          data: occupancy.map(({ total }) => total),
        },
      ]}
      loaderSize={24}
    />
  );
};

export default HourChart;
