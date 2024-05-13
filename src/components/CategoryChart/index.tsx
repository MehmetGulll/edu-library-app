import React from "react";
import Chart from "../Chart";

interface CategoryChartPros {
  categories: string[];
  counts: number[];
}

const CategoryChart = ({ categories, counts }: CategoryChartPros) => {
  return (
    <div className='mx-auto flex h-full w-full flex-col items-center md:w-full lg:!w-full [@media(min-width:576px)]:w-2/3 [@media(min-width:992px)]:w-2/3'>
      <div className='mb-2 text-xs font-semibold text-[#151D48]'>
        Ödünç Alınan Kitapların Kategori Dağılımı
      </div>
      <div className='flex h-[calc(100%-24px)] items-center'>
        <div className='aspect-square max-h-[350px] w-full max-w-full items-center'>
          <Chart
            width='100%'
            height='100%'
            type='pie'
            options={{
              colors: ["#FA5A7D", "#FF947A", "#BF83FF", "#0095FF", "#00E096"],
              labels: categories,
              legend: {
                show: false,
              },
            }}
            series={counts}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryChart;
