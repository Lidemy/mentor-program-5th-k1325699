// middleware引入
const express = require('express') // eslint-disable-line
const bodyParser = require('body-parser') // eslint-disable-line
const session = require('express-session') // eslint-disable-line
const flash = require('connect-flash') // eslint-disable-line

const app = express()
const port = 5001
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
app.use('/article', express.static('public'))
app.use('/update_article', express.static('public'))
// 全域設定
app.use((req, res, next) => {
  res.locals.username = req.session.username
  res.locals.errorMessage = req.flash('errorMessage')
  next()
})
// 導入 controller
const articleConstroller = require('./controllers/article')
const userConstroller = require('./controllers/user')

// 出錯function
function redirectBack(req, res) {
  res.redirect('back')
}

// 路徑設置
app.get('/', articleConstroller.index)
// 帳號相關
app.get('/login', userConstroller.login)
app.post('/login', userConstroller.handleLogin, redirectBack)
app.get('/register', userConstroller.register)
app.post('/register', userConstroller.handleRegister, redirectBack)
app.get('/logout', userConstroller.handleLogout)

// 文章相關
app.get('/admin', articleConstroller.admin)
app.get('/edit', articleConstroller.edit)
app.post('/add_article', articleConstroller.addArticle, redirectBack)
app.get('/all_article', articleConstroller.allArticle)
app.get('/article/:id', articleConstroller.readAllArticle)
app.get('/update_article/:id', articleConstroller.updateArticle)
app.post('/update_article/:id', articleConstroller.handleUpdateArticle, redirectBack)
app.get('/delete_article/:id', articleConstroller.handleDeleteArticle)

app.listen(port, () => {
  console.log(`部落格開啟，port ${port}`)
})
