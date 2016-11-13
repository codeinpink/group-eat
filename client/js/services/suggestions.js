angular.module('app')
    .factory('Suggestions', function($http) {
        function getSuggestions(friends, callback) {
            var ids = friends.map(function(friend) {
                return friend.customerId;
            });

            $http({
                url: 'http://localhost:3000/suggestions/',
                method: 'GET',
                params: {friends: ids}
            }).then(function(response) {
                callback(response.data);
            }, function(response) {
                console.log('Could not get list of suggestions.');
                callback({suggestions: []});
            });
        }

        return {
            getSuggestions: getSuggestions
        };
    });
