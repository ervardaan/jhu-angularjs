(function () {
'use strict';//always needed to add use strict construct
//x='hello' will give error if use strict is used
angular.module('myFirstApp', [])
//name of app, dependencies
//app bound to index.html file's head tag full
//controller=VIEW
//give a function for functionality of the controller
//add ng-app and ng-controller in index.html file 
//binding happens automatically by angular
.controller('MyFirstController', function () {

});

})();
//using an IFFE SO THAT NO LOCAL VARIABLES BLEED INTO THE GLOBAL SCOPE
