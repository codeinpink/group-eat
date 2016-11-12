angular
    .module('app')
    .controller('FriendSelectionCtrl', function($scope) {
        $scope.friends = [
            {
                name: 'Sally'
            },
            {
                name: 'Bob'
            }
        ];
    });
