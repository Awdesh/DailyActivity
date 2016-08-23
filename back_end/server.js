// server.js
// where your node app starts

// init project
var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var _ = require('underscore');
var path = require('path');
var db = require('./db.js');
var PORT = process.env.PORT || 3000;
var IP = process.env.IP;

app.use(bodyParser.json());

// http://expressjs.com/en/starter/static-files.html
app.use(express.static(__dirname + '/../front_end'));
console.log(path.resolve(__dirname, '../front_end/views/index.html'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(path.resolve(__dirname, '../front_end/views/index.html'));
});

app.get("/activities", function(req, res) {
  // var queryParams = req.query;
  // console.log(queryParams);
  // var where = {};

  // if(queryParams.hasOwnProperty("personalText")){
  //         where.personalText = 
  //   console.log('activities get called');

  db.activities.findAll().then(function(activities) {
      res.json(activities);
    }),
    function(e) {
      res.status(500).send();
    };
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/activities", function(req, res) {
  var body = _.pick(req.body, 'personalText', 'professionalText', 'otherText');
  console.log("body is-:" + body);
  db.activities.create(body).then(function(activities) {
    if (activities)
      return res.json(activities.toJSON());
    else
      return res.status(404).send();
  }, function(e) {
    return res.status(404).json(e);
  });
});

// Simple in-memory store for now
var activities = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

db.sequelize.sync({
  force: true
}).then(function() {
  app.listen(PORT, function() {
    console.log('Express listening on port ' + PORT);
  });
});