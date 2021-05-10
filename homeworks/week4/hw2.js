const request = require('request')

const action = process.argv[2]
switch (action) {
  case 'list':
    listBooks()
    break
  case 'read':
    readBook(process.argv[3])
    break
  case 'delete':
    deleteBook(process.argv[3])
    break
  case 'create':
    createBook(process.argv[3])
    break
  case 'update':
    updataBook(process.argv[3], process.argv[4])
    break
  default:
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
      if (data.name === undefined) {
        console.log('沒有此id')
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
      if (response.statusCode === 404) {
        console.log('查無此id')
        return
      }
      console.log('刪除成功')
    }
  )
}

function createBook(name) {
  if (process.argv[3] === undefined) {
    console.log('請輸入書名')
    return
  }
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
