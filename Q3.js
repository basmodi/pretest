const axios = require('axios');
const cheerio = require('cheerio');

let option = {
    headers: {
        Cookie: "hasCookie=true"
    }
}
axios.get('https://codequiz.azurewebsites.net/', option)
  .then(res => {
    const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
    console.log('Status Code:', res.status);
    console.log('Date in Response header:', headerDate);

    const datas = res.data;
    const html = cheerio.load(datas);
    var args = process.argv.slice(2);


      const results = html("body > table > tbody > tr").map((i, element) => ({
        
        "Fund Name": html(element).find('td:nth-of-type(1)').text().trim(),
        "Nav": html(element).find('td:nth-of-type(2)').text().trim(),
        "Bid": html(element).find('td:nth-of-type(3)').text().trim(),
        "Offer": html(element).find('td:nth-of-type(4)').text().trim(),
        "Change": html(element).find('td:nth-of-type(5)').text().trim()
            
      })).get()

      let find = results.find(result => result["Fund Name"] == args);

      console.log(find.Nav);
      return find
  })
  .catch(err => {
    console.log('Error: ', err.message);
  });