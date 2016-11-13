angular
    .module('app')
    .controller('SuggestionsCtrl', function($scope, $stateParams) {
        $scope.suggestions = $stateParams.suggestions;
    });
