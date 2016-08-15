// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var _ = require('underscore');
var path = require('path');
// var db = require('db.js');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static(__dirname + '/../front_end'));
	console.log(path.resolve(__dirname ,'../front_end/views/index.html'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  console.log(path.resolve(__dirname ,'../front_end/views/index.html'));
	response.sendFile(path.resolve(__dirname ,'../front_end/views/index.html'));
});

app.get("/dreams", function (request, response) {
  response.send(dreams);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/activities", function (request, response) {
  console.log(request.query.activity);
  activities.push(request.query.activity);
  response.sendStatus(200);
});

// app.post('/todos', middleware.requireAuthentication, function(req, res){
//     var body = _.pick(req.body, 'description', 'completed');
//     db.todo.create(body).then(function(todo){
//         if(todo)
//             return res.json(todo.toJSON());
//         else
//             return res.status(404).send();
//     }, function(e){
//         return res.status(404).json(e);
//     });
// });

// Simple in-memory store for now
var activities = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
  ];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});