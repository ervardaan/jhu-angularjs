(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Yaakov";//name attached to scope
  $scope.sayHello = function () {//function attached to scope
    return "Hello Coursera!";
  };
});

})();
