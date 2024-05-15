(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('loveme11',loveloveme);

MsgController.$inject = ['$scope','loveme11Filter'];
function MsgController($scope,loveme11Filter) {
  $scope.stateOfBeing = "hungry";

  $scope.sayMessage = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    return msg;
  };

  $scope.sayLovesMessage = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    msg=loveme11Filter(msg);
    return msg;
  };
  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}
function loveloveme()
{
  return function(input)
  {
    input=input || "";
    input=input.replace('likes','loves');
    return input;
  };
}

})();
