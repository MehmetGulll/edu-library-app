import DateCard from '@/components/DateCard';
import Chart from '@/components/Chart';
import { getOccupancyByDateRange } from '../../utils/getOccupancy';
import Navbar from '@/components/Navbar';
import fs from 'fs';
import csv from 'csv-parser';
import csvToJson from 'csvtojson';
import { convertShelfNumberToCategory } from '../../utils/convertShelfNumberToCategory';

interface BorrowData {
  title: string;
  author: string;
  shelf_number: string;
  language: string;
  date: string;
}

const loadBorrowCSV = async () => {
  // load csv file from local

  const results: BorrowData[] = [];
  // read all csv files from /VERİLER folder (1,2,3,4,5,6,7,8,9,10) wait for all of them to finish
  const path = './VERİLER/2023/';

  const files = fs.readdirSync(path);

  files.forEach(async (file) => {
    const data = (await csvToJson().fromFile(
      path + file
    )) as unknown as BorrowData;
    // append to data.json
    fs.appendFile('data.json', JSON.stringify(data), (err: any) => {
      if (err) throw err;
      console.log('Data has been saved!');
    });
  });

  return results;
};

// const convertToJS = async () => {
//   // convert csv to js object
//   const csv = require('csvtojson')
//   const jsonArray = await csv().fromFile('data.csv');
//   console.log(jsonArray);
//   return jsonArray
// }
const loadFromFile = () => {
  const fs = require('fs');
  const data = fs.readFileSync('./VERİLER/merged.json', 'utf8');
  return JSON.parse(data);
};

const test = () => {
  // convert shelf to category
  const data = loadFromFile() as unknown as BorrowData[];
  const newData = data.map((item) => {
    const date = item.date.split(' ')[0];
    const [day, month, year] = date.split('-');
    return {
      ...item,
      date: `${year}.${month}.${day} ${item.date.split(' ')[1]}`,
    };
  });
  return newData;
};

const saveToFile = (data: BorrowData[]) => {
  // save to file as js object
  const fs = require('fs');
  fs.writeFile('data.json', JSON.stringify(data), (err: any) => {
    if (err) throw err;
    console.log('Data has been saved!');
  });
};

export default async function Home() {
  const occupancyArr = await getOccupancyByDateRange(
    '23.01.2024',
    '26.01.2024'
  );

  return (
    <div className='flex flex-col justify-center gap-4 p-8'>
      <Navbar />
      <Chart
        height={350}
        type='line'
        options={{
          xaxis: {
            categories: occupancyArr.map((item) => item.date),
            tooltip: {
              enabled: false,
            },
          },
        }}
        series={[
          {
            name: 'Total Occupancy',
            data: occupancyArr.map((item) => Number(item.occupancy.total)),
          },
        ]}
        width='100%'
      />
      <div className='container flex gap-2'>
        {occupancyArr.map((item) => (
          <DateCard {...item} key={item.date} />
        ))}
      </div>
    </div>
  );
}
