'use strict';

module.exports = function(customers){
  var purchases
  for(var id in friends){
   purchase[i] = getTransactionHistory(customers[id])
  }
  if (matrixAlgorithm(""))
}


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
       var
     }
   }

}

function occurence(search, dataset){
  var count = dataset.reduce(function(n,val){
    return n + (val === search);
  },0);
  return count
}
