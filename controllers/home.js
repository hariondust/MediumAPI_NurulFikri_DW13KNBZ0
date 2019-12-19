const models = require('../models')
const Article = models.article
const User = models.user
const Category = models.category

exports.index = (req, res) => {
  Article.findAll()
  .then(articles => res.send(articles))
  .catch(err => res.send(err))
}

exports.showArticle = (req, res) => {
  Article.findAll({
    include:
    [
      {
        model: Category,
        as: "categoryId"
      },
      {
        model: User,
        as: "userId"
      }
    ]
  })
  .then(articles => res.send(articles))
  .catch(err => res.send(err))
}

exports.showlatestArticle = (req, res) => {
  Article.findAll({
    include:
    [
      {
        model: Category,
        as: "categoryId"
      },
      {
        model: User,
        as: "userId"
      }
    ]
    // dont use this because this is backend, if you want to limit to particular article do it in frontend (using slice for limit and reverse for descending)
    // order:
    // [
    //     ['id', 'DESC'],
    // ],
    // limit: 6
  })
  .then(articles => res.send(articles))
  .catch(err => res.send(err))
}

exports.store = (req, res) => {
  Article.create({name:req.body.name}).then(articles => {
    res.send({articles})
  })
}
