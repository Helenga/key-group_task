const express = require('express')

const articles = require('./api/articles')

const app = express();
const port = 4000

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next()
});

app.get('/articles', (req, res, next) => {
  res.json(articles);
  next()
})

app.listen(port, () => {
  console.log(`Server Starts at ${port}`)
})