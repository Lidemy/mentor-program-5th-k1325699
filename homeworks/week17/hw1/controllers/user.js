const bcrypt = require('bcrypt') // eslint-disable-line
const db = require('../models')

const saltRound = 10
const { User } = db

const userConstroller = {
  login: (req, res) => {
    res.render('user/login', {
      url: req.path
    })
  },
  handleLogin: (req, res, next) => {
    const { username, password } = req.body
    if (!username || !password) {
      req.flash('errorMessage', '資料不齊全')
      return next()
    }

    (async() => {
      try {
        const users = await User.findOne({
          where: {
            username
          }
        })
        if (!users) {
          req.flash('errorMessage', '帳號或密碼不對')
          return next()
        }
        bcrypt.compare(password, users.password, (err, result) => {
          if (err || !result) {
            req.flash('errorMessage', '帳號或密碼不對')
            return next()
          }
          req.session.username = users.username
          res.redirect('/admin')
        })
      } catch (err) {
        req.flash('errorMessage', err.toString())
        return next()
      }
    })()
  },
  register: (req, res) => {
    res.render('user/register', {
      url: req.path
    })
  },
  handleRegister: (req, res, next) => {
    const { username, password } = req.body
    if (!username || !password) {
      req.flash('errorMessage', '資料不齊全')
      return next()
    }
    bcrypt.hash(password, saltRound, (err, hash) => {
      if (err) {
        req.flash('errorMessage', err.toString())
        return next()
      }
      (async() => {
        try {
          await User.create({
            username,
            password: hash
          })
          req.session.username = username
          res.redirect('/')
        } catch (err) {
          req.flash('errorMessage', err.toString())
          return next()
        }
      })()
    })
  },
  handleLogout: (req, res) => {
    req.session.username = null
    res.redirect('/')
  }
}

module.exports = userConstroller
