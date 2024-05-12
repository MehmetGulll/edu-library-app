import { getBorrow } from "@/api";
import { GetBorrowByDayQuery, GetBorrowQuery } from "@/generated/graphql";

function translateCategory(category: string): string {
  const translations: { [key: string]: string } = {
    Science: "Bilim",
    Law: "Hukuk",
    "Language and Literature": "Dil ve Edebiyat",
    Technology: "Teknoloji",
    "Social Sciences": "Sosyal Bilimler",
    "Philosophy, Psychology, Religion": "Felsefe, Psikoloji, Din",
    "Fine Arts": "Güzel Sanatlar",
    "Arts & recreation": "Sanat ve Eğlence",
    Literature: "Edebiyat",
    "World History and History of Europe, Asia, Africa, Australia, New Zealand, etc.":
      "Dünya Tarihi",
  };
  return translations[category] || category;
}

export async function getLibraryData(
  data: GetBorrowQuery | GetBorrowByDayQuery | undefined
) {
  if (!data?.borrow) {
    return { dates: [], counts: [], categoryCounts: [] };
  }
  const groupedByDate = data.borrow?.reduce(
    (acc: { [key: string]: NonNullable<typeof data.borrow>[0][] }, item) => {
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

  const groupedByCategory = data.borrow?.reduce(
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
    name: translateCategory(category),
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
