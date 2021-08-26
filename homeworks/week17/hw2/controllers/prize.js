const { Op } = require('sequelize') // eslint-disable-line
const db = require('../models')

const { Prize } = db

const prize = {
  index: (req, res) => {
    res.render('index', {
      url: req.path
    })
  },
  admin: (req, res) => {
    (async() => {
      const prizes = await Prize.findAll({})
      res.render('admin', {
        url: req.path,
        prizes
      })
    })()
  },
  addPrize: (req, res) => {
    res.render('add_prize', {
      url: req.path
    })
  },
  handleAddPrize: (req, res, next) => {
    const { prizeName, imageURL, caption, probability } = req.body
    if (!prizeName || !imageURL || !caption || !probability) {
      req.flash('errorMessage', '資料不齊全')
      return next()
    }
    if (isNaN(Number(probability))) {
      req.flash('errorMessage', '機率要是數字')
      return next()
    }
    (async() => {
      const prizes = await Prize.findAll({})
      let num = 0
      prizes.forEach((prize) => {
        num += prize.probability
      })
      num += Number(probability)
      if (num > 100) {
        req.flash('errorMessage', '機率超過100%')
        return next()
      }
      try {
        await Prize.create({
          prizeName,
          imageURL,
          caption,
          probability
        })
        res.redirect('/admin')
      } catch (err) {
        req.flash('errorMessage', err.toString())
        return next()
      }
    })()
  },
  updatePrize: (req, res) => {
    const { id } = req.params;
    (async() => {
      const prizes = await Prize.findOne({
        where: {
          id
        }
      })
      res.render('update_prize', {
        url: req.path,
        prizes
      })
    })()
  },
  handleupdatePrize: (req, res, next) => {
    const { id } = req.params
    const { prizeName, imageURL, caption, probability } = req.body
    if (!prizeName || !imageURL || !caption || !probability) {
      req.flash('errorMessage', '資料不齊全')
      return next()
    }
    if (isNaN(Number(probability))) {
      req.flash('errorMessage', '機率要是數字')
      return next()
    }
    if (Number(probability) % 1 !== 0) {
      req.flash('errorMessage', '機率為整數')
      return next()
    }
    (async() => {
      const prizes = await Prize.findAll({
        where: {
          id: {
            [Op.notIn]: [id]
          }
        }
      })
      let num = 0
      prizes.forEach((prize) => {
        num += prize.probability
      })
      num += Number(probability)
      if (num > 100) {
        req.flash('errorMessage', '機率超過100%')
        return next()
      }
    })();
    (async() => {
      try {
        const prizes = await Prize.findOne({
          where: {
            id
          }
        })
        await prizes.update({
          prizeName,
          imageURL,
          caption,
          probability
        })
        res.redirect('/admin')
      } catch (err) {
        req.flash('errorMessage', err.toString())
        return next()
      }
    })()
  },
  handleDeletePrize: (req, res) => {
    const { id } = req.params;
    // const { prizeName, imageURL, caption, probability } = req.body
    (async() => {
      const prizes = await Prize.findOne({
        where: {
          id
        }
      })
      await prizes.destroy()
      res.redirect('/admin')
    })()
  },
  getPrize: (req, res) => {
    (async() => {
      const prizes = await Prize.findAll({})
      const result = []
      let num = 100
      prizes.forEach((prize) => {
        const probability = Number(prize.probability)
        const { prizeName } = prize
        for (let i = 0; i < probability; i++) {
          result.push(prizeName)
        }
        num -= probability
      })
      if (num > 0) {
        for (let i = 0; i < num; i++) {
          result.push('銘謝惠顧')
        }
      }
      const random = Math.floor(Math.random() * 100)
      if (result[random] !== '銘謝惠顧') {
        const getPrize = await Prize.findOne({
          where: {
            prizeName: result[random]
          }
        })
        res.render('get_prize', {
          url: req.path,
          prize: getPrize
        })
      } else {
        res.render('get_prize', {
          url: req.path,
          prize: {
            prizeName: '銘謝惠顧',
            imageURL: 'https://upload.cc/i1/2021/08/08/X57Exh.jpg'
          }
        })
      }
    })()
  }
}

module.exports = prize
