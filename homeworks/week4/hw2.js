const request = require('request')
const process = require('process')

const action = process.argv[2]
const params = process.argv[3]
const update = process.argv[4]
if (action === 'list') {
  request(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (err, response, body) => {
      const data = JSON.parse(body)
      for (let i = 0; i < data.length; i++) {
        console.log(data[i].id, data[i].name)
      }
    }
  )
}
if (action === 'read') {
  request(
    `https://lidemy-book-store.herokuapp.com/books/${params}`,
    (err, response, body) => {
      const data = JSON.parse(body)
      console.log(data.name)
    }
  )
}
if (action === 'delete') {
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books/${params}`,
    (err, response, body) => {
      console.log(body)
    }
  )
}
if (action === 'create') {
  request.post(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${params}`,
      form: {
        name: params
      }
    },
    (err, response, body) => {
      console.log(body)
    }
  )
}
if (action === 'updata') {
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${params}`,
      form: {
        name: update
      }
    },
    (err, response, body) => {
      console.log(body)
    }
  )
}
