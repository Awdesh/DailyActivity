var express = require('express');
var assert = require('assert');
var superagent = require('superagent');
var URL = 'http://localhost:8080';

describe('server', function() {
  var server;

  before(function() {
    var app = express();
    models = require('../models/activities.js');
    app.use(require('../server'));
  // server = app.listen(8080);
  });

  // after(function() {
  //   server.close();
  // });

  it('testing get activities', function(done) {
    var url = URL + '/activities';
    superagent.get(url, function(err, res) {
      assert.ifError(err);
      assert.equal(res.status, 200);
      done();
    });
  });
});
// var app = require('../serv');
// var assert = require('assert');
// var superagent = require('superagent');
//
// describe('server', function() {
//   var server;
//
//   beforeEach(function() {
//     server = app().listen(3000);
//   });
//
//   afterEach(function() {
//     server.close();
//   });
//
//   it('prints out "Hello, world" when user goes to /', function(done) {
//     superagent.get('http://localhost:3000/', function(error, res) {
//       assert.ifError(error);
//       assert.equal(res.status, 200);
//       // assert.equal(res.text, "Hello, world!");
//       done();
//     });
//   });
// });
