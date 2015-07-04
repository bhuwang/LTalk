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
                $timeout($scope.getHighlights,10000);
            }).error(function (data) {
                console.log(data);
            });
        };
        $scope.getHighlights();

        $scope.pushHighlights = function () {
            $http({
                method: 'POST',
                url: 'http://10.10.11.16:8080/api/pushHighlights',
                data: $.param({highlight: $scope.notification}),
                headers: {
                    'apiKey': 'leapfrog',
                    'Content-Type': 'application/json'
                }

            }).success(function (data) {
                console.log(data);
            }).error(function (data) {
                console.log(data);
            });
        };

   
    });

// myDashboard.directive('ngEnter', function () {
//     return function (scope, element, attrs) {
//         element.bind("keydown keypress", function (event) {
//             if(event.which === 13) {
//                 scope.$apply(function (){
//                     scope.$eval(attrs.ngEnter);
//                 });

//                 event.preventDefault();
//             }
//         });

//     }};
