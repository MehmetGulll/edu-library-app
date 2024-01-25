const axios = require("axios");
const cheerio = require("cheerio");

const url = "https://akillikart.deu.edu.tr/kutuphane/";

const fetchFullness = async () => {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    $('div:contains("Şuanki Kullanım Doluluğu")').each((index, element) => {
      const text = $(element).text();
      const usage = text.split(':')[1].split('Toplam')[0].trim();
      console.log(`Şu anki doluluk: ${usage}`);
      const totalCapacity = text.split(':')[2].split('Doluluk')[0].trim();
      console.log(`Max doluluk: ${totalCapacity}`)
    });

  } catch (error) {
    console.log("Error", error);
  }
};
fetchFullness();
