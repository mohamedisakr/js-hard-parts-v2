// Calling a function in the same function call as it was defined
// Where you define your functions determines what data it has access to when you call it
function outer() {
  let counter = 0;
  function inc() {
    counter++;
  }
  inc();
}
const res = outer();
console.log(res);
