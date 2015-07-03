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

        // get on leave today through API
        $scope.requestOnLeaveToday = function () {
            $http({
                method: 'GET',
                url: 'http://10.10.11.16:8080/api/onleavetoday',
                headers: {
                    'apiKey': 'leapfrog',
                    'Content-Type': 'application/json'
                }
            }).success(function (data) {
                $scope.employees = data;
            }).error(function (data) {
                console.log(data);
            });
        };

        $scope.requestOnLeaveToday();

    });