require('express-group-routes')
//Init Body parser
const bodyParser = require('body-parser')
//instantiate express module
const express = require('express')
// use express in app variable
const app = express()
//define the server port
const port = 5000

const CategoryControllers = require('./controllers/category')
const HomeControllers = require('./controllers/home')

//allow this app to receive incoming json request
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "*");
  res.header("Access-Control-Allow-Method", "*");
  next();
});


app.group("/api/v1", (router) =>{
  router.get('/category', CategoryControllers.index)
  router.post('/categories', CategoryControllers.store)
  router.get('/article', HomeControllers.index)
  router.get('/articles', HomeControllers.showArticle)
  router.get('/latestarticles', HomeControllers.showlatestArticle)
  // router.get('/todo/:id', TodosControllers.show )
  // router.patch('/todo/:id', TodosControllers.update )
  // router.delete('/todo/:id', TodosControllers.delete )
})

//when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port}!`))
