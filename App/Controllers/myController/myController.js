var app = angular.module('myApp');

// My Controller to set up any variables
app.controller('myController', function(
    $scope, 
    $location, 
    $timeout) {
    $scope.name = "James Dean";

    $scope.myUrl = $location.absUrl();

    $scope.showHiddenMessage = false;
    $scope.hiddenMessage = "This message pops up after a 2 second timeout";
    $timeout(function () {
        $scope.showHiddenMessage = true;
    }, 2000);
});

// Directive 1
app.directive("w3TestDirective1", function() {
    return {
        template : " Text - I was made in a directive constructor!"
    };
});

// Directive 2
app.directive("w3TestDirective2", function() {
    return {
        template : "<p>HTML Tag made by a directive!</p>"
    };
});