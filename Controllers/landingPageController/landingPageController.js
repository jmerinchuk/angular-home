var app = angular.module('myApp');

app.controller('landingPageController', function($scope) {
    $scope.showLanding = true;
    $scope.welcomeTitle = 'Welcome to Angular Home';
    $scope.welcomeMessage = 'This is the homepage for your app. Click the button below to explore the rest of the app.';

    $scope.enterApp = function() {
        $scope.showLanding = false;
    };
});
