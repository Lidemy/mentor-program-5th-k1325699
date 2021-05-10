const request = require('request')

const params = process.argv[2]
request(
  `https://restcountries.eu/rest/v2/name/${params}`,
  (err, response, body) => {
    if (err) {
      console.log('err', err)
      return
    }
    const data = JSON.parse(body)
    if (data.status === 404) {
      console.log('找不到國家資訊')
    } else {
      for (let i = 0; i < data.length; i++) {
        console.log('國家:', data[i].name)
        console.log('首都:', data[i].capital)
        console.log('貨幣:', data[i].currencies[0].code)
        console.log('國碼:', data[i].callingCodes[0])
      }
    }
  }
)
