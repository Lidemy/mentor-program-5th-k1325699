const express = require('express') // eslint-disable-line
const bodyParser = require('body-parser') // eslint-disable-line
const session = require('express-session') // eslint-disable-line
const flash = require('connect-flash') // eslint-disable-line

const app = express()
const port = 3001

// middleware設定
app.set('view engine', 'ejs')
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(flash())
app.use(express.static('public'))
app.use('/update_prize', express.static('public'))

// 全域使用
app.use((req, res, next) => {
  res.locals.username = req.session.username
  res.locals.errorMessage = req.flash('errorMessage')
  next()
})

// 導入controller
const prizeController = require('./controllers/prize')
// function
function redirectBack(req, res) {
  res.redirect('back')
}

// 使用
app.get('/', prizeController.index)
app.get('/admin', prizeController.admin)
app.get('/add_prize', prizeController.addPrize)
app.post('/add_prize', prizeController.handleAddPrize, redirectBack)
app.get('/update_prize/:id', prizeController.updatePrize)
app.post('/update_prize/:id', prizeController.handleupdatePrize, redirectBack)
app.get('/delete_prize/:id', prizeController.handleDeletePrize)
app.get('/get_prize/', prizeController.getPrize)

// 監聽
app.listen(port, () => {
  console.log(`抽獎網站， port ${port}!`)
})
