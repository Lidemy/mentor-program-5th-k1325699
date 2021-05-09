const request = require('request')

request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (err, response, body) => {
    if (err) {
      console.log('err', err)
      return
    }
    let data
    try {
      data = JSON.parse(body)
    } catch (err) {
      console.log('err', err)
      return
    }
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].id, data[i].name)
    }
  }
)
