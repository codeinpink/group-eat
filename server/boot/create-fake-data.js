'use strict';

module.exports = function(app) {




    app.dataSources.db.automigrate('Restaurant', function(err) {
        if (err) throw err;
    });

    var fs = require('restaurant.json');
    var obj = JSON.parse(fs.readFileSync('restaurant.json', 'utf8'));
    console.log(obj)
    /*
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
    });*/

};
