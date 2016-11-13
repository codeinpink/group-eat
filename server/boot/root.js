'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/suggestions/', function(req, res) {
      const suggestion = require('server/boot/suggestion.js');
      res.send({suggestions: suggestion.getSuggestion(req)});
  })
  server.use(router);
};
