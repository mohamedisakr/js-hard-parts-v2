// http://csbin.io/closures

// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log("Hello, world!");

/*
// Challenge 1
function createFunction() {
  function sayHello() {
    console.log("hello");
  }
  return sayHello;
}

const function1 = createFunction();
function1();
*/

/*
// Challenge 2
function createFunctionPrinter(input) {
  function printInput() {
    console.log(input);
  }
  return printInput;
}

const printSample = createFunctionPrinter("sample");
printSample();
const printHello = createFunctionPrinter("hello");
printHello();
*/

/*
// Challenge 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter ", counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter(); // 1
willCounter(); // 2
willCounter(); // 3

jasCounter(); // 1
willCounter(); // 4
*/

/*
// Challenge 4
function addByX(x) {
  function inc(input) {
    console.log(input + x);
    return input + x;
  }
  return inc;
}

// now call addByTwo with an input of 1

// now call addByTwo with an input of 2
const addByTwo = addByX(2);
// console.log(addByTwo);

console.log("addByTwo");
addByTwo(1); //should return 3
addByTwo(2); //should return 4
addByTwo(3); //should return 5

console.log("addByThree");
const addByThree = addByX(3);
addByThree(1); //should return 4
addByThree(2); //should return 5

console.log("addByFour");
const addByFour = addByX(4);
addByFour(4); //should return 8
addByFour(10); //should return 14
*/

//--------------------------------------------------
// Extension
//--------------------------------------------------

/*
// Extension: Challenge 5

var count = 0;
function once(func) {
  var result;
  //   console.log("result", result);

  function inner(num) {
    // console.log("result", result);
    console.log(!result && count < 2);
    if (!result && count < 2) {
      count++;
      result = func(num);
      return result;
    } else {
      return result;
    }
  }
  return inner;
}

function addByTwo(n) {
  return n + 2;
}

const onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4)); //should log 6
console.log(onceFunc(10)); //should log 6
console.log(onceFunc(9001)); //should log 6
*/

/*
// Extension: Challenge 6
function after(count, func) {
  let times = 0;
  function inner() {
    times++;
    console.log(times);
    if (times === count) {
      return func();
    }
  }
  return inner;
}

const called = function() {
  console.log("hello");
};

const afterCalled = after(3, called);

afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> 'hello' is printed
*/

/*
// Extension: Challenge 7
function delay(func, wait, ...args) {
  return function inner() {
    setTimeout(func, wait, ...args);
  };
}

let count = 0;

const delayedFunc = delay(() => count++, 1000);

delayedFunc();

console.log(count); // should print '0'

setTimeout(() => console.log(count), 1000); // should print '1' after 1 second
*/

// Extension: Challenge 8
function rollCall(names) {
  let index = 0;
  return function display() {
    if (index === names.length) {
      console.log("Everyone accounted for");
      return;
    }
    console.log(names[index++]);
  };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const rollCaller = rollCall(["Victoria", "Juan", "Ruth"]);
rollCaller(); // -> Should log 'Victoria'
rollCaller(); // -> Should log 'Juan'
rollCaller(); // -> Should log 'Ruth'
rollCaller(); // -> Should log 'Everyone accounted for'
