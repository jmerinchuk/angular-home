var app = angular.module('myApp');

app.factory('myHttpService', function($http) {
    return {
        getData: function(url) {
            return $http.get(url)
                .then(function(response) {
                    return { success: true, data: response.data };
                })
                .catch(function(error) {
                    return { success: false, error: error };
                });
        }
    };
});