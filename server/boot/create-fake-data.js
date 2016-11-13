'use strict';

module.exports = function(app) {


  app.dataSources.db.automigrate('restaurant', function(err) {

      if (err) throw err;

  });
  var fs = require('fs');
  var obj = fs.readFile('./server/boot/restaurants.json', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    console.log(obj[0]);
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
