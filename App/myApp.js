var app = angular.module('myApp', []);

// Root Scope values for entire program
app.run(function($rootScope) {

    $rootScope.favColor = 'blue';

});