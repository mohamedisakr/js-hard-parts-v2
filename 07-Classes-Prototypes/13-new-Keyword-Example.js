function User(name, score) {
  this.name = name;
  this.score = score;
}

User.prototype.inc = function() {
  this.score++;
};
User.prototype.login = function() {
  console.log("Logged in");
};

const user1 = new User("mariam", 4);
user1.inc();
console.log(user1.score);

const user2 = User("coti", 3);
user2.inc();
console.log(user2.score);
