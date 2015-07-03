angular.module('dashboard', [])
    .controller('Dashboard', function ($scope, $http) {

      $scope.init = function() {
      $http.get("http://api.theysaidso.com/qod")
      .success(function(response) {
      $scope.wordOfDay = response.contents.quotes[0].quote;
      $scope.author = response.contents.quotes[0].author
      });
    };
    });


  
