var app = require('../app').main

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/hello', function (req, res, next) {
  res.send('hello from hello page.')
});

app.get('/hello/:name', function (req, res, next) {
  res.send('hello ' + req.getString('name'))
});