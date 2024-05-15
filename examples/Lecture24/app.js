(function () {
'use strict';

angular.module('ShoppingListPromiseApp', [])
.controller('ShoppingListController', ShoppingListController)
.service('ShoppingListService', ShoppingListService)
.service('WeightLossFilterService', WeightLossFilterService);

ShoppingListController.$inject = ['ShoppingListService'];
function ShoppingListController(ShoppingListService) {
  var list = this;

  list.items = ShoppingListService.getItems();

  list.itemName = "";
  list.itemQuantity = "";

  list.addItem = function () {
    ShoppingListService.addItem(list.itemName, list.itemQuantity);
  };

  list.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
  };
}


ShoppingListService.$inject = ['$q', 'WeightLossFilterService'];
//injecting service with $q and custom weight loss service
function ShoppingListService($q, WeightLossFilterService) {
  var service = this;

  // List of shopping items
  var items = [];

  //VERSION 1-SUPPLYING BOTH FUNCTION AND ERROR HANDLING FUNCTION --NOT PROPOGATING ERROR MESSAGE FROM ONE LAYER OF THEN TO ANOTHER LAYER
  /*
  service.addItem = function (name, quantity) {
    //checking asynchronous behavior by calling weightloss service's method
    var promise = WeightLossFilterService.checkName(name);
  
    promise.then(function (response) {
      //the check the quantity on promise object and then get response if both name and quantity are good to go
      var nextPromise = WeightLossFilterService.checkQuantity(quantity);
  //then push the accepted item into array by using then on nextpromise object
      nextPromise.then(function (result) {
        var item = {
          name: name,
          quantity: quantity
        };
        items.push(item);
      }, function (errorResponse) {
        console.log(errorResponse.message);//error message if nextpromise fails
      });
    }, function (errorResponse) {
      console.log(errorResponse.message);//error message if promise fails
    });
  };
*/

//VERSION 2--SUPPLYING ONLY FUNCTION WHILE LETTING ERROR MESSAGE TO PROPOGATE AND CATCHING IT LATER WHEN REJECT METHOD IS INVOKED
  // service.addItem = function (name, quantity) {
  //   var promise = WeightLossFilterService.checkName(name);
  
  //   promise
  //   .then(function (response) {
  //     return WeightLossFilterService.checkQuantity(quantity);
  //   })
  //   .then(function (response) {
  //     var item = {
  //       name: name,
  //       quantity: quantity
  //     };
  //     items.push(item);
  //   })
  //   .catch(function (errorResponse) {
  //     console.log(errorResponse.message);
  //   });
  // };

//VERSION 3-->using all promises in parallel and "then" after all of them 
  service.addItem = function (name, quantity) {
    var namePromise = WeightLossFilterService.checkName(name);
    var quantityPromise = WeightLossFilterService.checkQuantity(quantity);

    $q.all([namePromise, quantityPromise]).
    then(function (response) {
      var item = {
        name: name,
        quantity: quantity
      };
      items.push(item);
    })
    .catch(function (errorResponse) {
      console.log(errorResponse.message);
    });
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
}


WeightLossFilterService.$inject = ['$q', '$timeout'];
//injest $q and timeout services
function WeightLossFilterService($q, $timeout) {
  var service = this;

  service.checkName = function (name) {
    var deferred = $q.defer();
//acquiring deferred object  that contains environment for asynchronous behavior
//then sets up the result object(use keyword "Result"---we can even use any other name instead of result actually)
    var result = {
      message: ""
    };
//executing timeout function which stimulates asynchronous behaviour
    $timeout(function () {
      // Check for cookies
      if (name.toLowerCase().indexOf('cookie') === -1) {
        //if condition is successful,then desolve the result object
        deferred.resolve(result)
      }
      else {
        result.message = "Stay away from cookies, Yaakov!";
        //if condition is not met then reject the result object and set error message
        deferred.reject(result);
      }
    }, 3000);

    return deferred.promise;
  };


  service.checkQuantity = function (quantity) {
    var deferred = $q.defer();
    var result = {
      message: ""
    };

    $timeout(function () {
      // Check for too many boxes
      if (quantity < 6) {
        deferred.resolve(result);
      }
      else {
        result.message = "That's too much, Yaakov!";
        deferred.reject(result);
      }
    }, 1000);

    return deferred.promise;
  };
}

})();
