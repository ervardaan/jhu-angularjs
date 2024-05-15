(function()
{
'use strict';
angular.module('ShoppingListPromiseApp',[])
.controller('ShoppingListController',ShoppingListController)
.service('name1',name2)
.service('name3',name4)
ShoppingListController.$inject=['name1'];
function ShoppingListController(name1)
{
    var list=this;
    list.items=name1.get();
    list.item="";
    list.quantity="";
    list.addItem=function()
    {
        name1.add(list.item,list.quantity);
    };
    list.removeItem=function(index)
    {
        name1.remove(index);
    };
}
name2.$inject=['$q,$name3'];
function name2($q,name3)
{
var myservice=this;
var items=[];
//METHOD 1
// myservice.add=function(item,quantity)
// {
// var promise=name3.checkName(item);
// promise.then(function(result1)
// {
// var nextPromise=name3.checkQuantity(quantity);
// nextPromise.then(function(result2)
// {
// var item={
//     item:item,
//     quantity:quantity
// };
// items.push(item);
// },function(myError2)
// {
// console.log(myError2.message);
// });
// },function(myError)
// {
// console.log(myError.message);
// }
// );
// };

//METHOD 2
// myservice.add=function(item,quantity)
// {
//     var promise=name3.checkName(item);
//     promise.then(function(result1)
//     {
// return name3.checkQuantity(quantity);
//     })
//     .then(function(result2)
//     {
// var item={
//     item:item,
//     quantity:quantity
// };
// items.push(item);
//     })
//     .catch(function(myerror)
//     {
// console.log(myerror.message);
//     });
// };

//METHOD 3
myservice.add=function(item,quantity)
{
var itemPromise=name3.checkName(item);
var quantityPromise=name3.checkName(quantity);
$q.all([itemPromise,quantityPromise])
.then(function(result3)
{
var item={
    item:item,
    quantity:quantity
};
items.push(item);
})
.catch(function(myerror)
{

});
};

myservice.remove=function(index)
{
    items.splice(index,1);
};
myservice.get=function()
{
    return items;
};
}
name4.$inject=['$q','$timeout'];
function name4($q,$timeout)
{
    var myservice=this;
    name4.checkName=function(name)
    {
var deferred=$q.defer();
var output={
    message:""
};
$timeout(function()
{
if(name.toLowerCase().indexOf('cookie')===-1)
{
deferred.resolve(output);
}
else{
    output.message="stay away from cookie";
    deferred.reject(output);
}
},3000);
return deferred.promise;
    };
    name4.checkQuantity(quantity)
    {
var deferred=$q.defer();
var output={
    message:""
};
$timeout(function()
{
if(quantity>6)
{
    output.message="don't eat more";
    deferred.reject(output);
}
else{
    deferred.resolve(output);
}
},3000);
return deferred.promise;
    };
}
})();