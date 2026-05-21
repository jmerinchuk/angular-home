var app = angular.module('myApp');

app.controller('homePageController', function($scope) {
    $scope.currentPage = null;
    
    $scope.goToPage = function(page) {
        $scope.currentPage = page;
    };
    
    $scope.backToDashboard = function() {
        $scope.currentPage = null;
    };
});
