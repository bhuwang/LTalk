angular.module('word', [])
    .controller('WordOfDay', function ($scope, $http) {

      $scope.init = function() {
    //   var xhr = new XMLHttpRequest();
    //   xhr.open("GET", "http://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5", true);
    //   xhr.onreadystatechange = function() {
    //   if (xhr.readyState == 4) {
    // // JSON.parse does not evaluate the attacker's scripts.
    //   var responseStr = xhr.responseText;
    //   var responseJSON = responseStr.word;
    //   // alert (xhr.responseText);
    //   }
    //   };
    //   xhr.send();
      $http.get("http://api.theysaidso.com/qod")
      .success(function(response) {
      $scope.word = response.contents.quotes[0].quote + "  -" + response.contents.quotes[0].author;
      });
    };
    
    // // Simple GET request example :
    // $http.get('/someUrl').
    // success(function(data, status, headers, config) {
    // // this callback will be called asynchronously
    // // when the response is available
    // }).
    // error(function(data, status, headers, config) {
    // // called asynchronously if an error occurs
    // // or server returns response with an error status.
    // });
    });