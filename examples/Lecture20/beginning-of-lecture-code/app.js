(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListAddController', ShoppingListAddController)
.controller('ShoppingListShowController', ShoppingListShowController)
.service('ShoppingListService', ShoppingListService);//parameter 1 ad parameter 2 can have different names
//parameter 1 is name used to resgister the service

ShoppingListAddController.$inject = ['ShoppingListService'];
function ShoppingListAddController(ShoppingListService) {
  var itemAdder = this;//points to ShoppingListAddController instance

  itemAdder.itemName = "";
  itemAdder.itemQuantity = "";

  itemAdder.addItem = function () {
    ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
    //using additem method from below which is a property of the service
  }
}


ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService) {
  var showList = this;//points to instance of ShoppingListShowController

  showList.items = ShoppingListService.getItems();
}

///this is the service function constructor and can contain many functions inside it which can be used directly with name used to 
//register the service
function ShoppingListService() {
  var service = this;
  //not exposing items variable to the service we have created as we are using var items instead of service.items
  //which will attatch items array directly to service we have created as a property

  // List of shopping items
  var items = [];
//additem method is a property to the service we have created as we are using service.additem instead of var additem
  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };
//getitems is also a property to service we created-used service.getitems isntead of var getitems
  service.getItems = function () {
    return items;
  };
}

})();
