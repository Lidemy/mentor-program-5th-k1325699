const db = require('../models')

const { Article } = db

const articleConstroller = {
  index: (req, res) => {
    (async() => {
      const articles = await Article.findAll({
        limit: 5,
        order: [['id', 'DESC']]
      })
      res.render('index', {
        url: req.path,
        articles
      })
    })()
  },
  admin: (req, res) => {
    const { username } = req.session
    if (!username) {
      return res.redirect('/')
    }
    (async() => {
      const articles = await Article.findAll({
        order: [['id', 'DESC']]
      })
      res.render('admin', {
        url: req.path,
        articles
      })
    })()
  },
  edit: (req, res) => {
    const { username } = req.session
    if (!username) {
      return res.redirect('/')
    }
    (async() => {
      const articles = await Article.findAll()
      res.render('article/edit', {
        url: req.path,
        articles
      })
    })()
  },
  addArticle: (req, res, next) => {
    const { title, content } = req.body
    if (!title || !content) {
      req.flash('errorMessage', '資料不齊全')
      return next()
    }
    (async() => {
      try {
        await Article.create({
          title,
          content
        })
        res.redirect('/admin')
      } catch (err) {
        req.flash('errorMessage', err.toString())
        next()
      }
    })()
  },
  allArticle: (req, res) => {
    (async() => {
      const articles = await Article.findAll({
        order: [['id', 'DESC']]
      })
      res.render('article/all_article', {
        url: req.path,
        articles
      })
    })()
  },
  readAllArticle: (req, res) => {
    (async() => {
      const articles = await Article.findOne({
        where: {
          id: req.params.id
        }
      })
      res.render('article/article', {
        url: req.path,
        articles
      })
    })()
  },
  updateArticle: (req, res) => {
    const { username } = req.session
    if (!username) {
      return res.redirect('/')
    }
    (async() => {
      const articles = await Article.findOne({
        where: {
          id: req.params.id
        }
      })
      res.render('article/update_article', {
        url: req.path,
        articles
      })
    })()
  },
  handleUpdateArticle: (req, res, next) => {
    const { title, content } = req.body
    const { username } = req.session
    const { id } = req.params.id
    if (!username) {
      return res.redirect('/')
    }
    if (!title || !content) {
      req.flash('errorMessage', '資料不齊全')
      return next()
    }
    (async() => {
      try {
        const articles = await Article.findOne({
          where: {
            id
          }
        })
        await articles.update({
          title,
          content
        })
        res.redirect(`/article/${id}`)
      } catch (err) {
        req.flash('errorMessage', err.toString())
        return next()
      }
    })()
  },
  handleDeleteArticle: (req, res) => {
    const { username } = req.session
    const { id } = req.params
    if (!username) {
      return res.redirect('/')
    }
    (async() => {
      try {
        const articles = await Article.findOne({
          where: {
            id
          }
        })
        await articles.destroy()
        res.redirect('/admin')
      } catch (err) {
        console.log(err)
        res.redirect('/')
      }
    })()
  }
}

module.exports = articleConstroller
