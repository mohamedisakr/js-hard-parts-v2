// Functions can be returned from other functions
function createFunction() {
  function multiplyBy2(num) {
    return num * 2;
  }
  return multiplyBy2;
}

const generatedFunction = createFunction();
const result = generatedFunction(3);

console.log(generatedFunction);
console.log(result);
