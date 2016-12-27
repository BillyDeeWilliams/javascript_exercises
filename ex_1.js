'use strict';
//Strings!

//Write a function that capitalizes the first string, lower cases the second string and then makes one string out of them
//eg: 'bat', 'slOth' -> 'BATsloth'
//eg: 'my', 'Bud' -> 'MYbud'

function capHalf(firstString, secondString) {
  var one = firstString.toUpperCase();
  var two = secondString.toLowerCase();

  return one + two;

}

//Write a function that takes a name and returns only the first initial capitalized with a period after it
//eg: 'mega man' -> 'M.'
//eg: 'sailor moon' -> 'S.'

function mainInitial(name) {
  var strName = String(name).toUpperCase();
  var initial = strName[0];

  return initial + '.';
}

//Write a function that reverses a string
//eg: 'sloth' -> 'htols'
//eg: 'bat' -> 'tab'

function reverseString(string) {
  var front = String(string);
  var back = '';
//front.length - 1 = last index of front
  for ( var i = front.length - 1; i >= 0 ; i--){
    back += (front[i]);
  }
  return back;
}

//Write a function that capitalizes the first letter of every word
//eg: 'no way that rules' -> 'No Way That Rules'
//eg: 'whatever sloths are the best' ->  'Whatever Sloths Are The Best'


function capitalizeEach(string) {
    //your code here!
    // string.split(" ") splits the string of words and indexes them in an array
    // .map goes through each index (word)
    // x[0].toUpperCase() takes the 0 index of x (first letter of the current word in the array) and uppercases it
    // x.slice(1) slices x (current word in the array) at the first index to separate the first letter from the rest of the word
  var capLetter0 = string.split(' ').map(function(x){
    return x[0].toUpperCase() + x.slice(1);
  });

  return capLetter0.join(' ');
}

exports.capHalf = capHalf;
exports.mainInitial = mainInitial;
exports.reverseString = reverseString;
exports.capitalizeEach = capitalizeEach;
