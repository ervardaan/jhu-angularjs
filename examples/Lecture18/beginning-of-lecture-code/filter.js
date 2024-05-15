var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number array: ", numberArray);
function above5Filter(value)
{

  //value is each item in the array we are traversing on-check each value based on the condition defined in the function

    return value>5;
    //if the condition is matched on the value then the item will make it to the new array on the left

}
var filteredNumberArray=numberArray.filter(
above5Filter
);
//to the filter function we give some other function which we define and we give the functionality in that function
console.log("filtered is",filteredNumberArray);
var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];
console.log(shoppingList,"is the list");
var searchValue="Bismol";
function searchFilter(value)
{
  return value.indexOf(searchValue)!==-1;//check if the staring is substring in it
}
//invoking the filter function on the original shopping List
var searchedShoppingList=shoppingList.filter(searchFilter);
console.log("searched shopping list",searchedShoppingList);
