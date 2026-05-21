var app = angular.module('myApp');

app.controller('exFetchController', function($scope) {

    $scope.todoCount = 0;
    $scope.todoList = [];
    $scope.todoLimit = 20;
    $scope.todoSkip = 0;
    $scope.showGetTodosButton = true;

    $scope.fetchTodos = function() {

        const url = `https://dummyjson.com/todos?limit=${$scope.todoLimit}&skip=${$scope.todoSkip}`;
        console.log('Fetching todos from URL:', url);

        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Append new todos
                $scope.todoList = $scope.todoList.concat(data.todos);

                // Update counters
                $scope.todoSkip += $scope.todoLimit;
                $scope.todoCount += data.todos.length;

                if ($scope.todoCount >= 100) {
                    $scope.showGetTodosButton = false;
                    $scope.$apply();
                    return;
                }

                // Tell Angular to update bindings
                $scope.$apply();

                // console.log("Data received:", data.todos);
                // console.log(data.todos);

                console.log("ToDos in list:");
                console.log($scope.todoList);

            })
            .catch(error => console.error('Error fetching todos:', error));
    };
});