'use strict';

module.exports = function(app) {
  app.dataSources.db.automigrate('Restaurant', function(err) {
      if (err) throw err;
  });

  var fs = require('fs');
  var obj = fs.readFile('./server/boot/restaurants.json', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    var allRes = obj.map(function(a) {return a.name;}).sort()
    //console.log(allRes.sort());
    console.log(allRes.sort());
    var chains = getChains(allRes).sort();
    console.log(allRes.length)
    console.log(chains.length)
    for (var res in allRes) {
      if (!isChain(allRes[res],chains)){
        //console.log(allRes[res])
      }
    }
  });
}

function loadRestaurants(){

}



function isChain(name,chainList){
  return chainList.indexOf(name) > -1;

}

function getChains(allRestaurant){
  var i,
  len=allRestaurant.length,
  result = [],
  obj = {};
  for (i=0; i<len; i++)
  {
    obj[allRestaurant[i]]=0;
  }
  for (i in obj) {
    result.push(i);
  }
  return result;
}


/*
function createChain(app, chainName, chainTags){

    app.models.Chain.create([
      {
          name: chainName,
          tags: chainTags
      }
    ], function(err, restaurants) {
        if (err) throw err;
        console.log('Models created:\n', restaurants);

    });

};

/*

    app.dataSources.mysqlDs.automigrate('Restaurant', function(err) {

        if (err) throw err;

    });s



    app.models.Restaurant.create([

        {

            id: '1',

            name: 'Fake Restaurant',

            address: {

                street: '123 Ave',

                city: 'Cityville',

                state: 'State',

                zipcode: '12345'

            }

        }

    ], function(err, restaurants) {

        if (err) throw err;



        console.log('Models created:\n', restaurants);

    });



};*/
