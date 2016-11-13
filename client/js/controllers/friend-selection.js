angular
    .module('app')
    .controller('FriendSelectionCtrl', function($scope, Suggestions, $state) {
        // Replace with service call or hardcode in our info
        $scope.friends = [
            {
                name: 'Shannon Babincsak',
                customerId: '5827e897360f81f10454a646',
                selected: false
            },
            {
                name: 'Sam Bible',
                customerId: '5827e8d4360f81f10454a648',
                selected: false
            },
            {
                name: 'Rain Li',
                customerId: '5827e8b0360f81f10454a647',
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
