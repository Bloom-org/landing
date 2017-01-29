var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();
var methodOverride = require('method-override');
var morgan = require('morgan');
var port = process.env.PORT || 2000;

app.use(function (req, res, next){
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  methodOverride('X-HTTP-Method-Override');
  bodyParser.urlencoded({ extended: true });
  next();
});

app.use(express.static(__dirname));

app.use(morgan('dev'));

require('./client.app.routes')(app); // pass our application into our routes

app.listen(port);
console.log('Server running on port ' + port);
