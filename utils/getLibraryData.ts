import { getBorrow } from "@/api";

export async function getLibraryData() {
  const data = await getBorrow();

  const groupedByDate = data.borrow.reduce(
    (acc: { [key: string]: any[] }, item) => {
      if (!acc[item.date as keyof typeof acc]) {
        acc[item.date] = [];
      }
      acc[item.date].push(item);
      return acc;
    },
    {}
  );
  const dates = Object.keys(groupedByDate).map((dateStr) => {
    const [year, month, day] = dateStr.split("-");
    return `${day}.${month}.${year}`;
  });
  const counts = Object.values(groupedByDate).map((items) => items.length);
  const groupedByCategory = data.borrow.reduce(
    (acc: { [key: string]: any[] }, item) => {
      if (!acc[item.category as keyof typeof acc]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    },
    {}
  );
  const totalDataCount = data.borrow.length;
  const threshold = 0.03;
  let categoryCounts = Object.keys(groupedByCategory).map((category) => ({
    name: category,
    data: groupedByCategory[category].length,
  }));
  let otherCategory = {
    name: "Diğer",
    data: 0,
  };
  categoryCounts = categoryCounts.filter((category) => {
    const ratio = category.data / totalDataCount;
    if (ratio < threshold) {
      otherCategory.data += category.data;
      return false;
    }
    return true;
  });
  if (otherCategory.data > 0) {
    categoryCounts.push(otherCategory);
  }

  return { dates, counts, categoryCounts };
}
