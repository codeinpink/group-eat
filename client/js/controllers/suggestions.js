angular
    .module('app')
    .controller('SuggestionsCtrl', function($scope, $stateParams, $state) {
        $scope.suggestions = $stateParams.suggestions;

        if ($scope.suggestions == null) {
            $state.go('friend-selection');
        }
    });
