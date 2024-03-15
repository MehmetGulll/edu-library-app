
const getData = async () => {

    var urlencoded = new URLSearchParams();
    urlencoded.append("tarih_1", "1.01.2023");
    urlencoded.append("tarih_2", "1.01.2023");
    urlencoded.append("kapi_sec", "1");
    urlencoded.append("kapi_ip", "172.22.52.111");
    urlencoded.append("rapor_tip", "1");
    urlencoded.append("rapor_getir", "");
    const response = await fetch("https://akillikart.deu.edu.tr/kutuphane/KutuphaneRapor.php", {
        method: "POST",
        body: {
            tarih_1: "1.01.2023",
            tarih_2: "1.01.2023",
            kapi_sec: "1",
            kapi_ip: "172.22.52.111",
            rapor_tip: "1",
            rapor_getir: "",
        },
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    })
    const html = await response.text()

    //save to file 
    const fs = require('fs');
    fs.writeFile('data.html', html, (err) => {
        if (err) throw err;
        console.log('Data has been saved!');
    });
    return response
}


// console.log(getData())


// var myHeaders = new Headers();
// myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0");
// myHeaders.append("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8");
// myHeaders.append("Accept-Language", "en-US,en;q=0.5");
// myHeaders.append("Accept-Encoding", "gzip, deflate, br");
// myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
// myHeaders.append("Origin", "https://akillikart.deu.edu.tr");
// myHeaders.append("DNT", "1");
// myHeaders.append("Connection", "keep-alive");
// myHeaders.append("Referer", "https://akillikart.deu.edu.tr/kutuphane/KutuphaneRapor.php?");
// myHeaders.append("Upgrade-Insecure-Requests", "1");
// myHeaders.append("Sec-Fetch-Dest", "document");
// myHeaders.append("Sec-Fetch-Mode", "navigate");
// myHeaders.append("Sec-Fetch-Site", "same-origin");
// myHeaders.append("Sec-Fetch-User", "?1");
// myHeaders.append("Pragma", "no-cache");
// myHeaders.append("Cache-Control", "no-cache");


// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: urlencoded,
//   redirect: 'follow'
// };

// fetch("https://akillikart.deu.edu.tr/kutuphane/KutuphaneRapor.php", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

const loadBorrowCSV = async () => {
    // load csv file from local
    const fs = require('fs');
    const csv = require('csv-parser');
    const results = [];
    // read all csv files from /VERİLER folder (1,2,3,4,5,6,7,8,9,10)

    fs.createReadStream(`./VERİLER/${i}.csv`)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            console.log(results);
        });


}

const convertToJS = async () => {
    // convert csv to js object
    const csv = require('csvtojson')
    const jsonArray = await csv().fromFile('data.csv');
    console.log(jsonArray);
    return jsonArray
}

const saveToFile = async (data) => {
    // save to file as js object
    const fs = require('fs');
    fs.writeFile('data.js', JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log('Data has been saved!');
    });
}

saveToFile(loadBorrowCSV())

// load json file from local
const loadFromFile = async () => {
    const fs = require('fs');
    const data = fs.readFileSync('./VERİLER/merged.json', "utf8");
    return JSON.parse(data)
}

const convertShelftoCategory = () => {
    // convert shelf to category
    const data = loadFromFile()
    const newData = data.map((item) => {
        const category = item.shelf_number.charAt(0)
        return {
            ...item,
            category: category(convertShelftoCategory(category))
        }
    })
    return newData
}
