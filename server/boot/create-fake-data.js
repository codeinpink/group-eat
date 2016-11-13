'use strict';

module.exports = function(app) {
  app.dataSources.db.automigrate('Restaurant', function(err) {
      if (err) throw err;
  });

  var fs = require('fs');
  var obj = fs.readFile('attributed_restaurants.json', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    var sorted = obj.sort()
    var tempDict = {}
    for (var i = 1; i < sorted.length; i++){
      var restaurant = sorted[i];
      if (!restaurant.name in tempDict) {
        createRestaurant(restaurant, app)
      } else{
        createChain(restaurant,app)
      }
      tempDict[(restaurant.name)] = true;
    }
    MyProduct.find({
    where: {price: {lt: 100}},
    order: 'price ASC',
    limit: 3
}, function(err, products) {
    ...
});
    console.log(app.model.Restaurants)
  });
}

function createChain(restaurant, app){
  //do add chain

    app.models.Restaurant.create([
          {
            id: restaurant.id,
            name: restaurant.name,
            address: restaurant.address,
            chain: {}
          }
        ], function(err, rest) {
            if (err) throw err;
            console.log('Models created:\n', rest);
            app.models.Chain.create([
            {
                name: restaurant.name,
                tags: []
            }], function(err, chain) {
              if (err) throw err;
              console.log('Models created:\n', chain);
              rest.chain = chain
            });
        });
}


function createRestaurant(res, app){

  //do add Restaurant

  app.models.Restaurant.create([
        {
          id: res.id,
          name: res.name,
          address: res.address,
          chain: {}
        }
      ], function(err, rest) {
          if (err) throw err;
          console.log('Models created:\n', rest);
      });
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
