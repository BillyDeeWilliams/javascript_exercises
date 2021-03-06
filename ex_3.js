'use strict';
//Objects!

//Sloth Ranch!
//This one's a little different. We're going to use objects, constructors and the prototype to model a sloth ranch

//Write a constructor that makes a new instance of Sloth when you call it. It will get passed a name as a string and a favorite tree as a string. It will also have two additional properties: feedings, which is an array of numbers that you'll initialize here as an empty array; and totalFed, which will be the running total of everything in the feedings array and start at 0.

/*eg: var violet = new Sloth('Violet', 'mangrove') -> {
  name: 'Violet',
  favoriteTree: 'mangrove',
  feedings: [],
  totalFed: 0
}*/

function Sloth(name, favoriteTree) {
  this.name = name;
  this.favoriteTree = favoriteTree;
  this.feedings = [];
  this.totalFed = 0;

};

//Our sloth needs a function to feed it. We want to track the size of the feedings throughout the week so we're going to keep them in an array. We'll simulate the amount fed with a random number from 0-5. Write a function 'feed' that adds a feeding to the feedings array.

/*eg: violet.feed() -> {
  name: 'Violet',
  favoriteTree: 'mangrove',
  feedings: [4],
  totalFed: 0
}

violet.feed() -> {
  name: 'Violet',
  favoriteTree: 'mangrove',
  feedings: [4, 2],
  totalFed: 0
}
*/

Sloth.prototype.feed = function() {
  function feedSize(max, min){
    var amnt = Math.floor(Math.random() * (max - min)) + min;
    return amnt;
  }
  this.feedings.push(feedSize(5,1));
  //your code here!
};

//It also needs a function to calculate how much it's been fed. Write a function 'calculateTotalFed'that adds up all of the numbers in the feedings array and sets the result to the property 'totalFed'.

/*eg: violet.calculateTotalFed() -> {
  name: 'Violet',
  favoriteTree: 'mangrove',
  feedings: [5, 4, 3, 1],
  totalFed: 18
}*/

Sloth.prototype.calculateTotalFed = function() {
  //your code here!
  var amntConsumed = this.feedings.reduce(function( previous, current ){return previous + current;}, 0);
  this.totalFed = amntConsumed;

};

//Now write a constructor for the ranch. It needs a property 'grove' which is an array where we keep all of our sloth instances.

/*eg: var ranchoSlotho = new SlothRanch() -> {
grove: []
}*/

function SlothRanch(name) {
  this.name = name;
  this.grove = [];

}

//Our ranch needs a function that creates a new sloth and adds it to the grove. You'll need to use your sloth constructor!

/* eg: ranchoSlotho.makeBabySloth('Brutus', 'cherry') -> {
  grove: [
    {name: 'Brutus', favoriteTree: 'cherry', feedings: [], totalFed: 0}
  ]
} */

SlothRanch.prototype.makeBabySloth = function(name, favoriteTree) {
  var baby = new Sloth (name, favoriteTree);
  this.grove.push( baby);
  //your code here!
};

//We also need to be able to feed them. Add a function to the prototype that feeds all the sloths in the grove

/*eg: ranchoSlotho.feedSloths() -> {
  grove: [
    {name: 'Brutus', favoriteTree: 'cherry', feedings: [6], totalFed: 0}
    {name: 'Violet', favoriteTree: 'mangrove', feedings: [3], totalFed: 0}
  ]
}*/

SlothRanch.prototype.feedSloths = function() {
  this.grove.forEach(function(sloth){
    sloth.feed;
  });
};

//We need to be able to track down which sloths are in which tree. To do that we want to write a function that takes in a string of a type of tree and then returns an array of the names of ALL of the sloths that have that tree as their favoriteTree

//eg: ranchoSlotho.findSloths('cherry') -> ['Brutus']
//eg: ranchoSlotho.findSloths('mangrove') -> ['Violet']

SlothRanch.prototype.findSloths = function(tree) {
  var slothsInGrove = this.grove;
  var slothsInTreeType;

  slothsInTreeType = slothsInGrove.flter(function(sloth){
    return sloth.favoriteTree === tree;
  });
  return slothsInTreeType;
//your code here!
};

//Finally we want to get the total fed per day for all of our sloths. For our purposes a day is one index in the feedings array. So we want the total of each index across all feedings arrays for all of our sloths as an array.

/* eg: if we started with: {
  grove: [
    {name: 'Violet', favoriteTree: 'mangrove', feedings: [2, 5, 1]},
    {name: 'Brutus', favoriteTree: 'cherry', feedings: [1, 7, 9]}
  ]
}

then:

ranchoSlotho.fedPerDay() -> [3, 11, 10]*/

SlothRanch.prototype.fedPerDay = function() {

// var this.grove.reduce(function(sloth){
//   this.feedings.
//   } )

  //your code here!
};

exports.Sloth = Sloth;
exports.SlothRanch = SlothRanch;
