// http://csbin.io/async

/* CHALLENGE 1 */
/*
function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}

testMe();
sayHowdy();
*/

// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?

/* CHALLENGE 2 */
/*
function delayedGreet() {
  setTimeout(() => {
    console.log("welcome");
  }, 3000);
}

delayedGreet();

*/
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */
/*
function helloGoodbye() {
  setTimeout(() => console.log("good bye"), 2000);
  console.log("hello");
}

helloGoodbye();
*/
// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */
/*
function brokenRecord() {
  setInterval(() => console.log("hi again"), 1000);
}

brokenRecord();
*/

// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */
/*
function limitedRepeat() {
  let id = setInterval(() => console.log("hi for now"), 1000);
  function stop() {
    clearInterval(id);
  }
  setTimeout(stop, 5000);
}

limitedRepeat();
*/

// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */
/**
 * execute the given function every interval number of milliseconds,
 * but then automatically stop after duration milliseconds
 * @param {*} func function to be called
 * @param {*} interval execute the funtion every interval # of milliseconds
 * @param {*} duration stop the function after duration # of milliseconds
 */
/*
function everyXsecsForYsecs(func, interval, duration) {
  let id = setInterval(func, interval);
  function stop() {
    clearInterval(id);
  }
  setTimeout(stop, duration);
}
// Uncomment the following lines to check your work!
function theEnd() {
  console.log("This is the end!");
}
everyXsecsForYsecs(theEnd, 2000, 20000); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
*/
/* CHALLENGE 7 */

function delayCounter(target, wait) {
  return function inc() {
    for (let i = 1; i <= target; i++) {
      setTimeout(() => console.log(i), wait);
    }
  };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const countLogger = delayCounter(3, 1000);
countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3
