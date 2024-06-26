import fs from "fs";
const url = "https://akillikart.deu.edu.tr/kutuphane/";

export type DateFormat = `${number}.${number}.${number}`;

interface Occupancy {
  total: string;
  current: string;
  capacity: string;
  date?: DateFormat;
}

type GetOccupancy = (date: DateFormat) => Promise<Occupancy>;

const getOccupancy: GetOccupancy = async (date) => {
  try {
    console.info("Fetching", date);
    const response = await fetch(url + `?date_baslama=${date}`);
    const html = await response.text();

    const parsedHtml = html
      .split('<div class="col-md-4" align="center" style="color:#336699;">')[1]
      .split("</div>")[0]
      .trim()
      .replaceAll("\n", "")
      .replaceAll(/<br>\s*<br>/g, "\n")
      .replaceAll(/<br>/g, "\n");

    const splitted = parsedHtml.split("\n").slice(1, 4);

    const total = splitted[0].split(": ")[1];
    const current = splitted[1].split(": ")[1];
    const capacity = splitted[2].split(": ")[1];

    return { total, current, capacity };
  } catch (error) {
    // retry
    console.error("Error", error);
    return { total: "0", current: "0", capacity: "0" };
  }
};

const flipDate = (date: DateFormat) => {
  const [day, month, year] = date.split(".");
  return `${month}.${day}.${year}`;
};

type GetOccupancyByDateRange = (
  start: DateFormat,
  end: DateFormat
) => Occupancy[];

const getOccupancyByDateRange: GetOccupancyByDateRange = (start, end) => {
  const startDate = new Date(flipDate(start));
  const endDate = new Date(flipDate(end));
  const alreadyFetched = JSON.parse(fs.readFileSync("occupancy.json", "utf-8"));
  const dateRange: string[] = [];
  while (startDate <= endDate) {
    if (
      alreadyFetched.find(
        (x: { date: string }) =>
          x.date === new Date(startDate).toLocaleDateString("tr-TR")
      )
    ) {
      startDate.setDate(startDate.getDate() + 1);
      continue;
    }
    dateRange.push(new Date(startDate).toLocaleDateString("tr-TR"));
    startDate.setDate(startDate.getDate() + 1);
  }

  let progress = 0;
  const result: Occupancy[] = [];
  const fetchOc = async () => {
    for (const date of dateRange) {
      let occupancy = await getOccupancy(date as DateFormat);
      progress++;
      console.info(
        "Fetced",
        date,
        occupancy.total,
        "Progress",
        progress,
        "/",
        dateRange.length
      );

      // add date to array
      fs.appendFileSync(
        "occupancy.json",
        JSON.stringify({ date, occupancy }, null, 2)
      );
      result.push({ date: date as DateFormat, ...occupancy });
    }
  };
  fetchOc();
  return result;
};

const checkOccupancyIfitIsReallyZero = async () => {
  const ocs = JSON.parse(fs.readFileSync("occupancy.json", "utf-8")).filter(
    (x: { occupancy: Occupancy }) => x.occupancy.total === "0"
  );
  let progress = 0;

  for (const oc of ocs) {
    const occupancy = await getOccupancy(oc.date);
    progress++;
    console.info(
      "Fetced",
      oc.date,
      occupancy.total,
      "Progress",
      progress,
      "/",
      ocs.length
    );
    if (occupancy.total !== "0") {
      console.info("Occupancy is not 0", oc.date, occupancy.total);
      fs.writeFileSync(
        "occupancy.json",
        JSON.stringify(
          JSON.parse(fs.readFileSync("occupancy.json", "utf-8")).map(
            (x: { date: string }) =>
              x.date === oc.date ? { date: oc.date, occupancy } : x
          ),
          null,
          2
        )
      );
    }
  }
};

const flipDateJson = () => {
  const ocs = JSON.parse(fs.readFileSync("occupancy.json", "utf-8")).map(
    (x: any) => {
      return {
        ...x,
        date: x.date.split(".").reverse().join("."),
      };
    }
  );

  fs.writeFileSync("occupancy.json", JSON.stringify(ocs, null, 2));
};

export {
  getOccupancy,
  getOccupancyByDateRange,
  checkOccupancyIfitIsReallyZero,
  flipDateJson,
};
