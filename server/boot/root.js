'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/suggestions/', function(req, res) {
      res.send({suggestions: ['A']});
  })
  server.use(router);
};
