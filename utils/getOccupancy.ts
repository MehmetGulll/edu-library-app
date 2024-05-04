const url = "https://akillikart.deu.edu.tr/kutuphane/"

export type DateFormat = `${number}.${number}.${number}`

interface Occupancy {
  total: string
  currentOccupancy: string
  capacity: string
}

type GetOccupancy = (date: DateFormat) => Promise<Occupancy>

const getOccupancy: GetOccupancy = async (date) => {
  try {
    const response = await fetch(url + `?date_baslama=${date}`, {
      next: {
        revalidate:
          date === new Date().toLocaleDateString("tr-TR")
            ? 60
            : Number.MAX_VALUE,
      },
    })
    const html = await response.text()

    const parsedHtml = html
      .split('<div class="col-md-4" align="center" style="color:#336699;">')[1]
      .split("</div>")[0]
      .trim()
      .replaceAll("\n", "")
      .replaceAll(/<br>\s*<br>/g, "\n")
      .replaceAll(/<br>/g, "\n")

    const splitted = parsedHtml.split("\n").slice(1, 4)

    const total = splitted[0].split(": ")[1]
    const currentOccupancy = splitted[1].split(": ")[1]
    const capacity = splitted[2].split(": ")[1]

    return { total, currentOccupancy, capacity }
  } catch (error) {
    console.error("Error", error)
    return { total: "0", currentOccupancy: "0", capacity: "0" }
  }
}

const flipDate = (date: DateFormat) => {
  const [day, month, year] = date.split(".")
  return `${month}.${day}.${year}`
}

export interface OccupancyWithDate {
  date: DateFormat
  occupancy: Occupancy
}

type GetOccupancyByDateRange = (
  start: DateFormat,
  end: DateFormat
) => Promise<OccupancyWithDate[]>

const getOccupancyByDateRange: GetOccupancyByDateRange = (start, end) => {
  const startDate = new Date(flipDate(start))
  const endDate = new Date(flipDate(end))
  const dateRange = []
  while (startDate <= endDate) {
    dateRange.push(new Date(startDate).toLocaleDateString("tr-TR"))
    startDate.setDate(startDate.getDate() + 1)
  }

  return Promise.all(
    dateRange.map(async (date) => {
      const occupancy = await getOccupancy(date as DateFormat)
      return { date: date as DateFormat, occupancy }
    })
  )
}

export { getOccupancy, getOccupancyByDateRange }