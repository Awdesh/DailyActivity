var assert = require('assert');
var jq = require('./jquery.min.js');
var jsdom = require('jsdom');
var window = jsdom.jsdom().defaultView;
document = window.document;

var $ = window.$;
// // var jquery = './jquery.min.js';
// var demo = 'demo.js';
// console.log('here');
// var client = require('../public/client.js').getActivities;

describe('client', function() {
    describe('getActivities', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});