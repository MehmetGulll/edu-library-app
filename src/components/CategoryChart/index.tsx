import React from "react";
import Chart from "../Chart";

interface CategoryChartPros {
  categories: string[];
  counts: number[];
}

const CategoryChart = ({ categories, counts }: CategoryChartPros) => {
  return (
    <Chart
      width='100%'
      height={350}
      type='pie'
      options={{
        labels: categories,
        title: {
          text: "Ödünç Alınan Kitapların Kategori Dağılımı",
          align: "center",
          margin: 20,
          offsetY: -10,
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
                  fontSize: "10px",
                },
              },
            },
          },
        ],
        legend: {
          show: false,
        },
      }}
      series={counts}
    />
  );
};

export default CategoryChart;
