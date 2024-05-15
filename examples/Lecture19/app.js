(function () {
'use strict';

angular.module('ControllerAsApp', [])
.controller('ParentController1', ParentController1)
.controller('ChildController1', ChildController1)
.controller('ParentController2', ParentController2)
.controller('ChildController2', ChildController2);

//starting of parent controller
ParentController1.$inject = ['$scope'];
function ParentController1($scope) {
  //3 properties instantiated on scope of parent contoller
  $scope.parentValue = 2;//primitive type value
  $scope.pc = this;//pc property pointing to actual parent controller 1 instance denoted by this
  $scope.pc.parentValue = 1;//add a parentvalue to actual pc-so the instance of parent controller 1 will have a property
}


ChildController1.$inject = ['$scope'];//we declared scope service on the child ocntroller also and didn't use scope service of parent controller
function ChildController1($scope) {
  // console.log("$scope.parentValue: ", $scope.parentValue);//child doesn't ahve a parent value so it will look for parent value up the prototype chain
  // //prototype of scope of chld controller is the scope of parentcontroller-so scope.parentvalue will give 2 as answer
  
  // console.log("CHILD $scope: ", $scope);
  
  // $scope.parentValue = 5;//creating an identical property name for a primitive value on scope of child controller-masking will happen
  // console.log("*** CHANGED: $scope.parentValue = 5 ***");
  // console.log("$scope.parentValue: ", $scope.parentValue);//will work on child controller's scope as this statement is written in child
  // console.log($scope);
  // // // // // //
  // console.log("$scope.pc.parentValue: ", $scope.pc.parentValue);//changing and accessing actual parent controller object that we declared 
  // //on scope of parent controller
  // $scope.pc.parentValue = 6;//changing parentvalue of actual parent controller instance from 1 to 6
  // console.log("** CHANGED: $scope.pc.parentValue = 6; ***");
  // console.log("$scope.pc.parentValue: ", $scope.pc.parentValue);
  // console.log("$scope: ", $scope);
  
  // console.log("$scope.$parent.parentValue: ", $scope.$parent.parentValue);//parent of scope of child is scope of parent object
  // //so we go to scope of parent object and get its parent value which is 2
}

// Controller As syntax
ParentController2.$inject = ['$scope'];
function ParentController2($scope) {
  var parent22 = this;
  parent22.value = 1;
  console.log("parent scopre is",$scope);
}
ChildController2.$inject = ['$scope'];
function ChildController2($scope) {
  var child22 = this;
  child22.value = 5;
  console.log("ChildController2 $scope: ", $scope);
}

})();
