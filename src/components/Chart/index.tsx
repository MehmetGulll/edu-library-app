"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import LoadingOverlay from "../LoadingOverlay";

type ChartType =
  | "line"
  | "area"
  | "bar"
  | "pie"
  | "donut"
  | "radialBar"
  | "scatter"
  | "bubble"
  | "heatmap"
  | "candlestick"
  | "boxPlot"
  | "radar"
  | "polarArea"
  | "rangeBar"
  | "rangeArea"
  | "treemap";

interface ChartProps {
  type: ChartType;
  series?: ApexAxisChartSeries | number[];
  options?: ApexOptions;
  width?: string | number;
  height?: string | number;
}
const ApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => (
    <div className='relative h-[365px] w-full'>
      <LoadingOverlay />
    </div>
  ),
});

const defaultOptions: ApexOptions = {
  chart: {
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: "smooth",
  },
  title: {
    text: "Occupancy Chart",
    align: "center",
  },
  grid: {
    row: {
      colors: ["#daf8ef", "transparent"],
      opacity: 0.5,
    },
  },
};

const Chart = ({ ...props }: ChartProps) => {
  return (
    <ApexChart {...props} options={{ ...defaultOptions, ...props.options }} />
  );
};

export default Chart;
