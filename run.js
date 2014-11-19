var app = require('./app')
  , http = require('http');

var server = http.createServer(app).listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port)

});