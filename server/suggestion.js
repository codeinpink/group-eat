'use strict';


module.exports = function(customers){
  var purchases = {}
  var loaded = 0
  for(var id in customers){
    //console.log(customers[id])
   getTransactionHistory(customers[id], function(data) {
       purchases[id] = data;
       console.log("loaded")
       loaded++;
   })
  }

  /*
  while(1){
    if(loaded == customers.length){
      break;
    }
}*/
  //while(loaded < customers.length);
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


  function getTransactionHistory(customerid, callback) {
          var dataString = JSON.stringify(customerid);
          var headers = {'Content-Type': 'application/json'};
          var apikey = "b51f1f20dc792805a0d31287e4da778b";
          var host = "api.reimaginebanking.com";
          var endpoint = "/acccounts/"+customerid+"/purchases?key="+apikey;
          var options = {
              host: host,
              path: endpoint,
              headers: headers
          };

          var http = require('http');
          return http.get(options, function(response) {
              var responseString = '';
              response.on('data', function(data) {
                  responseString += data;
                  console.log(responseString);
              });

              response.on('end', function() {
                  //console.log(responseString);
                  var responseObject = JSON.parse(responseString);
                  console.log(responseObject);
                  return responseObject;
              });
          });

          //req.end();
  }

}
