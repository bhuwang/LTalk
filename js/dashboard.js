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

        $scope.wordOfDay = function () {
            $http({
                method: 'GET',
                url: 'http://10.10.11.16:8080/api/quoteoftheday',
                headers: {
                    'apiKey': 'leapfrog',
                    'Content-Type': 'application/json'
                }
            }).success(function (data) {
                $scope.wordOfDay = response.contents.quotes[0].quote;
                $scope.author = response.contents.quotes[0].author
            }).error(function (data) {
                console.log(data);
            });
        };
        // $scope.wordOfDay();

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

        // get birthday today through API
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

        // Display highlights of the day
        $scope.displayHighlights = function (data) {
          var data = '[{"message":"Hello Code for Fun, Are you ready?", "lastUpdated": "2015-07-06T00:28:43Z"},{"message":"Dear All, Please be informed that you need to withdraw your quarterly budget by tomorrow", "lastUpdated": "2015-07-06T00:28:43Z"}] '
          $scope.highlightsData = jQuery.parseJSON( data);
        };

        $scope.getHighlights = function () {
            // $http({
            //     method: 'GET',
            //     url: 'http://10.10.11.16:8080/api/getHighlights'
            //     headers: {
            //         'apiKey': 'leapfrog',
            //         'Content-Type': 'application/json'
            //     }
            // }).success(function (data) {
            //     console.log(data);
            //     $scope.displayHighlights(data);
            // }).error(function (data) {
            //     console.log(data);
            // });
        $scope.displayHighlights("test");
        };
        $scope.getHighlights();

        $scope.pushHighlights = function () {

        };
    });