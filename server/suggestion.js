'use strict';


module.exports = function(customers){
  var purchases = {}
  for(var id in customers){
    console.log(customers[id])
   getTransactionHistory(customers[id], function(data) {
       purchases[id] = data;
   })
  }
  console.log(purchases)

  function matrixAlgorithm(purchases) {
     var scoreMatrix = {}
     var have_been ={}
     //build the first row using one of the accounts Restaurants
     for (var i = 0; i < purchases[0].length; i++) {
       var restaurant_id =  purchases[0][i]['_id']
       have_been[restaurant_id] = have_been[restaurant_id] ? have_been[restaurant_id]*1.01 : 1
     }

     for (var j = 1; j < purchases.length; j++){
       var restaurants = purchases[j]
       for (var i = 0; i < have_been.length; i++){
         var rest = have_been[i]
         var count = occurence(rest, restaurants)
         if (count == 1) {
           have_been[i]++;
         }
         if (count > 1) {
           have_been[i] = have_been[i]*1.01;
         }
       }
     }
  }

  function occurence(search, dataset){
    var count = dataset.reduce(function(n,val){
      return n + (val === search);
    },0);
    return count
  }


  function getTransactionHistory(customerid) {
          var dataString = JSON.stringify(customerid);
          var headers = {'Content-Type': 'application/json'};
          var apikey = "582757c5360f81f104547b42";
          var host = "api.reimaginebanking.com";
          var endpoint = "/customers/"+customerid+"/accounts?key="+apikey;
          var options = {
              host: host,
              path: endpoint,
              method: "GET",
              headers: headers
          };
          console.log(endpoint)
          var http = require('http');
          var req = http.get(options, function(res) {
              var responseString = '';
              res.on('data', function(data) {
                  responseString += data;
              });

              res.on('end', function() {
                  console.log(responseString);
                  var responseObject = JSON.parse(responseString);
                  return responseObject;
              });
          });

          req.end();
  }

}
