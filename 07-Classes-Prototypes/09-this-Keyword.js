function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  inc: function() {
    function add1() {
      this.score++;
    }
    add1();
  }
};

// const userFunctionStore = {
//   inc() {
//     function add1() {
//       this.score++;
//     }
//     add1();
//   }
// };

const user1 = userCreator("tota", 2);
const user2 = userCreator("tamil", 1);
user1.inc();
console.log(user1.score);
