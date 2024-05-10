import { Occupancy } from "@/generated/graphql";
import Link from "next/link";
import Chart from "../Chart";

export interface DateCardProps extends Occupancy {
  details: Occupancy[];
}

const DateCard = ({ date, current, total, details }: DateCardProps) => {
  return (
    <Link
      href={`/${date}`}
      className='flex flex-col rounded-xl p-2 px-4 shadow-md outline outline-1 outline-gray-300'
    >
      <div className='flex justify-center gap-1 [&>div:last-child]:!min-h-[80px]'>
        <div>
          <div className='flex flex-col gap-1'>
            <div className='text-lg font-semibold text-gray-500'>
              {date.split("-").reverse().join(".")}
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='flex flex-col gap-1'>
              <div className='text-xs font-semibold text-gray-500'>
                Current:
              </div>
              <div>{current}</div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='text-xs font-semibold text-gray-500'>Total:</div>
              <div>{total}</div>
            </div>
          </div>
        </div>
        <Chart
          type='line'
          width='100%'
          height='80px'
          options={{
            chart: {
              height: 80,
              dropShadow: {
                enabled: true,
                top: 1,
                left: 1,
                blur: 2,
                opacity: 0.2,
              },
            },
            stroke: {
              curve: "smooth",
              width: 2,
            },
            markers: {
              size: 0,
            },
            colors: ["#000000"],
            xaxis: {
              tooltip: {
                enabled: false,
              },
              labels: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
            },
            yaxis: {
              labels: {
                show: false,
              },
            },
            grid: {
              show: false,
            },
            tooltip: {
              x: {
                show: false,
              },
              y: {
                title: {
                  formatter: function formatter(val) {
                    return "";
                  },
                },
              },
            },
          }}
          series={[
            {
              data:
                details.length === 1
                  ? Array.from({ length: 7 }, () => 0)
                  : details.map((d) => d.total),
            },
          ]}
          loaderSize={24}
        />
      </div>
    </Link>
  );
};

export default DateCard;
