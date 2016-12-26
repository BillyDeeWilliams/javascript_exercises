'use strict';
//Arrays!

//Write a function that adds all the numbers in a given array and
//returns the total
//eg: [1, 2, 3] -> 6
//[3, 4, 1] -> 8
function addNumbers(array) {
  //your code here!
  var summArr = array.reduce(function( previous, current ){
    return previous + current;
  }, 0);
  return summArr;
};

//Write a function that tells you whether an array contains a given
//string
//eg: ['sloth', 'slug', 'salmon'], 'sloth' -> true
//    ['slugs are better whatever'], 'sloth' -> true

function hasItem(array, match) {

  var bool = false;

  if(array.indexOf(match) !== -1){
    bool = true;
  };

  return bool;
};

//Write a function that tells you the highest value in a given array
//eg [2, 5, 9] -> 9
// [6, 4, 6] -> 6
function highestNumber(array) {
  //your code here
  var highest = array.reduce(function( highest, current ){
    return Math.max(highest,current);
  }, 0);
  return highest;
};


//Write a function that adds an s to the end of each string in an array

//eg: ['sloth', 'slug', 'bat'] -> ['sloths', 'slugs', 'bats']
//eg: ['snakes', 'baby'] -> ['snakess', 'babys']
function pluralize(array) {
  //your code here

  // var plarArr = array.map((item) => item + 's');
  var pluralized = array.map(function(item){
    return( item + 's');
  });
  return pluralized;
};

exports.addNumbers = addNumbers;
exports.hasItem = hasItem;
exports.highestNumber = highestNumber;
exports.pluralize = pluralize;
