'use strict';

module.exports = function(app) {

    app.dataSources.db.automigrate('Restaurant', function(err) {
        if (err) throw err;
    });

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

};
