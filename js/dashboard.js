angular.module('lms', ['ngRoute'])
    .controller('Dashboard', function ($scope, $http, $timeout) {

        // for getting current time
        // Build the date object
        $scope.date = {};

        // Update function
        var updateTime = function () {
            $scope.date.raw = new Date();
            $timeout(updateTime, 1000);
        }

        // Kick off the update function
        updateTime();

        $scope.init = function () {
            $http.get("http://api.theysaidso.com/qod")
                .success(function (response) {
                    $scope.wordOfDay = response.contents.quotes[0].quote;
                    $scope.author = response.contents.quotes[0].author
                });
        };

    });