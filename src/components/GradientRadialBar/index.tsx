import React from "react";
import Chart from "../Chart";

interface GradientRadialBarProps {
  value: number;
}

const GradientRadialBar = ({ value }: GradientRadialBarProps) => {
  return (
    <Chart
      type='radialBar'
      width='100%'
      height='365px'
      series={[value]}
      options={{
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            hollow: {
              margin: 0,
              size: "70%",
              background: "#fff",
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24,
              },
            },
            track: {
              background: "#fff",
              strokeWidth: "67%",
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35,
              },
            },

            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: true,
                color: "#888",
                fontSize: "17px",
              },
              value: {
                color: "#111",
                fontSize: "36px",
                show: true,
              },
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            type: "horizontal",
            colorStops: [
              {
                offset: 0,
                color: "#49dcb1",
                opacity: 1,
              },
              {
                offset: 100,
                color: "#e27396",
                opacity: 1,
              },
            ],
          },
        },
        stroke: {
          lineCap: "round",
        },

        labels: ["Anlık Doluluk Oranı"],
      }}
    />
  );
};

export default GradientRadialBar;
