const request = require('request')
const process = require('process')

const action = process.argv[2]
if (action === 'list') {
  listBooks()
} else if (action === 'read') {
  readBook(process.argv[3])
} else if (action === 'delete') {
  deleteBook(process.argv[3])
} else if (action === 'create') {
  createBook(process.argv[3])
} else if (action === 'updata') {
  updataBook(process.argv[3], process.argv[4])
} else {
  console.log('錯誤')
}

function listBooks() {
  request(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20',
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
}

function readBook(id) {
  request(
    `https://lidemy-book-store.herokuapp.com/books/${id}`,
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
      console.log(data.name)
    }
  )
}

function deleteBook(id) {
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books/${id}`,
    (err, response, body) => {
      if (err) {
        console.log('err', err)
        return
      }
      console.log('刪除成功')
    }
  )
}

function createBook(name) {
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books/',
      form: {
        name
      }
    },
    (err, response, body) => {
      if (err) {
        console.log('err', err)
        return
      }
      console.log(body)
    }
  )
}

function updataBook(id, name) {
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${id}`,
      form: {
        name
      }
    },
    (err, response, body) => {
      if (err) {
        console.log('err', err)
        return
      }
      console.log(body)
    }
  )
}
