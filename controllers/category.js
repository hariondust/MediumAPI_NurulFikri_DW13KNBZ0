const models = require('../models')
const Category = models.category

exports.index = (req, res) => {
  Category.findAll()
  .then(categories => res.send(categories))
  .catch(err => res.send(err))
}

exports.store = (req, res) => {
  Category.create({name:req.body.name}).then(categories => {
    res.send({categories})
  })
}
