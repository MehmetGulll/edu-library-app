const axios = require("axios");
const cheerio = require("cheerio");

const url = "https://akillikart.deu.edu.tr/kutuphane/";

const fetchFullness = async () => {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    $('div:contains("Şuanki Kullanım Doluluğu")').each((index, element) => {
      console.log($(element).text());
    });
  } catch (error) {
    console.log("Error", error);
  }
};
fetchFullness();