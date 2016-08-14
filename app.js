var app, bodyParser, config, express, path;

path = require('path');

express = require('express');

bodyParser = require('body-parser');

config = require('./config');

app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('service', path.basename(__dirname));

app.use('/', express["static"](__dirname + "/public"));

app.listen(config.port, function() {
  return console.log("Seth Sun running on " + config.port);
});

app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/public/index.html');
});