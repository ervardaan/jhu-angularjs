(function () {
'use strict';

angular.module('LaunchCheck', [])
.controller('LunchCheckController', LunchCheckController);


LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.name="";
  /*
$scope.response="";
  $scope.displayResponse=function(){
    $scope.response=findResponse($scope.name);
    */
  }

/*
  function findResponse(string1){
    var collectitems=string1.split(',');
    var items=0;
    for(var i=0;i<collectitems.length;i++)
    {
      if(collectitems[i]!="" && collectitems[i]!=" ")
      {
        items++;
      }
    }


    if(items==0)
    {
      return "please enter some items";
    }
    else if (items<3) {
      return "too less";
    }
    else {
      return "too much";
    }
  }
  */
  

})();
