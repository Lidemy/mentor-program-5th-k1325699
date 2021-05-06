const request = require('request')

request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (err, response, body) => {
    const data = JSON.parse(body)
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].id, data[i].name)
    }
  }
)
