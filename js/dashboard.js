var myDashboard = angular.module('lms', ['ngRoute']);

myDashboard.controller('Dashboard', function ($scope, $http, $timeout) {

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

        //populate word of the day
        $scope.wordOfDay = function () {
            $http({
                method: 'GET',
                url: 'http://10.10.11.16:8080/api/quoteoftheday',
                headers: {
                    'apiKey': 'leapfrog',
                    'Content-Type': 'application/json'
                }
            }).success(function (data) {
                $scope.wordOfDay = data.quote
                $scope.author = data.author
            }).error(function (data) {
                console.log(data);
            });
        };
        $scope.wordOfDay();

        // populate today's leave
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

        // populate today's birthday
        $scope.birthdayToday = function () {
            $http({
                method: 'GET',
                url: 'http://10.10.11.16:8080/api/birthdaytoday',
                headers: {
                    'apiKey': 'leapfrog',
                    'Content-Type': 'application/json'
                }
            }).success(function (data) {
                console.log(data);
                $scope.birthdays = data;
            }).error(function (data) {
                console.log(data);
            });
        };

        $scope.birthdayToday();


        // populate highlights of the day
        $scope.getHighlights = function () {
             $http({
                method: 'GET',
                url: 'http://10.10.11.16:8080/api/highlights',
                headers: {
                    'apiKey': 'leapfrog',
                    'Content-Type': 'application/json'
                }
            }).success(function (data) {
                console.log(data);
                $scope.highlightsData = data
                $timeout($scope.getHighlights,5000);
            }).error(function (data) {
                console.log(data);
            });
        };
        $scope.getHighlights();

        // push new highlights
        $scope.pushHighlights = function () {
            $http({
                method: 'POST',
                url: 'http://10.10.11.16:8080/api/pushhighlights?message='+$scope.notification,
                headers: {
                    'apiKey': 'leapfrog'
                }

            }).success(function (data) {
                console.log(data);
                $scope.notification = "";
            }).error(function (data) {
                console.log(data);
            });
        };

       });
