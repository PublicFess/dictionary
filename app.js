var express = require('express')
  , http = require('http');


module.exports = exports = app = express();

app.main = new express.Router();

app.use(require('circumflex-request')());

require('./routers/index')

app.use(app.main);