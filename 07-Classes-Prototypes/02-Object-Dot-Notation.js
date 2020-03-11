const user1 = {
  name: "mariam",
  score: 90000,
  inc() {
    this.score++;
  }
};
user1.inc();
console.log(user1.score);

const user2 = {};
user2.name = "coti";
user2.score = 99999;
user2.inc = () => {
  user2.score++;
};
user2.inc();
console.log(user2.score);

const user3 = Object.create(null);
// console.log(user3);
user3.name = "tota";
user3.score = 88887;
user3.inc = () => {
  user3.score++;
};
user3.inc();
console.log(user3.score);

function createUser(name, score) {
  return {
    name,
    score,
    inc() {
      this.score++;
    }
  };
}

const user4 = createUser("tamil", 44443);
user4.inc();
console.log(user4);
console.log(user4.score);
