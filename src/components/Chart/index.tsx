"use client"
import { ApexOptions } from "apexcharts"
import dynamic from "next/dynamic"
import LoadingOverlay from "../LoadingOverlay"

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
  | "treemap"

interface ChartProps {
  type: ChartType
  series?: ApexAxisChartSeries
  options?: ApexOptions
  width?: string | number
  height?: string | number
}
const ApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => (
    <div className="relative w-full h-[365px]">
      <LoadingOverlay />
    </div>
  ),
})

const defaultOptions: ApexOptions = {
  chart: {
    height: 365,

    type: "line",
    zoom: {
      enabled: false,
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
  colors: ["#49dcb1", "#daf8ef"],
}

const Chart = ({ ...props }: ChartProps) => {
  return (
    <ApexChart {...props} options={{ ...defaultOptions, ...props.options }} />
  )
}

export default Chart