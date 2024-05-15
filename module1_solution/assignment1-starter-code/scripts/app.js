(function () {
'use strict';

angular.module('LaunchCheck', [])
.controller('LunchCheckController', LunchCheckController);


LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.name="";
$scope.response="";
  $scope.displayResponse=function(){
    $scope.response=findResponse($scope.name);
  };


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

var red=document.getElementById("message");
    if(items==0)
    {
red.querySelector("p").style.color = "red";
red.querySelector("p").style.border = "10px solid black";
      return "please enter some items";


    }
    else if (items<3) {
      red.querySelector("p").style.color = "green";
      red.querySelector("p").style.border = "10px dotted orange";
      return "too less";

    }
    else {  red.querySelector("p").style.color = "green";
    red.querySelector("p").style.border = "10px dotted orange";
      return "too much";

    }
  }
  };

})();
