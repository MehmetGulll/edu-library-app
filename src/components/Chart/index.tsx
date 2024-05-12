"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import LoadingOverlay from "../LoadingOverlay";
import { createContext, useContext } from "react";
import deepMerge from "../../../utils/deepMerge";

const LoadingValueContext = createContext<ChartProps | null>(null);

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
  loaderSize?: number;
}
const ApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => {
    const props = useContext(LoadingValueContext);
    return (
      <div
        className='relative w-full'
        style={{
          height: props?.height || "365px",
          width: props?.width || "100%",
        }}
      >
        <LoadingOverlay size={props?.loaderSize} />
      </div>
    );
  },
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
  stroke: {
    curve: "smooth",
  },
  title: {
    align: "center",
  },
};

const Chart = ({ ...props }: ChartProps) => {
  return (
    <LoadingValueContext.Provider value={props}>
      <ApexChart
        {...props}
        options={deepMerge(defaultOptions, props.options ?? {})}
      />
    </LoadingValueContext.Provider>
  );
};

export default Chart;
