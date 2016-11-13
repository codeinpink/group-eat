angular
    .module('app')
    .controller('FriendSelectionCtrl', function($scope, GooglePlaces, Suggestions, $state) {
        // Replace with service call or hardcode in our info
        $scope.friends = [
            {
                name: 'Sally',
                selected: false
            },
            {
                name: 'Bob',
                selected: false
            }
        ];

        $scope.getSuggestions = function() {
            var selectedFriends = $scope.friends.filter(function(friend) {
                return friend.selected;
            });

            console.log(selectedFriends);

            Suggestions.getSuggestions(selectedFriends, function(data) {
                var suggestions = data.suggestions;
                $state.go('suggestions', {suggestions: suggestions});
            });
        }
    });
