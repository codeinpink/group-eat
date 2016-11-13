angular.module('app')
    .factory('Suggestions', function($http) {
        function getSuggestions(friends, callback) {
            $http.get('http://localhost:3000/suggestions/').then(function(response) {
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
