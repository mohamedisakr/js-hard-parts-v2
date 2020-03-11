function createUser(name, score) {
  const user = Object.create(userStore);
  user.name = name;
  user.score = score;
  return user;
}

const userStore = {
  inc() {
    this.score++;
  },
  login() {
    console.log("Logged in");
  }
};

const user1 = createUser("tota", 33332);
user1.inc();
console.log(user1.score);

const user2 = createUser("tamil", 44443);
user2.inc();
console.log(user2.score);
console.log(user2);
// console.log(user2.__proto__);
