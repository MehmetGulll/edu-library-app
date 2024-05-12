import { Occupancy } from "@/generated/graphql";
import Link from "next/link";
import Chart from "../Chart";
import Card from "../Card";

export interface DateCardProps extends Occupancy {
  details: Occupancy[];
}

const DateCard = ({ date, current, total, details }: DateCardProps) => {
  return (
    <Card>
      <Link href={`/${date}`} className='flex flex-col'>
        <div className='flex justify-center gap-1 [&>div:last-child]:!min-h-[80px] '>
          <div>
            <div className='flex flex-col gap-1'>
              <div
                className='text-lg font-semibold'
                style={{ color: "#2e3134" }}
              >
                {date.split("-").reverse().join(".")}
              </div>
            </div>
            <div className='flex gap-6'>
              <div className='flex flex-col gap-1'>
                <div className='font-semibold text-[#202224] opacity-70'>
                  Toplam:
                </div>
                <div className='text-lg font-bold text-[#202224]'>{total}</div>
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
    </Card>
  );
};

export default DateCard;
