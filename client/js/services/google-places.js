angular.module('app')
    .factory('GooglePlaces', function() {
        var Nashville = new google.maps.LatLng(36.160261, -86.7823037);
        var map = new google.maps.Map('', {
            center: Nashville,
            zoom: 1
        });
        var service = new google.maps.places.PlacesService(map);
        var restaurants = [];

        function getNearbyRestaurants() {
            var req = {
                location: Nashville,
                radius: 50000,
                types: ['restaurant', 'bar']
            };

            service.nearbySearch(req, function(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        restaurants.push(results[i]);
                    }
                }

                console.log(restaurants);
            });
        }

        getNearbyRestaurants();

        var getRestaurantData = function(name, location) {

        };

        return {
            getRestaurantData: getRestaurantData
        };
    });
