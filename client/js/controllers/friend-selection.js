angular
    .module('app')
    .controller('FriendSelectionCtrl', function($scope, Suggestions, $state) {
        // Replace with service call or hardcode in our info
        $scope.friends = [
            {
                name: 'Bob Ross',
                customerId: 'a',
                selected: false
            },
            {
                name: 'Shannon Babincsak',
                customerId: '5827e972360f81f10454a64d',
                selected: false
            },
            {
                name: 'Sam Bible',
                customerId: '5827e99b360f81f10454a64e',
                selected: false
            },
            {
                name: 'Rain Li',
                customerId: '5827e9e8360f81f10454a64f',
                selected: false
            },
            {
                name: 'Hoss',
                customerId: 'b',
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
