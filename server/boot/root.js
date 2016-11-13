'use strict';
var http = require(http)
module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/suggestions/', function(req, res) {
      const suggestion = require('server/boot/suggestion.js');
      res.send({suggestions: suggestion.getSuggestion(req)});
  })
  server.use(router);
};

function getTransactionHistory(customerid) {
        var dataString = JSON.stringify(data);
        var headers = {};
        var host = "http://api.reimaginebanking.com"
        var endpoint = "/customer/"+"customerid+/accounts?key=b51f1f20dc792805a0d31287e4da778b"

    }
