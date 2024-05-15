(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];
function CounterController($scope) {
$scope.onceCounter=0;$scope.counter=0;
$scope.name='vardaan';
  $scope.showNumberOfWatchers = function () {
console.log("number of watchers is ",$scope.$$watchersCount);
  };
$scope.countOnce=function()
{
  $scope.onceCounter=1;
};
$scope.upCounter=function()
{
  $scope.counter++;
};
// $scope.$watch('onceCounter',function(new1,old1)
// {
//   console.log('old value',old1);
//   console.log('new value',new1);
// });
//
// $scope.$watch('counter',function(oo1,nw1)
// {
//   //we always first get new value and then old value of the property in this function-name of the variables doesn't matter
//   //here nw1 will always get the old value of the property
//   console.log('old value',oo1);
//   console.log('new value',nw1);
// });
$scope.$watch(function()
{
  console.log('digest loop done');
})
}
})();
