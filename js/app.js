'use strict';

angular.module('lms', ['ngRoute'])
    .controller('MainCtrl', function ($scope, $timeout) {
        // Build the date object
        $scope.date = {};

        // Update function
        var updateTime = function () {
            $scope.date.raw = new Date();
            $timeout(updateTime, 1000);
        }

        // Kick off the update function
        updateTime();
    });