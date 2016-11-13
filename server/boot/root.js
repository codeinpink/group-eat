'use strict';
var http = require('http');

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/suggestions/', function(req, res) {
      const suggestion = require('../suggestion.js');
      res.send({suggestions: suggestion.getSuggestion(req)});
  })
  server.use(router);
};

function getTransactionHistory(customerid) {
        var dataString = JSON.stringify(data);
        var headers = {};
        var apikey = "582757c5360f81f104547b42"
        var host = "http://api.reimaginebanking.com"
        var endpoint = "/customers/"+customerid+"/accounts?key="+apikey

    }
