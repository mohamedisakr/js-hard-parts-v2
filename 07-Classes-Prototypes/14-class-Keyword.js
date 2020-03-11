class User {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  inc() {
    this.score++;
  }
  login() {
    console.log("Logged in");
  }
}

const user1 = new User("coti", 3);
user1.inc();
console.log(user1.score);
