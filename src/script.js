// This is an in-line comment.
/* This is a
multi-line comment */
//Task2
var myName;
//Task3
// Setup
var a;
// Only change code below this line
a = 7;
//Task4
// Setup
var b;
// Only change code below this line
b = a;
//Task5
var a = 9;
//Task6
var myFirstName = "Abhishek";
var myLastName = "Ojha";
//Task7
// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
//Task8
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
//Task9
let catName = "Oliver";
let catSound = "Meow!";
//Task10
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line
//Task11
const sum = 10 + 10;
//Task12
const difference = 45 - 33;
//Task13
const product = 8 * 10;
//Task14
const quotient = 66 / 33;
//Task15
let myVar = 87;

// Only change code below this line
myVar = ++myVar;
//Task16
let myVar = 11;

// Only change code below this line
myVar = --myVar;
//Task17
const ourDecimal = 5.7;

// Only change code below this line
const myDecimal = 5.7;
//Task18
const product = 2.0 * 2.5;
//Task19
const quotient = 4.4 / 2.0; // Change this line
//Task20
const remainder = 11 % 3;
//Task21
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

//Task22
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

//Task23
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

//Task24
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

//Task25
const myStr = 'I am a "double quoted" string inside "double quotes".'; // Change this line

//Task26
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
//Task27
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

//Task28
const myStr = "This is the start. " + "This is the end."; // Change this line

//Task29
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

//Task30
// Only change code below this line
const myName = "abhishek";
const myStr = "My name is " + myName + " and I am well!";

//Task31
// Change code below this line
const someAdjective = "easy";
let myStr = "Learning to code is ";
myStr += someAdjective;

//Task32
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

//Task33
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

//Task34
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

//Task35
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

//Task36
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

//Task37
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line
//Task38\
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = myNoun + "," + myAdjective + "," + myVerb + "," + myAdverb; // Change this line
// Only change code above this line

//Task39
const myArray = ["Abhishek", 290];
//Task40
const myArray = [
  ["Bulls", 23],
  ["White Sox", 45],
];
//Task41
const myArray = [50, 60, 70];
const myData = myArray[0];
//Task42
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;

//Task43
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
//Task44
const myArray = [
  ["John", 23],
  ["cat", 2],
];

// Only change code below this line
myArray.push(["dog", 3]);
//Task 45
const myArray = [
  ["John", 23],
  ["cat", 2],
];

// Only change code below this line
const removedFromMyArray = myArray.pop();
//Task46
const myArray = [
  ["John", 23],
  ["dog", 3],
];

// Only change code below this line
const removedFromMyArray = myArray.shift();

//Task47
const myArray = [
  ["John", 23],
  ["dog", 3],
];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);

//Task48
const myList = [
  ["Chocolate Bar", 15],
  ["Chocolate Bar", 15],
  ["Chocolate Bar", 15],
  ["Chocolate Bar", 15],
  ["Chocolate Bar", 15],
];
//Task49
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();
//Task50
function functionWithArgs(a, b) {
  var sum = a + b;
  console.log(sum);
}
functionWithArgs(2, 6);
//Task51
function timesFive(a) {
  return 5 * a;
}
//Task52
// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
//Task53
function myLocalScope() {
  // Only change code below this line
  let myVar;
  console.log("inside myLocalScope", myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log("outside myLocalScope", myVar);
//Task54
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  let outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}
myOutfit();
//Task55
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum += 5;
}

// Only change code above this line

addThree();
addFive();
//Task56
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
//Task57
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  var removed = arr.shift();
  return removed;
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
//Task58
function welcomeToBooleans() {
  // Only change code below this line
  return true; // Change this line
}
//Task59
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
//Task60
function testEqual(val) {
  if (val == 12) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
//Task61
function testStrict(val) {
  if (val === 7) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
//Task62
function compareEquality(a, b) {
  if (a === b) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
//Task63
function testNotEqual(val) {
  if (val != 99) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
//Task64
function testStrictNotEqual(val) {
  if (val !== 17) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
//Task65
function testGreaterThan(val) {
  if (val > 100) {
    // Change this line
    return "Over 100";
  }

  if (val > 10) {
    // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
