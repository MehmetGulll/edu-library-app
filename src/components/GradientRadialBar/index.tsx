import React from "react";
import Chart from "../Chart";

interface GradientRadialBarProps {
  value: number;
}

const GradientRadialBar = ({ value }: GradientRadialBarProps) => {
  return (
    <div className='mx-auto flex h-full w-full items-center md:w-full lg:!w-full [@media(min-width:576px)]:w-2/3 [@media(min-width:992px)]:w-2/3'>
      <div className='aspect-square w-full max-w-full'>
        <Chart
          type='radialBar'
          height='100%'
          width='100%'
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
                    color: "#151D48",
                    fontSize: "17px",
                  },
                  value: {
                    color: "#0095FF",
                    fontSize: "36px",
                    show: true,
                  },
                },
              },
            },
            responsive: [
              {
                breakpoint: 1400,
                options: {
                  plotOptions: {
                    radialBar: {
                      dataLabels: {
                        show: true,
                        name: {
                          offsetY: 0,
                          show: true,
                          color: "#151D48",
                          fontSize: "12px",
                        },
                        value: {
                          color: "#0095FF",
                          fontSize: "24px",
                          show: true,
                        },
                      },
                    },
                  },
                },
              },
            ],
            fill: {
              type: "gradient",
              gradient: {
                type: "horizontal",
                colorStops: [
                  {
                    offset: 0,
                    color: "#00E096",
                    opacity: 1,
                  },
                  {
                    offset: 100,
                    color: "#0095FF",
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
          loaderSize={24}
        />
      </div>
    </div>
  );
};

export default GradientRadialBar;
