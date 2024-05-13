import { load } from "cheerio";
const getLatestAnnouncements = async () => {
  const response = await fetch(
    "https://kutuphane.deu.edu.tr/tr/category/duyuru-arsivi/",
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    }
  );
  const $ = load(await response.text());

  const titles: string[] = [];
  $(".no-top").each((i, e) => {
    titles.push($(e).text().trim());
  });

  const descriptions: string[] = [];
  $(".description").each((i, e) => {
    descriptions.push($(e).text().trim().split("dakika")[1]);
  });

  const links: string[] = [];
  $(".read-more").each((i, e) => {
    links.push($(e).attr("href") ?? "");
  });

  const content = links.map(async (link, i) => {
    const response = await fetch(link, {
      next: {
        revalidate: 60 * 60 * 24,
      },
    });
    const $ = load(await response.text());
    const article = $("article");
    const date = article
      .find(".date")
      .text()
      .trim()
      .split(": ")[1]
      .replaceAll("-", ".");
    // grab all html after .post-modified-info
    const content = article.find(".post-modified-info").nextAll().toString();
    // change all anchor tags to open in new tab
    const newContent = content.replace(/<a /g, '<a target="_blank" ');

    return { date, content: newContent };
  });

  const contents = await Promise.all(content);

  const announcements = titles.map((title, i) => ({
    title,
    description: descriptions[i],
    link: links[i],
    date: contents[i].date,
    content: contents[i].content,
  }));

  return {
    titles,
    descriptions,
    links,
    announcements,
  };
};
export default getLatestAnnouncements;
