'use strict';

angular.module('lms', ['ngRoute'])
    .controller('MainCtrl', function ($scope) {
        // render  google sign in button
        $scope.renderSignInButton = function () {
            console.log("inside Main Controller");
            gapi.signin.render('signInButton', {
                'callback': $scope.signInCallback,
                'clientid': '329152280119-ergpn5gjq8hfkf6ru97rfl3dckfkcoph.apps.googleusercontent.com',
                'requestvisibleactions': 'http://schemas.google.com/AddActivity',
                'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email',
                'cookiepolicy': 'single_host_origin',
                'access_type': 'offline',
                'grant_type': 'authorization_code',
                'response_type': 'code'
            });
            console.log("rendered button")
        };

        //$scope.renderSignInButton();

    });