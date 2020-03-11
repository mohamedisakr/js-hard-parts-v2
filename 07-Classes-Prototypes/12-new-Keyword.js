function userCreator(name, score) {
  this.name = name;
  this.score = score;
}

userCreator.prototype.inc = function() {
  this.score++;
};

const user1 = new userCreator("tota", 2);
const user2 = new userCreator("tamil", 1);
user1.inc();
console.log(user1.score);
