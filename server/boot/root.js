'use strict';
var http = require('http');

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/suggestions/', function(req, res) {
      const suggestion = require('../suggestion.js');
      res.send({suggestions: suggestion(req)});
  })
  server.use(router);
};
